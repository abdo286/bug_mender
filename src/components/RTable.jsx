import { useMemo, useState } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import { FaEye, FaTrash, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

const dummyData = [
  {
    id: 1,
    title: "Bug in Homepage",
    developer: "John Doe",
    status: "High",
    priority: "High",
    date: "2023-09-15",
  },
  {
    id: 2,
    title: "Login Issue",
    developer: "Jane Smith",
    status: "Medium",
    priority: "Medium",
    date: "2023-09-14",
  },
  {
    id: 3,
    title: "Feature Request",
    developer: "Mike Johnson",
    status: "Low",
    priority: "Low",
    date: "2023-09-13",
  },
  {
    id: 4,
    title: "404 Error",
    developer: "Emily Wilson",
    status: "High",
    priority: "High",
    date: "2023-09-12",
  },
  {
    id: 5,
    title: "Performance Issue",
    developer: "Chris Brown",
    status: "Medium",
    priority: "Medium",
    date: "2023-09-11",
  },
  {
    id: 6,
    title: "UI Enhancement",
    developer: "Sarah Adams",
    status: "Low",
    priority: "Low",
    date: "2023-09-10",
  },
];

const Table = ({ data = dummyData }) => {
  const [pageSize, setPageSize] = useState(5); // State to manage entries per page
  const [sorting, setSorting] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Developer",
        accessor: "developer",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <div
            className={`border rounded px-2 text-center text-green-500  fit-content  font-normal text-sm border-green-600`}
          >
            {value}
          </div>
        ),
      },
      {
        Header: "Priority",
        accessor: "priority",
        Cell: ({ value }) => (
          <div
            className={`border rounded px-2 text-center  border-yellow-600 text-yellow-600 text-sm  fit-content font-normal  
             
            `}
          >
            {value}
          </div>
        ),
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({ row }) => (
          <div className="flex justify-center space-x-2">
            <FaEye
              onClick={() => handleView(row.original.id)}
              className="cursor-pointer text-blue-600"
            />
            <FaTrash
              onClick={() => handleDelete(row.original.id)}
              className="cursor-pointer text-red-600"
            />

            <FaEdit
              onClick={() => handleEdit(row.original.id)}
              className="cursor-pointer text-green-600"
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
    // Add the useSortBy hook here
  );

  const { globalFilter, pageIndex, sortBy } = state;

  const handleView = (id) => {
    // Handle view action here
  };

  const handleDelete = (id) => {
    // Handle delete action here
  };

  const handleEdit = (id) => {
    // Handle edit action here
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
        <div className="flex items-center">
          <span>Sort by:</span>
          <select
            className="ml-2 p-2 border border-green-500 rounded-md bg-white"
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="">None</option>
            <option value="title_asc">Title A-Z</option>
            <option value="title_desc">Title Z-A</option>
            <option value="date_asc">Date Oldest</option>
            <option value="date_desc">Date Latest</option>
          </select>
        </div>
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
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="bg-gray-200 p-2"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      key={index}
                      {...cell.getCellProps()}
                      className="p-2 bg-gray-50"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </div>
        <div>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
        </div>
      </div>
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
