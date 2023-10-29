import { RiNotificationLine } from "react-icons/ri";
import userImage from "../../../assets/images/userImage.avif";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import MenuSettings from "./MenuSettings";
import Notifications from "./Notifications";
import PropTypes from "prop-types";
import useAuthContext from "../../../context/AuthContext";
import useResponsiveContext from "../../../context/ResponsiveContext";

const Header = ({ setShouldHideSidebar, user }) => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const userImageRef = useRef(null);
  const menuRef = useRef(null);
  const notificationRef = useRef(null);
  const { userProfile } = useAuthContext();
  const { isXl } = useResponsiveContext();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolling(true);
      else setScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        userImageRef.current &&
        !userImageRef.current.contains(event.target)
      ) {
        setShowMenuOptions(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-between rounded-md px-3 py-2 sticky lg:top-0 z-[2000] ${
        !isXl && scrolling ? "top-0 " : null
      } ${scrolling ? "bg-[#ced4da]" : null}`}
    >
      <section
        className={`flex items-center gap-3 text-xl md:text-2xl ${
          isXl ? "px-6" : "px-3"
        }`}
      >
        {isXl && (
          <button
            className="hover:scale-110"
            onClick={() =>
              setShouldHideSidebar((shouldHideSidebar) => !shouldHideSidebar)
            }
          >
            <AiOutlineMenu
              className={`cursor-pointer ${scrolling && "text-black"} `}
            />
          </button>
        )}
        <Link
          className={`  ${
            scrolling ? "#003366" : "text-red-500"
          } font-semibold`}
          to="/"
        >
          BugMender
        </Link>
      </section>

      <section className="flex items-center justify-center gap-8 px-6">
        <button
          className="bg-blue-500 text-white px-3 py-2 text-xs md:text-sm rounded-md cursor-pointer font-medium hover:brightness-95 transition-all duration-150 "
          onClick={() => {
            navigate("/create-ticket");
          }}
        >
          Create Ticket
        </button>
        <div className="relative" ref={notificationRef}>
          <RiNotificationLine
            className={`text-2xl text-blue-500 cursor-pointer ${
              scrolling && "!text-gray-800"
            }`}
            onClick={() => {
              setShowNotifications((showNotifications) => !showNotifications);
            }}
          />
          {showNotifications ? (
            <Notifications
              ref={notificationRef}
              setShowNotifications={setShowNotifications}
            />
          ) : null}
        </div>

        <div className="relative" ref={userImageRef}>
          <div
            className="w-12 h-12"
            onClick={() => {
              setShowMenuOptions((menuOptions) => !menuOptions);
            }}
          >
            <img
              src={userProfile?.data?.image || userImage}
              alt="user"
              className="w-full h-full rounded-full object-cover cursor-pointer"
            />
          </div>
          {showMenuOptions ? (
            <MenuSettings
              ref={menuRef}
              setShowMenuOptions={setShowMenuOptions}
              user={user}
              userImage={userProfile?.data?.image}
            />
          ) : null}
        </div>
      </section>
    </header>
  );
};

Header.propTypes = {
  setShouldHideSidebar: PropTypes.func,
  user: PropTypes.shape({
    created_at: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    updated_at: PropTypes.any,
    last_sign_in_at: PropTypes.string,
  }),
};

export default Header;
