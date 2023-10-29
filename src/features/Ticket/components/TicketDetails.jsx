import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { supabase } from "../../../libs/supabaseClient";
import { useState } from "react";
import Modal from "react-modal";
import DOMPurify from "dompurify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TicketDetails = ({ ticket }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    const { error } = await supabase
      .from("tickets")
      .delete()
      .eq("id", ticket.id);
    if (error) {
      console.log(error);
      toast("There was an error deleting ticket ");
      return;
    }
    toast("ticket was deleted successfully");
    navigate("/tickets");
  };

  return (
    <div className="bg-white h-fit shadow-md">
      <header className="bg-[#22b8cf] px-6 py-3">
        <h3 className="text-white lines-1 text-base ">
          {ticket.description} <span>Details</span>
        </h3>
      </header>
      <section className="bg-white px-6 py-5 flex flex-col gap-2">
        <p className="text-sm lg:text-base">
          <span className="font-medium"> Id: </span>
          <span className="text-gray-600">{ticket.id}</span>
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium"> Name: </span>
          <span className="text-gray-600">{ticket.name}</span>
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium"> Description: </span>
          <span
            className="text-gray-600"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(ticket.description),
            }}
          />
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium"> Updated: </span>
          <span className="text-gray-600">{ticket.updated}</span>
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium"> Developer: </span>
          <span className="text-gray-600">{ticket.assignedTo}</span>
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium"> Project: </span>
          <span className="text-gray-600">{ticket.projects.name}</span>
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium"> Priority: </span>
          <span className="text-gray-600">{ticket.priority}</span>
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium"> Type: </span>
          <span className="text-gray-600">{ticket.type}</span>
        </p>
      </section>
      <footer className="px-6 py-6 mb-3">
        <div className="flex items-centesRequirer gap-4 justify-end">
          <VscEdit
            className="text-xl text-blue-500 cursor-pointer "
            onClick={() => {
              navigate(`/create-ticket/${ticket.id}`);
            }}
          />
          <RiDeleteBin7Line
            className="text-xl text-red-500 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </footer>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Delete Ticket Modal"
        style={customStyles}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-xl font- mb-4">
            Are you sure you want to delete this ticket?
          </h2>
          <div className="flex gap-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={handleDelete}
            >
              Confirm deletion
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

TicketDetails.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.any,
    description: PropTypes.string,
    updated: PropTypes.string,
    assignedTo: PropTypes.string,
    projects: PropTypes.shape({
      name: PropTypes.string,
    }),
    priority: PropTypes.string,
    type: PropTypes.string,
  }),
  ticketsLoading: PropTypes.any,
  ticketsError: PropTypes.any,
};

export default TicketDetails;
