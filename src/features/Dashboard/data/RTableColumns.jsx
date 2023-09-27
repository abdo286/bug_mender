import { FaEye, FaTrash, FaEdit } from "react-icons/fa";

export default [
  {
    Header: "Title",
    accessor: "title",
    canSort: true,
  },

  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => (
      <div className="flex justify-center">
        {" "}
        <div
          className={`border rounded px-2 text-center border-green-500 text-green-500 text-sm  font-normal w-fit justify-center`}
        >
          {value}
        </div>
      </div>
    ),
  },
  {
    Header: "Priority",
    accessor: "priority",
    Cell: ({ value }) => (
      <div className="flex justify-center">
        {" "}
        <div
          className={`border rounded px-2 text-center border-yellow-600 text-yellow-600 text-sm  font-normal w-fit justify-center`}
        >
          {value}
        </div>
      </div>
    ),
  },
  {
    Header: "Date",
    accessor: "date",
    canSort: true,
    Cell: ({ row }) => {
      return (
        <p key={row.original.id} className="flex justify-center">
          {row.original.date}
        </p>
      );
    },
  },
  {
    Header: "Developer",
    accessor: "developer",
    canSort: true,
  },

  {
    Header: "Action",
    accessor: "id",
    Cell: ({ row }) => (
      <div className="flex justify-center space-x-2">
        <FaEye className="cursor-pointer text-blue-600 text-lg" />
        <FaTrash className="cursor-pointer text-red-600 text-lg" />

        <FaEdit className="cursor-pointer text-green-600 text-lg" />
      </div>
    ),
  },
];
