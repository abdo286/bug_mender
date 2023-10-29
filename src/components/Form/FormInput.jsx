import PropTypes from "prop-types";
import classNames from "classnames";

const FormInput = ({
  label,
  register,
  errors,
  inputClassName = "",
  labelClassName = "",
  errorsClassName = "",
  required = true,
  type = "text",
  ...props
}) => {
  return (
    <div className="form-control">
      <label className={classNames("label label-text", labelClassName)}>
        <span className="font-semibold capitalize">{label}</span>
      </label>
      <input
        type={type}
        placeholder="Type here"
        className={classNames(
          "input input-bordered px-3 py-2 rounded-lg w-full outline-none focus:border-blue-500",
          inputClassName
        )}
        {...register(label, { required: required, minLength: 3 })}
        aria-invalid={errors[label] ? "true" : "false"}
        {...props}
      />

      {errors[label]?.type === "required" && (
        <p
          role="alert"
          className={classNames("text-sm text-red-600 mt-1", errorsClassName)}
        >
          <span className="capitalize">{label}</span> is required
        </p>
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorsClassName: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  errors: PropTypes.object,
  type: PropTypes.string,
};

export default FormInput;
