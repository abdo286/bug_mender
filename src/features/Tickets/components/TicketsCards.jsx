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
    <section className="mt-24">
      <h2 className="text-2xl xl:text-3xl font-medium">Tickets</h2>
      <div className="mt-8 rounded-md py-6 bg-white shadow-md">
        <div className="grid gap-x-8 gap-y-8 px-8 grid-cols-card justify-around">
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
