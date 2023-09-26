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
        <p>Loading...</p>
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
