import { LuEdit } from "react-icons/lu";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TicketDetails = ({ ticket }) => {
  const navigate = useNavigate();
  console.log("ticket300", ticket);
  return (
    <div className="bg-white h-full shadow-md">
      <header className="bg-[#22b8cf] px-6 py-3">
        <h3 className=" text-white lines-1 ">
          {ticket.description} <span>Details</span>
        </h3>
      </header>
      <section className="bg-white px-6 py-5 flex flex-col gap-2">
        <p>
          <span className="font-medium"> Id: </span>
          <span className="text-gray-600">{ticket.id}</span>
        </p>
        <p>
          <span className="font-medium"> Name: </span>
          <span className="text-gray-600">{ticket.name}</span>
        </p>
        <p>
          <span className="font-medium"> Description: </span>
          <span className="text-gray-600">{ticket.description}</span>
        </p>
        <p>
          <span className="font-medium"> Updated: </span>
          <span className="text-gray-600">{ticket.updated}</span>
        </p>
        <p>
          <span className="font-medium"> Developer: </span>
          <span className="text-gray-600">{ticket.assignedTo}</span>
        </p>
        <p>
          <span className="font-medium"> Project: </span>
          <span className="text-gray-600">{ticket.projects.name}</span>
        </p>
        <p>
          <span className="font-medium"> Priority: </span>
          <span className="text-gray-600">{ticket.priority}</span>
        </p>
        <p>
          <span className="font-medium"> Type: </span>
          <span className="text-gray-600">{ticket.type}</span>
        </p>
      </section>
      <footer className="px-6 py-6 mb-3">
        <devi className="flex items-center gap-4 justify-end">
          <LuEdit
            className="text-xl text-blue-500 cursor-pointer "
            onClick={() => {
              navigate(`/create-ticket`);
            }}
          />
          <RiDeleteBin7Line className="text-xl text-red-500 cursor-pointer  " />
        </devi>
      </footer>
    </div>
  );
};

TicketDetails.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
    assignedTo: PropTypes.string.isRequired,
    projects: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    priority: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default TicketDetails;
