const TicketsStats = () => {
  return (
    <section className="grid grid-cols-4  rounded-md gap-x-10 mb-28">
      <div className="bg-[#74c0fc] flex flex-col items-center justify-center py-4 gap-4 text-[#1c7ed6]">
        <p className="text-5xl">28</p>
        <p className="text-sm font-bold">Submitted Tickets</p>
      </div>
      <div className="bg-[#ffa8a8] flex flex-col items-center justify-center py-4 gap-4 text-[#f03e3e]">
        <p className="text-5xl">30</p>
        <p className="text-sm font-bold">Unassigned Tickets</p>
      </div>
      <div className="bg-[#ffec99] flex flex-col items-center justify-center py-4 gap-4 text-[#e67700]">
        <p className="text-5xl">58</p>
        <p className="text-sm font-bold">Pending Tickets</p>
      </div>
      <div className="bg-[#96f2d7] flex flex-col items-center justify-center py-4 gap-4 text-[#099268]">
        <p className="text-5xl">60</p>
        <p className="text-sm font-bold">Resolved Tickets</p>
      </div>
    </section>
  );
};
export default TicketsStats;
