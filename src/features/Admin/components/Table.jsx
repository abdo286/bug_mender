import TableRow from "./TableRow";
import PropTypes from "prop-types";

const Table = ({ projectAssignedUsers }) => {
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
            {projectAssignedUsers.map((user) => (
              <TableRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  projectAssignedUsers: PropTypes.arrayOf(PropTypes),
};

export default Table;
