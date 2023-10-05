import PropTypes from "prop-types";

const FormSelect = ({ label, register, options, name, errors }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold capitalize">{label}</span>
      </label>
      <select
        className="select select-bordered font-normal text-gray-800 rounded-lg w-full outline-none focus:border-blue-500"
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
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FormSelect;
