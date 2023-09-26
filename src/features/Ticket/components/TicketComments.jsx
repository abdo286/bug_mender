import AddComment from "./AddComment";
import Comments from "./Comments/Comments";
import PropTypes from "prop-types";

const TicketComments = ({ ticketId, comments }) => {
  return (
    <div>
      <AddComment ticketId={ticketId} />
      {comments.loading ? (
        <p>Loading...</p>
      ) : comments.error ? (
        <div>
          <p className="text-red-500 font-medium relative top-[25%] left-[15%]">
            There was an Error Loading the Ticket Comments
          </p>
        </div>
      ) : (
        <Comments comments={comments.data} />
      )}
    </div>
  );
};

TicketComments.propTypes = {
  ticketId: PropTypes.string.isRequired,
  comments: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
export default TicketComments;
