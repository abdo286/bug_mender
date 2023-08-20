import TableRow from "./TableRow";

const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table bg-white">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
