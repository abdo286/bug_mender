import Error from "../../../components/Error";
import Loading from "../../../components/Loading";
import AddComment from "./AddComment";
import Comments from "./Comments/Comments";
import PropTypes from "prop-types";

const TicketComments = ({ ticketId, comments }) => {
  return (
    <div>
      <AddComment ticketId={ticketId} />
      {comments.loading ? (
        <Loading />
      ) : comments.error ? (
        <Error />
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
