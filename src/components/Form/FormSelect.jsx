const Select = ({ label, register, options, name, errors }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold capitalize">{label}</span>
      </label>
      <select
        className="select select-bordered font-normal text-gray-800"
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
          <span className="capitalize"> {label} </span>is required
        </p>
      )}
    </div>
  );
};
export default Select;
