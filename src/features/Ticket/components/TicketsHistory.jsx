import PropTypes from "prop-types";
import { RTable } from "../../../components";
import RTableColumns from "../data/RTableColumns";

const TicketsHistory = ({ ticketHistoryData }) => {
  return (
    <div>
      {ticketHistoryData.loading ? (
        <p>Loading...</p>
      ) : ticketHistoryData.error ? (
        <div>
          <p className="text-red-500 font-medium relative top-[25%] left-[15%]">
            There was an Error Loading the Ticket History
          </p>
        </div>
      ) : (
        <RTable columns={RTableColumns} data={ticketHistoryData.data} />
      )}
    </div>
  );
};

TicketsHistory.propTypes = {
  ticketHistoryData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default TicketsHistory;
