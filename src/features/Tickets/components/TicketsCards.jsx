import TicketCard from "./card/TicketCard";

const TicketsCards = ({ tickets }) => {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8 ">
      {tickets.map((ticket) => {
        <TicketCard key={ticket.id} ticket={ticket} />;
      })}
    </div>
  );
};
export default TicketsCards;
