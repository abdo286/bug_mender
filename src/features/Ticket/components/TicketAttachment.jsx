import PropTypes from "prop-types";
import ReactImageZoom from "react-image-zoom";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const TicketAttachment = ({ attachment }) => {
  const { createdAt, description, url, userId } = attachment;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="text-gray-600 text-sm mb-2">{createdAt}</p>

      <p
        className="text-lg font-semibold mb-2"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description),
        }}
      />

      <Link to={url}>
        <div className="w-full max-h-[20rem] cursor-pointer">
          <ReactImageZoom
            {...{
              width: "100%",
              height: "100%",
              zoomWidth: 400,
              img: url,
              alt: description,
            }}
          />
        </div>
      </Link>
      <p className="text-gray-500 text-sm mt-2">
        Uploaded by User ID: {userId}
      </p>
    </div>
  );
};

TicketAttachment.propTypes = {
  attachment: PropTypes.shape({
    createdAt: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    userId: PropTypes.number,
  }),
};

export default TicketAttachment;
