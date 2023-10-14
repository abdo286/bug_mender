import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import authImage from "../features/Auth/assets/auth.svg";
import FeatureCard from "../features/Auth/components/FeatureCard";
import { Carousel } from "react-responsive-carousel";
import features from "../features/Auth/constants/features";
import useResponsiveContext from "../context/ResponsiveContext";
import { Reviews } from "../features/Auth";

const Auth = () => {
  const { isLg, is2Xl } = useResponsiveContext();

  return (
    <main>
      <ToastContainer />

      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full  gap-8 lg:gap-0 bg-white">
        {isLg ? (
          <section className="bg-blue-500 flex flex-col justify-center items-center">
            <div className="w-3/4 h-3/4 sm:w-1/2 sm:h-1/2 md:w-2/3 md:h-2/3 lg:w-3/4 lg:h-3/4 xl:w-4/5 xl:h-4/5 2xl:w-3/4 2xl:h-3/4">
              <img
                src={authImage}
                alt="Authentication"
                className="w-full h-full"
              />
            </div>
            <div className="row-start-2 lg:row-start-1">
              <Carousel
                showArrows={is2Xl}
                infiniteLoop={true}
                showStatus={is2Xl}
              >
                {features.map((feature) => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
              </Carousel>
            </div>
          </section>
        ) : (
          <section className="w-full">
            <Reviews />
          </section>
        )}

        <div className="row-start-1 lg:row-start-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Auth;
