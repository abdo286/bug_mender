import { FaEye, FaTrash, FaEdit } from "react-icons/fa";
import { format, parseISO, toDate } from "date-fns";
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
    Header: "Image",
    accessor: "image",
    Cell: ({ row }) => {
      return (
        <img
          src={
            row.original.image ||
            `https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5fGVufDB8fDB8fHww`
          }
          alt={row.original.name}
          className="w-10 h-10 rounded-full"
        />
      );
    },
  },

  {
    Header: "Role",
    accessor: "role",
    canSort: true,
  },

  {
    Header: "Email",
    accessor: "email",
    canSort: true,
  },

  {
    Header: "Action",
    accessor: "id",
    Cell: ({ row }) => {
      const handleDelete = async () => {
        const { error } = await supabase
          .from("projects")
          .delete()
          .eq("id", row.original.id);
        if (error) {
          console.log(error);
          toast("There was an error deleting project ");
          return;
        }
        toast("project was deleted successfully");
      };

      return (
        <div className="flex justify-center space-x-2" key={row.id}>
          <Link to={`/projects/${row.original.id}`}>
            <FaEye className="cursor-pointer text-blue-600 text-lg" />
          </Link>
          <Link to={`/create-project/${row.original.id}`}>
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
