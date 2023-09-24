import { useEffect, useState } from "react";
import { AiOutlineFileText, AiOutlineCheckCircle } from "react-icons/ai";

const ActivityAndStatistics = () => {
  const [ticketsCreated, setTicketsCreated] = useState(0);
  const [ticketsResolved, setTicketsResolved] = useState(0);

  useEffect(() => {
    // Simulate data loading with increasing numbers
    const interval = setInterval(() => {
      if (ticketsCreated < 100) {
        setTicketsCreated((prev) => prev + 1);
      }
      if (ticketsResolved < 50) {
        setTicketsResolved((prev) => prev + 1);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [ticketsCreated, ticketsResolved]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-md p-8  animate__animated animate__bounce ">
          <AiOutlineFileText className="text-4xl text-blue-500 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Tickets Created</h3>
          <p className="text-3xl font-bold">{ticketsCreated}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 animate__animated animate__bounce">
          <AiOutlineCheckCircle className="text-4xl text-green-500 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Tickets Resolved</h3>
          <p className="text-3xl font-bold">{ticketsResolved}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityAndStatistics;
