const uploadFile = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick a file</span>
        <span className="label-text-alt">Alt label</span>
      </label>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
      />
      <label className="label">
        <span className="label-text-alt">Alt label</span>
        <span className="label-text-alt">Alt label</span>
      </label>
    </div>
  );
};
export default uploadFile;
