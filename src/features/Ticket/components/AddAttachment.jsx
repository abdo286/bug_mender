import { supabase } from "../../../libs/supabaseClient";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import useAuthContext from "../../../context/AuthContext";
import PropTypes from "prop-types";

const AddAttachment = ({ ticketId }) => {
  const imagePath = useRef("");
  const { userProfile } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const uploadFile = async (e) => {
    const file = e.target.files[0];

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
    imagePath.current = data.path;
  };

  const onSubmit = async (formData) => {
    const { description } = formData;
    if (userProfile.error) {
      toast.error("Try to login again first before submitting a new file");
    }
    if (!description || !imagePath.current) {
      toast.error("All the fields are required");
      return;
    }

    const { error } = await supabase.from("attachments").insert({
      userId: userProfile.data.id,
      ticketId,
      url: imagePath.current,
      description: description,
    });

    if (error) {
      toast.error("There was an error uploading file");
      console.log(error);
      return;
    }
    toast.success("Attachment uploaded successfully");
    reset();
  };

  return (
    <div>
      <div className="bg-white h-fit shadow-md">
        <header className="bg-[#22b8cf] px-6 py-3">
          <h3 className="text-white text-sm lg:text-base">
            Attach File <span>(1)</span>
          </h3>
        </header>
        <section className="bg-white px-6 py-5 flex flex-col gap-2 mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex col gap-6">
              <div>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  placeholder="Add Description"
                  className="input input-bordered w-full max-w-xs text-sm lg:text-base"
                />
                {errors.description?.type === "required" && (
                  <p role="alert" className="text-sm text-red-600 mt-1">
                    Description is required
                  </p>
                )}
              </div>
              <div>
                <input
                  type="file"
                  onChange={uploadFile}
                  className="file-input file-input-bordered file-input-info w-full max-w-xs text-sm lg:text-base"
                />
              </div>
            </div>
            <div className="flex justify-end mt-16">
              <button className="btn btn-neutral text-sm lg:text-base">
                Upload
              </button>
              ;
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

AddAttachment.propTypes = {
  ticketId: PropTypes.string,
};
export default AddAttachment;
