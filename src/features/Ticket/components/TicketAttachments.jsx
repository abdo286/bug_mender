import PropTypes from "prop-types";
import TicketAttachment from "./TicketAttachment";
import AddAttachment from "./AddAttachment";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Your
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";

const TicketAttachments = ({ ticketId, attachments }) => {
  return (
    <div>
      <AddAttachment ticketId={ticketId} />

      {attachments.loading ? (
        <Loading />
      ) : attachments.error ? (
        <Error />
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
  ticketId: PropTypes.string,
  attachments: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
      })
    ),
  }),
};

export default TicketAttachments;

