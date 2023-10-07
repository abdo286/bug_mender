import Error from "../../../components/Error";
import Loading from "../../../components/Loading";
import TicketCard from "./card/TicketCard";
import PropTypes from "prop-types";

const TicketsCards = ({ tickets, loading, error }) => {
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className="px-10 py-6 mt-16">
      <h2 className="text-2xl font-medium">Tickets</h2>
      <div className="mt-8 px-10 rounded-md py-6 bg-white shadow-md">
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 ">
          {tickets.map((ticket) => {
            return <TicketCard key={ticket.id} ticket={ticket} />;
          })}
        </div>
      </div>
    </section>
  );
};

TicketsCards.propTypes = {
  tickets: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default TicketsCards;
