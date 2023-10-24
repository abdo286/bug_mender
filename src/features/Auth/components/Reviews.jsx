import { nanoid } from "nanoid";
import Review from "./Review";
import { Carousel } from "react-responsive-carousel";
import useResponsiveContext from "../../../context/ResponsiveContext";

const reviews = [
  {
    userImage: "https://randomuser.me/api/portraits/women/1.jpg",
    userName: "Jane Doe",
    reviewCreatedAt: "June 1, 2021",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel commodo blandit, velit sapien bibendum sapien, vel bibendum sapien sapien vel.",
    id: nanoid(),
  },
  {
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    userName: "John Smith",
    reviewCreatedAt: "June 2, 2021",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel commodo blandit, velit sapien bibendum sapien, vel bibendum sapien sapien vel.",
    id: nanoid(),
  },
  {
    userImage: "https://randomuser.me/api/portraits/women/2.jpg",
    userName: "Alice Johnson",
    reviewCreatedAt: "June 3, 2021",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel commodo blandit, velit sapien bibendum sapien, vel bibendum sapien sapien vel.",
    id: nanoid(),
  },
  {
    userImage: "https://randomuser.me/api/portraits/men/2.jpg",
    userName: "Bob Williams",
    reviewCreatedAt: "June 4, 2021",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel commodo blandit, velit sapien bibendum sapien, vel bibendum sapien sapien vel.",
    id: nanoid(),
  },
];

const Reviews = () => {
  const { is2Xl } = useResponsiveContext();

  return (
    <div className="flex flex-col justify-end">
      <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-[#333] mb-3 text-center ">
        Reviews
      </h2>
      <section className="flex justify-center overflow-x-hidden">
        <Carousel showArrows={is2Xl} infiniteLoop={true} showStatus={is2Xl}>
          {reviews.map((review) => (
            <Review
              key={review.id}
              userImage={review.userImage}
              userName={review.userName}
              reviewCreatedAt={review.reviewCreatedAt}
              comment={review.comment}
            />
          ))}
        </Carousel>
      </section>
    </div>
  );
};
export default Reviews;
