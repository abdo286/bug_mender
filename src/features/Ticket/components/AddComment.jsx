import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../../libs/supabaseClient";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import useAuthContext from "../../../context/AuthContext";
import PropTypes from "prop-types";

const TicketComments = ({ ticketId }) => {
  const { userProfile } = useAuthContext();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      description: "",
      startDate: new Date(),
      developers: [],
    },
  });

  const onSubmit = async (formData) => {
    const { comment } = formData;

    const { error } = await supabase
      .from("comments")
      .insert({ comment, userId: userProfile.data.id, ticketId });

    if (error) {
      toast.error("There was an error adding the comment");
      console.log(error);
    } else {
      reset();
    }
  };

  return (
    <div>
      <div className="bg-white h-full shadow-md">
        <header className="bg-[#22b8cf] px-6 py-3">
          <h3 className="text-white text-sm lg:text-base">
            Comments <span>(1)</span>
          </h3>
        </header>
        <form
          className="bg-white px-6 pt-5 pb-10 flex flex-col gap-2 mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="comment"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <ReactQuill theme="snow" {...field} />}
          />
          {errors.comment?.type === "required" && (
            <p role="alert" className="text-sm text-red-600 mt-1">
              Comment is required
            </p>
          )}{" "}
          <div className="flex justify-end mt-8">
            <button className="btn btn-neutral text-sm lg:text-base">
              Comment
            </button>
            ;
          </div>
        </form>
      </div>
    </div>
  );
};

TicketComments.propTypes = {
  ticketId: PropTypes.string.isRequired,
};
export default TicketComments;
