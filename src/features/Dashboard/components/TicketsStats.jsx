import StatCard from "./StatCard";

const TicketsStats = () => {
  return (
    <div className="grid grid-cols-4 gap-12 ">
      <StatCard
        color="white"
        backgroundColor="#12b886"
        number="50"
        label="Tickets assigned"
      />
      <StatCard
        color="white"
        backgroundColor="#868e96"
        number="24"
        label="Total Tickets"
      />
      <StatCard
        color="white"
        backgroundColor="#fab005"
        number="24"
        label="Unassigned Tickets"
      />
      <StatCard
        color="white"
        backgroundColor="#495057"
        number="24"
        label="Assigned Tickets"
      />
    </div>
  );
};
export default TicketsStats;
