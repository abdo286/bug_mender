import PropTypes from "prop-types";
import { RxAvatar } from "react-icons/rx";

const Comment = ({ comment }) => {
  return (
    <div className="chat chat-start px-6">
      <div className="chat-image avatar">
        {comment?.profiles?.image ? (
          <div className="w-10 rounded-full">
            <img src={comment?.profiles?.image} alt={comment.profiles.name} />
          </div>
        ) : (
          <RxAvatar className="w-10 h-10 text-gray-500" />
        )}
      </div>
      <div className="chat-header ">
        {comment.profiles.name}
        <time className="text-xs opacity-50 ml-1">{comment.createdAt}</time>
      </div>
      <div className="chat-bubble">{comment.comment}</div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    profiles: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    comment: PropTypes.string,
  }),
};

export default Comment;
