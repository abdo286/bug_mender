import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authImage from "../features/Auth/assets/auth.svg";
import FeatureCard from "../features/Auth/components/FeatureCard";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const features = [
  {
    name: `Bug Reporting And Attaching Files`,
    description: `Easily report bugs by providing detailed descriptions, steps to
              reproduce, and attaching files or screenshots.`,
  },

  {
    name: `User Roles and Permissions`,
    description: `Assign different roles and permissions to users, allowing you to control
    who can access, modify, or delete data within the bug tracking system.`,
  },
  {
    name: `Customizable Dashboard`,
    description: `Create a personalized dashboard with widgets and panels that matter
    most to you, making it easy to monitor project progress and track bugs.`,
  },
];
const Auth = () => {
  return (
    <main>
      <ToastContainer />

      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <section className="bg-blue-500 flex flex-col justify-center items-center">
          <div className="w-3/4 h-3/4">
            <img
              src={authImage}
              alt="Authentication"
              className="w-full h-full"
            />
          </div>
          <div className="w-3/4 xl:w-full mt-8">
            <Carousel showArrows={true} infiniteLoop={true}>
              {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </Carousel>
          </div>
        </section>

        <Outlet />
      </div>
    </main>
  );
};
export default Auth;
