import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { FormSelect } from "../../../components";
import { supabase } from "../../../libs/supabaseClient";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const UserAssignmentForm = ({ developers, projectId }) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    control,
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (formData) => {
    const { role, user } = formData;

    const { error } = await supabase
      .from("UsersProjects")
      .insert({ projectId, userId: user.value, role });

    if (error) {
      console.log(error);
      toast.error(error);
      return;
    }

    toast.success("User assigned to the Project");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white px-8 py-4 flex flex-col gap-6"
    >
      <div className="mt-1">
        <p className="label-text font-semibold mb-2">User</p>
        <Controller
          name="user"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select {...field} isSearchable={true} options={developers} />
          )}
        />
        {developers.length > 0 && errors["user"]?.type === "required" && (
          <p role="alert" className="text-sm text-red-600 mt-1">
            <span className="capitalize"> User </span>is required
          </p>
        )}
      </div>
      <FormSelect
        label="Role"
        register={register}
        values={["user", "project manager"]}
      />
      <div className="flex justify-end mt-3 mb-2 ">
        <button
          className="btn btn-neutral bg-[#4dabf7] border-[#4dabf7] hover:bg-[#4dabf7] hover:border-[#4dabf7]"
          disabled={developers.length == 0}
        >
          Add
        </button>
      </div>
    </form>
  );
};

UserAssignmentForm.propTypes = {
  developers: PropTypes.array,
  projectId: PropTypes.string,
};

export default UserAssignmentForm;
