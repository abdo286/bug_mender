import PropTypes from "prop-types";

const Review = ({ userImage, userName, reviewCreatedAt, comment }) => {
  return (
    <div className="max-w-md mx-auto text-gray-50 bg-blue-500 rounded-xl shadow-lg overflow-x-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-contain md:w-48"
            src={userImage}
            alt={userName}
          />
        </div>
        <div className="p-8">
          <div className="tracking-wide font-semibold text-lg md:text-xl lg:text-2xl mb-1">
            {userName}
          </div>
          <div className="block mt-1 leading-relaxed text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {comment}
          </div>
          <div className="mt-2 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            {reviewCreatedAt}
          </div>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  reviewCreatedAt: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Review;