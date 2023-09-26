import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const getPriorityClass = (priority) => {
  let priorityClass = "";

  if (priority.toLowerCase() === "low") {
    priorityClass = "text-[#FFFF00]";
  } else if (priority.toLowerCase() === "medium") {
    priorityClass = "text-[#00FFFF]";
  } else if (priority.toLowerCase() === "high") {
    priorityClass = "text-[(#FF99CC]";
  }

  return priorityClass;
};

const getStatusClass = (status) => {
  let statusClass = "";

  if (status.toLowerCase() === "new") {
    statusClass = "text-[#FFFFFF]";
  } else if (status.toLowerCase() === "development") {
    statusClass = "text-[(#CCCCCC]";
  } else if (status.toLowerCase() === "resolved") {
    statusClass = "text-[#00FF00]";
  }

  return statusClass;
};

const TicketCard = ({ ticket }) => {
  const navigate = useNavigate();

  return (
    <div className="card w-96 shadow-xl bg-[#1c7ed6] text-white">
      <div className="card-body">
        <h2 className="card-title lines-3">{ticket.name}</h2>
        <p className="lines-5 text-sm mb-3">{ticket.description}</p>
        <section className="flex flex-col gap-1">
          <p className="text-sm">
            <span className="font-medium ">Type: </span> {ticket.type}
          </p>
          <p className="text-sm">
            <span className="font-medium ">Project Title: </span>{" "}
            {ticket.projects.name}
          </p>
          <p className="text-sm">
            <span className="font-medium ">Assigned To: </span>{" "}
            {ticket.assignedTo}
          </p>
          <p className="text-sm">
            <span className="font-medium ">Submitted By: </span>{" "}
            {ticket.createdBy}
          </p>
          <div className="flex justify-start items-center">
            <span className="font-medium mr-1">Priority: </span>{" "}
            <span
              className={`${getPriorityClass(
                ticket.priority
              )} font-semibold capitalize `}
            >
              {"low"}
            </span>
          </div>
          <div className="flex justify-start items-center text-sm">
            <span className="font-medium mr-1">Status: </span>
            <span
              className={` ${getStatusClass(
                ticket.status
              )} font-semibold capitalize `}
            >
              {"New"}
            </span>
          </div>
        </section>
        <div className="card-actions justify-end ">
          <button
            className="btn bg-[#CCCCCC] "
            onClick={() => {
              navigate(`/tickets/${ticket.id}`);
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

TicketCard.propTypes = {
  ticket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    assignedTo: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    projects: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default TicketCard;
