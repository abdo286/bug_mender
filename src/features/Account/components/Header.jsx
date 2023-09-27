import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormInput, FormSelect, UploadFile } from "../../../components";

const Header = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    // Handle form submission here
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md mx-auto max-w-2xl w-full">
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
        />

        <FormInput
          label="last name"
          register={register}
          errors={errors}
          type="text"
        />

        <FormSelect
          errors={errors}
          label="Role"
          name="role"
          register={register}
          options={["Admin", "User"]}
        />

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Date Created</span>
          </label>
          <Controller
            control={control}
            name="createdAt"
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                dateFormat="dd/MM/yyyy" // Customize the date format
                placeholderText="Select Date"
                className="input input-bordered"
              />
            )}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Date Updated</span>
          </label>
          <Controller
            control={control}
            name="updatedAt"
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                dateFormat="dd/MM/yyyy" // Customize the date format
                placeholderText="Select Date"
                className="input input-bordered"
              />
            )}
          />
        </div>

        <UploadFile />

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="btn btn-primary transform hover:scale-105 transition-transform "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
