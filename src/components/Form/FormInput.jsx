import PropTypes from "prop-types";

const FormInput = ({
  label,
  register,
  errors,
  required = true,
  type = "text",
  ...props
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold capitalize">{label}</span>
      </label>
      <input
        type={type}
        placeholder="Type here"
        className="input input-bordered px-3 py-2 rounded-lg w-full outline-none focus:border-blue-500"
        {...register(label, { required: required, minLength: 3 })}
        aria-invalid={errors[label] ? "true" : "false"}
        {...props}
      />

      {errors[label]?.type === "required" && (
        <p role="alert" className="text-sm text-red-600 mt-1">
          <span className="capitalize">{label}</span> is required
        </p>
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  errors: PropTypes.object,
  type: PropTypes.string,
};

export default FormInput;
