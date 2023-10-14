import PropTypes from "prop-types";
import { FaSpinner, FaExclamationCircle } from "react-icons/fa";

const StatCard = ({
  color,
  backgroundColor,
  number,
  label,
  loading,
  error,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full py-6 md:py-8 rounded-xl`}
      style={{ backgroundColor: backgroundColor || "", color: color || "" }}
    >
      {" "}
      {loading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin mr-2" />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center">
          <FaExclamationCircle className="text-red-500 mr-2" />
          <p className="text-sm text-red-500">Error loading data</p>
        </div>
      ) : (
        <>
          <p className="md:text-xl lg:text-2xl xl:text-3xl font- mb-2">{number || 0}</p>
          <p className="text-xs 2xl:text-sm">{label}</p>
        </>
      )}
    </div>
  );
};

StatCard.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  number: PropTypes.number,
  label: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default StatCard;
