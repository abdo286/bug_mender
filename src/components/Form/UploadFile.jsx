import { toast } from "react-toastify";
import { supabase } from "../../libs/supabaseClient";
import { forwardRef, useState } from "react";

const UploadFile = forwardRef(function UploadFile(_, ref) {
  const [loading, setLoading] = useState(false);
  const uploadFile = async (e) => {
    const file = e.target.files[0];
    setLoading(true);
    const { data, error } = await supabase.storage
      .from("bug_tracker")
      .upload(`public/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      toast.error("There was an error uploading the file");

      console.log(error);
      return;
    }
    toast.success("File uploaded successfully");
    ref.current = data.path;
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text  font-medium">Pick a Picture</span>
      </label>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={uploadFile}
        disabled={loading}
      />
    </div>
  );
});
export default UploadFile;
