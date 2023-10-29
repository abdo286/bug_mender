import DOMPurify from "dompurify";
import userImage from "../images/user.avif";
import PropTypes from "prop-types";

const UserBio = ({ userProfile: { data } }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-14 h-14 ">
          <img
            src={data.image || userImage}
            alt="User Profile"
            className="w-full h-full rounded-full mr-4 object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg lg:text-2xl font-semibold">{data.name}</h2>
          <p className="text-gray-500 text-sm lg:text-base ">{data.role}</p>
        </div>
      </div>
      <div
        className="text-sm lg:text-base"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.about) }}
      />
    </div>
  );
};

UserBio.propTypes = {
  userProfile: PropTypes.shape({
    data: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      image: PropTypes.string,
      about: PropTypes.string,
    }),
  }),
};

export default UserBio;
