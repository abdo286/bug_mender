import Comment from "./Comment";
import PropTypes from "prop-types";

const Comments = ({ comments }) => {
  return (
    <div className="bg-white py-8 border-t-2 border-t-gray-100 shadow-md ">
      <h2 className="text-2xl px-5 font-medium mb-8">Comments</h2>
      <section className="flex flex-col gap-6">
        {comments.map((comment) => (
          <Comment key={comment.key} comment={comment} />
        ))}

      </section>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
