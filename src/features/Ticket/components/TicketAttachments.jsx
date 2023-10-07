import PropTypes from "prop-types";
import TicketAttachment from "./TicketAttachment";
import AddAttachment from "./AddAttachment";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Your

const TicketAttachments = ({ ticketId, attachments }) => {
  return (
    <div>
      <AddAttachment ticketId={ticketId} />

      {attachments.loading ? (
        <div className="flex items-center justify-center h-64">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm3-5.291A7.962 7.962 0 0116 12h4c0 3.042-1.135 5.824-3 7.938l-3-2.647z"
            ></path>
          </svg>
          <span className="text-gray-500">Loading...</span>
        </div>
      ) : attachments.error ? (
        <div>
          <p className="text-red-500 font-medium relative top-[25%] left-[15%]">
            There was an Error Loading the Ticket Attachments
          </p>
        </div>
      ) : (
        <section className="pt-12 pb-3 bg-white shadow-md">
          <Carousel showArrows={true} infiniteLoop={true}>
            {attachments.data.map((attachment) => (
              <TicketAttachment key={attachment.key} attachment={attachment} />
            ))}
          </Carousel>
        </section>
      )}
    </div>
  );
};

TicketAttachments.propTypes = {
  ticketId: PropTypes.string.isRequired,
  attachments: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default TicketAttachments;
