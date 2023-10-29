import PropTypes from "prop-types";

const FormSelect = ({ label, register, options, name, errors }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold capitalize lg:text-base text-sm">{label}</span>
      </label>
      <select
        className="select select-bordered font-normal text-gray-800 rounded-lg w-full outline-none focus:border-blue-500 lg:text-base text-sm"
        {...register(name)}
      >
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
      {options.length > 0 && errors[name]?.type === "required" && (
        <p role="alert" className="text-sm text-red-600 mt-1">
          <span className="capitalize">{label}</span> is required
        </p>
      )}
    </div>
  );
};

FormSelect.propTypes = {
  label: PropTypes.string,
  register: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  errors: PropTypes.object,
};

export default FormSelect;
