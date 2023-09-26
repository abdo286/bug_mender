import { toast } from "react-toastify";
import { supabase } from "../../../libs/supabaseClient";
import PropTypes from "prop-types";

const TableRow = ({ user }) => {
  const handleRemoveUser = async () => {
    const { error } = await supabase
      .from("UsersProjects")
      .delete()
      .eq("id", user.id);
    if (error) {
      console.log(error);
      toast.error(error);
      return;
    }
    toast.success("User successfully deleted");
  };
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.profiles.name}</div>
            <div className="text-sm opacity-50">
              {user.profiles.country || "United States"}
            </div>
          </div>
        </div>
      </td>
      <td>
        <p className="flex text-start badge badge-ghost">{user.role}</p>
      </td>
      <th>
        <button
          className="btn btn-active btn-secondary capitalize pt-1 pb-1 py-1"
          onClick={handleRemoveUser}
        >
          Remove
        </button>
      </th>
    </tr>
  );
};

TableRow.propTypes = {
  user: PropTypes.object,
};

export default TableRow;

// id should be userId + projectId and not a generated one
// user should be added only one to the project
// learn more postgres
