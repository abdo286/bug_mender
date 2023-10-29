import PropTypes from "prop-types";
import { TableSection } from "../../../components";
import RTableColumns from "../data/RTableColumns";

const TicketsHistory = ({ ticketHistoryData }) => {
  return (
    <div>
      <TableSection
        columns={RTableColumns}
        data={ticketHistoryData.data}
        loading={ticketHistoryData.loading}
        error={ticketHistoryData.error}
      />
    </div>
  );
};

TicketsHistory.propTypes = {
  ticketHistoryData: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default TicketsHistory;
