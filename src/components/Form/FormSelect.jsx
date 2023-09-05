const Select = ({ label, placeholder, register, values, text }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">{text || label}</span>
      </label>
      <select
        className="select select-bordered font-normal text-gray-800"
        {...register(label.toLowerCase())}
      >
        {values.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
