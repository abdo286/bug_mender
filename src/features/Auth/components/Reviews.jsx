import { nanoid } from "nanoid";
import Review from "./Review";
import { Carousel } from "react-responsive-carousel";
import useResponsiveContext from "../../../context/ResponsiveContext";

const reviews = [
  {
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    userName: "William Jameson",
    reviewCreatedAt: "July 1, 2021",
    comment:
      "BugRender has been a lifesaver for our frontend development team. It's easy to use and has helped us catch and fix bugs more efficiently. Highly recommended!",
    id: nanoid(),
  },
  {
    userImage: "https://randomuser.me/api/portraits/men/2.jpg",
    userName: "Michael Davis",
    reviewCreatedAt: "July 2, 2021",
    comment:
      "I've been using BugRender for a few months now and it's made a huge difference in my workflow. The reporting features are especially helpful for tracking down hard-to-find bugs.",
    id: nanoid(),
  },
  {
    userImage: "https://randomuser.me/api/portraits/men/3.jpg",
    userName: "Samuel Franklin",
    reviewCreatedAt: "July 3, 2021",
    comment:
      "BugRender has helped us improve the quality of our code and deliver projects faster. The interface is intuitive and the customer support is top-notch.",
    id: nanoid(),
  },
  {
    userImage: "https://randomuser.me/api/portraits/men/4.jpg",
    userName: "David Smith",
    reviewCreatedAt: "July 4, 2021",
    comment:
      "I was skeptical at first, but BugRender has exceeded my expectations. It's saved me hours of debugging time and helped me catch bugs before they become major issues.",
    id: nanoid(),
  },
];
const Reviews = () => {
  const { is2Xl } = useResponsiveContext();

  return (
    <div className="flex flex-col justify-end">
      <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-white xl:text-[#333] mb-3 text-center ">
        Reviews
      </h2>
      <section className="flex justify-center overflow-x-hidden ">
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
