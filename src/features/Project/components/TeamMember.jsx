import userImage from "../../../assets/images/userImage.avif";
import PropTypes from "prop-types";

const TeamMember = ({ member }) => {
  const { role } = member;
  const isProjectManager = role === "project_manager";
  const { name, email, image } = member.profiles;

  return (
    <div className="grid grid-cols-1 justify-between items-center gap-6">
      <div className="flex items-center space-x-4">
        <div className="w-11 h-11 relative">
          <img
            src={image || userImage}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full shadow-md"></div>
        </div>
        <div className="flex flex-col flex-grow">
          <h3
            className={`text-lg font-medium ${
              isProjectManager ? "text-xl" : ""
            }`}
          >
            {name}
          </h3>
          <p className="text-sm text-gray-600">{email}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      {isProjectManager ? (
        <button className="text-sm border-2 px-3 py-1 rounded-md border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out">
          Change PM
        </button>
      ) : (
        <button className="text-sm border-2 px-3 py-1 rounded-md border-blue-500 text-blue-500 font-medium whitespace-nowrap hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out">
          Assign Role
        </button>
      )}
    </div>
  );
};

TeamMember.propTypes = {
  member: PropTypes.shape({
    userId: PropTypes.any,
    role: PropTypes.string,
    profiles: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string,
    }),
  }),
};

export default TeamMember;
