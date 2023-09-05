import TicketCard from "./card/TicketCard";

const TicketsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8 ">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};
export default TicketsCards;
