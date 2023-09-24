import { useMemo, useState } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import { FaEye, FaTrash, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";
import SortSelect from "./SortSelect";
import dummyData from "../data/tableData";

const Table = ({ data = dummyData }) => {
  const [pageSize, setPageSize] = useState(5); // State to manage entries per page
  const [sorting, setSorting] = useState("");
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        // Add the following line to enable sorting for this column
        canSort: true,
      },
      {
        Header: "Developer",
        accessor: "developer",
        canSort: true, // Enable sorting for this column
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
        canSort: true, // Enable sorting for this column
        Cell: ({ row }) => {
          return (
            <p key={row.original.id} className="flex justify-center">
              {row.original.date}
            </p>
          );
        },
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({ row }) => (
          <div className="flex justify-center space-x-2">
            <FaEye
              onClick={() => handleView(row.original.id)}
              className="cursor-pointer text-blue-600 text-lg"
            />
            <FaTrash
              onClick={() => handleDelete(row.original.id)}
              className="cursor-pointer text-red-600 text-lg"
            />

            <FaEdit
              onClick={() => handleEdit(row.original.id)}
              className="cursor-pointer text-green-600 text-lg"
            />
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
    setGlobalFilter,
    setPageSize: setTablePageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize },
      autoResetSortBy: false,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  const handleView = () => {
    // Handle view action here
  };

  const handleDelete = () => {
    // Handle delete action here
  };

  const handleEdit = () => {
    // Handle edit action here
  };

  const handleSortingChange = (sorting) => {
    setSorting(sorting);
  };

  return (
    <div className="bg-white p-8 mb-12 rounded-md shadow-md">
      <div className="mb-4 flex justify-between items-center ">
        <div className="flex items-center">
          <span>Show&nbsp;</span>
          <input
            className="border-green-500 text-green-500 w-16 text-center"
            type="text"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            onBlur={() => setTablePageSize(pageSize)}
          />
          <span>&nbsp;entries</span>
        </div>
        <SortSelect sorting={sorting} onChange={handleSortingChange} />
        <div>
          <input
            className="p-2 border border-green-500 rounded-md bg-white"
            type="text"
            placeholder="Search..."
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>
      <table {...getTableProps()} className="min-w-full shadow-md my-8">
        <TableHeader headerGroups={headerGroups} />
        <TableBody
          page={page}
          prepareRow={prepareRow}
          getTableBodyProps={getTableBodyProps}
        />
      </table>
      <TablePagination
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
      />
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      developer: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};
export default Table;
