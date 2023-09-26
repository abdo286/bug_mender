const uploadFile = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text  font-medium">Pick a Picture</span>
      </label>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
      />
    </div>
  );
};
export default uploadFile;
