import PropTypes from "prop-types";

const TableHeader = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup, index) => (
        <tr key={index} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th
              key={column.id}
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className="bg-gray-200 p-2 text-start"
            >
              {column.render("Header")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

TableHeader.propTypes = {
  headerGroups: PropTypes.arrayOf(
    PropTypes.shape({
      getHeaderGroupProps: PropTypes.func.isRequired,
      headers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          getSortByToggleProps: PropTypes.func.isRequired,
          render: PropTypes.func.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
export default TableHeader;
