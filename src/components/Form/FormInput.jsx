const FormInput = ({ label, register, errors }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">{label}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered"
        {...register("title", { required: true, minLength: 3 })}
        aria-invalid={errors.title ? "true" : "false"}
      />

      {errors.title?.type === "required" && (
        <p role="alert" className="text-sm text-red-600 mt-1">
          Title is required
        </p>
      )}
    </div>
  );
};
export default FormInput;
