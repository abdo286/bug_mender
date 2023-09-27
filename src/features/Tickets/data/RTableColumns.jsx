import { FaEye, FaTrash, FaEdit } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { supabase } from "../../../libs/supabaseClient";
import { toast } from "react-toastify";
import { DeleteTableRowDialog } from "../../../components";

export default [
  {
    Header: "Name",
    accessor: "name",
    canSort: true,
  },
  {
    Header: "Priority",
    accessor: "priority",
    Cell: ({ row }) => {
      console.log("row", row);
      const {
        id,
        original: { priority },
      } = row;

      let priorityClass = "";

      if (priority === "low") {
        priorityClass = "bg-green-600";
      } else if (priority === "medium") {
        priorityClass = "bg-yellow-600";
      } else if (priority === "high") {
        priorityClass = "bg-red-600";
      }

      return (
        <div className="flex justify-start items-center" key={id}>
          <span
            className={`border-2 rounded-2xl px-4 py-1 font-bold text-white shadow tracking-wider text-sm ${priorityClass} `}
          >
            {priority}
          </span>
        </div>
      );
    },
    canSort: true,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ row }) => {
      const {
        id,
        original: { status },
      } = row;
      let statusClass = "";

      if (status.toLowerCase() === "new") {
        statusClass = "bg-blue-600";
      } else if (status.toLowerCase() === "development") {
        statusClass = "bg-yellow-600";
      } else if (status.toLowerCase() === "resolved") {
        statusClass = "bg-green-600";
      }

      return (
        <div className="flex justify-start items-center" key={id}>
          <span
            className={`border-2 rounded-2xl px-4 py-1 font-bold text-white shadow tracking-wider text-sm ${statusClass} `}
          >
            {status}
          </span>
        </div>
      );
    },
    canSort: true,
  },
  {
    Header: "Type",
    accessor: "type",
    canSort: true,
  },
  {
    Header: "AssignedTo",
    accessor: "assignedTo",
    canSort: true,
  },
  {
    Header: "CreatedBy",
    accessor: "createdBy",
    canSort: true,
  },
  {
    // change the name format
    Header: "CreatedAt",
    accessor: "createdAt",
    Cell: ({ row }) => {
      return (
        <p key={row.id}>
          {format(new Date(row.original.createdAt), "yyyy-MM-dd")}
        </p>
      );
    },
    canSort: true,
  },
  {
    Header: "Action",
    accessor: "id",
    Cell: ({ row }) => {
      const handleDelete = async () => {
        const { error } = await supabase
          .from("tickets")
          .delete()
          .eq("id", row.original.id);
        if (error) {
          console.log(error);
          toast("There was an error deleting ticket ");
          return;
        }
        toast("ticket was deleted successfully");
      };

      return (
        <div className="flex justify-center space-x-2" key={row.id}>
          <Link to={`/tickets/${row.original.id}`}>
            <FaEye className="cursor-pointer text-blue-600 text-lg" />
          </Link>
          <Link to={`/tickets/${row.original.id}`}>
            <FaEdit className="cursor-pointer text-green-600 text-lg" />
          </Link>
          <DeleteTableRowDialog
            rowId={row.original.id}
            rowType="ticket"
            handleDelete={handleDelete}
          />
          <FaTrash
            onClick={() =>
              document.getElementById("deleteRomModal").showModal()
            }
            className="cursor-pointer text-red-600 text-lg"
          />
        </div>
      );
    },
  },
];
