import { useForm, Controller } from "react-hook-form";
import { FormInput, FormSelect, UploadFile } from "../../../components";
import ReactQuill from "react-quill";
import { supabase } from "../../../libs/supabaseClient";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

const AccountForm = ({ userProfile: { data } }) => {
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: data.name,
      email: data.email,
      about: data.about,
      lastName: data.lastName,
    },
  });

  const onSubmit = async (formData) => {
    // Handle form submission here
    const { name, role, lastName, about } = formData;
    setLoading(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        name,
        role,
        lastName: lastName || null,
        about: about || null,
        image: imageRef.current || null,
      })
      .eq("id", data.id);

    if (error) {
      console.log(error);
      toast.error("There was error submitting the form");
    } else {
      toast.success("Account was updated successfully");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md mx-auto  w-full ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <FormInput
          label="name"
          register={register}
          errors={errors}
          type="text"
        />

        <FormInput
          label="email"
          register={register}
          errors={errors}
          type="email"
          readOnly={true}
        />

        <FormInput
          label="LastName"
          register={register}
          errors={errors}
          type="text"
          required={false}
        />

        <FormSelect
          errors={errors}
          label="Role"
          name="role"
          register={register}
          options={["Admin", "User"]}
        />

        <section className="flex flex-col gap-2 my-3">
          <p className="font-semibold">About</p>
          <Controller
            name="about"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <ReactQuill theme="snow" {...field} />}
          />
          {errors.description?.type === "required" && (
            <p role="alert" className="text-sm text-red-600 mt-1">
              Description is required
            </p>
          )}
        </section>
        <UploadFile ref={imageRef} />

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="btn btn-primary transform hover:scale-105 transition-transform "
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
