import PropTypes from "prop-types";

const Review = ({ userImage, userName, reviewCreatedAt, comment }) => {
  return (
    <div
      className="max-w-md mx-auto text-white
  bg-[#1864ab] rounded-xl shadow-lg overflow-x-hidden md:max-w-2xl"
    >
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
          <div className="block mt-1 leading-relaxed text-sm md:text-base lg:text-lg">
            {comment}
          </div>
          <div className="mt-2 text-xs md:text-sm">{reviewCreatedAt}</div>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  reviewCreatedAt: PropTypes.string,
  comment: PropTypes.string,
};

export default Review;
