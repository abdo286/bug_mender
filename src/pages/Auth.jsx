import { Outlet } from "react-router-dom";
import authImage from "../features/Auth/assets/auth.svg";
import { nanoid } from "nanoid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Your

const features = [
  {
    name: `Bug Reporting And Attaching Files`,
    description: `Easily report bugs by providing detailed descriptions, steps to
              reproduce, and attaching files or screenshots.`,
    id: nanoid(),
  },

  {
    name: `User Roles and Permissions`,
    description: `Assign different roles and permissions to users, allowing you to control
    who can access, modify, or delete data within the bug tracking system.`,
    id: nanoid(),
  },
  {
    name: `Customizable Dashboard`,
    description: `Create a personalized dashboard with widgets and panels that matter
    most to you, making it easy to monitor project progress and track bugs.`,
    id: nanoid(),
  },
];
const Auth = () => {
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      <section className="bg-[#228be6]">
        <div className="w-[70%] h-[70%] my-auto mx-auto">
          <img src={authImage} alt="auth" className="w-full h-full" />
        </div>
        <div className="flex">
          <Carousel showArrows={true} infiniteLoop={true}>
            {features.map((feature) => (
              <div key={feature.id} className="mb-6 flex justify-center">
                <div className="w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-semibold text-[#dee2e6] mb-2 text-center">
                    {feature.name}
                  </h2>
                  <p className="text-[#dee2e6] mx-auto mb-6 ">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <Outlet />
    </div>
  );
};
export default Auth;
