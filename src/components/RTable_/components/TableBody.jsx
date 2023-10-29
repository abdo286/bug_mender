const TableBody = ({ page, prepareRow, getTableBodyProps }) => {
  return (
    <tbody {...getTableBodyProps()} >
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
  );
};

export default TableBody;
