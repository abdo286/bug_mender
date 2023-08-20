import { BiShow } from "react-icons/bi";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin7Line } from "react-icons/ri";
const TicketDetails = () => {
  return (
    <div className="bg-white h-full shadow-md">
      <header className="bg-[#22b8cf] px-6 py-3">
        <h3 className=" text-white">
          Fix The Bug Tracker Modal: <span>Details</span>
        </h3>
      </header>
      <section className="bg-white px-6 py-5 flex flex-col gap-2">
        <p>
          <span className="font-medium"> Id: </span>
          <span className="text-gray-600">25</span>
        </p>
        <p>
          <span className="font-medium"> Name: </span>
          <span className="text-gray-600">Portfolio Ticket 5</span>
        </p>
        <p>
          <span className="font-medium"> Description: </span>
          <span className="text-gray-600">
            Fix The Bug Tracker Modal Details
          </span>
        </p>
        <p>
          <span className="font-medium"> Updated: </span>
          <span className="text-gray-600">
            Wednesday 31 March 2023 04:04 AM
          </span>
        </p>
        <p>
          <span className="font-medium"> Developer: </span>
          <span className="text-gray-600">John</span>
        </p>
        <p>
          <span className="font-medium"> Project: </span>
          <span className="text-gray-600">Bug Tracker Project</span>
        </p>
        <p>
          <span className="font-medium"> Priority: </span>
          <span className="text-gray-600">low</span>
        </p>
        <p>
          <span className="font-medium"> Ticket Type: </span>
          <span className="text-gray-600">UI Request</span>
        </p>
      </section>
      <footer className="px-6 py-6 mb-3">
        <devi className="flex items-center gap-4 justify-end">
          <LuEdit className="text-xl text-blue-500 cursor-pointer " />
          <RiDeleteBin7Line className="text-xl text-red-500 cursor-pointer  " />
        </devi>
      </footer>
    </div>
  );
};
export default TicketDetails;
