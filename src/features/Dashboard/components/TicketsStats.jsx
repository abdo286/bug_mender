import StatCard from "./StatCard";
import PropTypes from "prop-types";

const TicketsStats = ({
  unsignedTickets,
  totalTickets,
  inProgressTickets,
  resolvedTickets,
  loading,
  error,
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 sm:gap-x-12 gap-y-8 w-[100%] flex gap-x-8 px-5">
      <StatCard
        color="#fff"
        backgroundColor="#12b886"
        number={inProgressTickets || 0}
        label="Assigned Tickets"
        loading={loading}
        error={error}
      />
      <StatCard
        color="white"
        backgroundColor="#868e96"
        number={totalTickets || 0}
        label="Total Tickets"
        loading={loading}
        error={error}
      />
      <StatCard
        color="white"
        backgroundColor="#fab005"
        number={unsignedTickets || 0}
        label="Unassigned Tickets"
        loading={loading}
        error={error}
      />
      <StatCard
        color="white"
        backgroundColor="#495057"
        number={resolvedTickets || 0}
        label="Assigned Tickets"
        loading={loading}
        error={error}
      />
    </section>
  );
};

TicketsStats.propTypes = {
  unsignedTickets: PropTypes.number,
  totalTickets: PropTypes.number,
  inProgressTickets: PropTypes.number,
  resolvedTickets: PropTypes.number,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default TicketsStats;
