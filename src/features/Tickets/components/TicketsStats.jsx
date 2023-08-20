const TicketsStats = () => {
  return (
    <section className="grid grid-cols-4  rounded-md gap-x-10 mb-28">
      <div className="bg-[#74c0fc] flex flex-col items-center justify-center py-4 gap-4 text-[#1c7ed6] hover:shadow-xl transition-all ease-in-out duration-150 hover:scale-105">
        <p className="text-5xl">28</p>
        <p className="text-sm font-bold">Submitted Tickets</p>
      </div>
      <div className="bg-[#ffc9c9] flex flex-col items-center justify-center py-4 gap-4 text-[#c92a2a] hover:shadow-xl transition-all ease-in-out duration-150 hover:scale-105">
        <p className="text-5xl">30</p>
        <p className="text-sm font-bold">Unassigned Tickets</p>
      </div>
      <div className="bg-[#ffec99] flex flex-col items-center justify-center py-4 gap-4 text-[#e67700] hover:shadow-xl transition-all ease-in-out duration-150 hover:scale-105">
        <p className="text-5xl">58</p>
        <p className="text-sm font-bold">Pending Tickets</p>
      </div>
      <div className="bg-[#96f2d7] flex flex-col items-center justify-center py-4 gap-4 text-[#099268] hover:shadow-xl transition-all ease-in-out duration-150 hover:scale-105">
        <p className="text-5xl">60</p>
        <p className="text-sm font-bold">Resolved Tickets</p>
      </div>
    </section>
  );
};
export default TicketsStats;
