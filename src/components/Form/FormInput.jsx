const FormInput = ({ label, register, errors, type }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold capitalize">{label}</span>
      </label>
      <input
        type={type || "text"}
        placeholder="Type here"
        className="input input-bordered"
        {...register(label, { required: true, minLength: 3 })}
        aria-invalid={errors[label] ? "true" : "false"}
      />

      {errors[label]?.type === "required" && (
        <p role="alert" className="text-sm text-red-600 mt-1">
          <span className="capitalize"> {label} </span>is required
        </p>
      )}
    </div>
  );
};
export default FormInput;
