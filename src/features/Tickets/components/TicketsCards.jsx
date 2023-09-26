import TicketCard from "./card/TicketCard";
import PropTypes from "prop-types";

const TicketsCards = ({ tickets }) => {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8 ">
      {tickets.map((ticket) => {
        return <TicketCard key={ticket.id} ticket={ticket} />;
      })}
    </div>
  );
};

TicketsCards.propTypes = {
  tickets: PropTypes.array,
};

export default TicketsCards;
