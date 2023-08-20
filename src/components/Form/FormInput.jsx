const FormInput = ({ label }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">{label}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered"
      />
    </div>
  );
};
export default FormInput;
