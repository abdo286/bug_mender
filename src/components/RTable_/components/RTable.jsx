import { useState } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";
import SortSelect from "./SortSelect";
import dummyData from "../data/tableData";

const Table = ({ columns, data = dummyData, tableContainerClassName = "" }) => {
  const [pageSize, setPageSize] = useState(5); // State to manage entries per page
  const [sorting, setSorting] = useState("");

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

  const handleSortingChange = (sorting) => {
    setSorting(sorting);
  };

  return (
    <div
      className={`bg-white xl:p-8 mb-12 rounded-md shadow-md h-fit ${tableContainerClassName} text-xs lg:text-sm xl:text-base`}
    >
      <div className="mb-4 flex justify-between items-center ">
        <div className="flex items-center">
          <span>Show&nbsp;</span>
          <input
            className="border-green-500 text-green-500 w-16 text-center border-2 outline-none transition-[border] ease-in-out duration-300 rounded-md mx-1"
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
      <table {...getTableProps()} className="min-w-full shadow-md z ">
        <TableHeader headerGroups={headerGroups}  />
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
  columns: PropTypes.array,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      developer: PropTypes.string,
      status: PropTypes.string,
      priority: PropTypes.string,
      date: PropTypes.string,
    })
  ),
  tableContainerClassName: PropTypes.string,
};
export default Table;
