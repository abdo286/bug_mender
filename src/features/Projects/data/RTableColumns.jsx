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

      if (priority.toLowerCase().trim() === "low") {
        priorityClass = "bg-green-600";
      } else if (priority.toLowerCase().trim() === "medium") {
        priorityClass = "bg-yellow-600";
      } else if (priority.toLowerCase().trim() === "high") {
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

      if (status.toLowerCase().trim() === "new") {
        statusClass = "bg-blue-600";
      } else if (status.toLowerCase().trim() === "development") {
        statusClass = "bg-yellow-600";
      } else if (status.toLowerCase().trim() === "resolved") {
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
    Header: "Deadline",
    accessor: "deadline",
    Cell: ({ row }) => {
      return (
        <p key={row.id}>
          {format(new Date(row.original.deadline), "yyyy-MM-dd")}
        </p>
      );
    },
    canSort: true,
  },
  {
    Header: "Action",
    accessor: "id",
    Cell: ({ row }) => {
      // const handleDelete = async () => {
      //   console.log("row.original.id", row.original);
      //   const { error } = await supabase
      //     .from("projects")
      //     .delete()
      //     .eq("id", row.original.id);
      //   if (error) {
      //     console.log(error);
      //     toast("There was an error deleting project ");
      //     return;
      //   }
      //   toast("project was deleted successfully");
      // };

      return (
        <div className="flex justify-center space-x-2" key={row.id}>
          <Link to={`/projects/${row.original.id}`}>
            <FaEye className="cursor-pointer text-blue-600 text-lg" />
          </Link>
          <Link to={`/create-project/${row.original.id}`}>
            <FaEdit className="cursor-pointer text-green-600 text-lg" />
          </Link>
          {/* <DeleteTableRowDialog
            rowId={row.original.id}
            rowType="project"
            handleDelete={handleDelete}
          /> */}
          {/* <FaTrash
            onClick={() =>
              document.getElementById("deleteRomModal").showModal()
            }
            className="cursor-pointer text-red-600 text-lg"
          /> */}
        </div>
      );
    },
  },
];
