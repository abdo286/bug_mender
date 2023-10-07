import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import authImage from "../features/Auth/assets/auth.svg";
import FeatureCard from "../features/Auth/components/FeatureCard";
import { Carousel } from "react-responsive-carousel";
import features from "../features/Auth/constants/features";


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
