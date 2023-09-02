import { RiNotificationLine } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import userImage from "../../../assets/images/userImage.avif";
import ToggleMode from "./ToggleMode";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import MenuSettings from "./MenuSettings";

const Header = ({ setShouldHideSidebar }) => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const userImageRef = useRef(null);
  const menuRef = useRef(null);

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
      console.log(menuRef, userImageRef);
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-between rounded-md px-3 py-2 sticky top-0 z-50 ${
        scrolling ? "bg-[#ced4da]" : ""
      }`}
      onScroll={(e) => {
        console.log(e);
      }}
    >
      <header>
        <section className="flex items-center gap-3 text-2xl px-6">
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
          <Link
            className={` ${
              scrolling ? "#003366" : "text-red-500"
            }  font-semibold " to="/`}
          >
            BugMender
          </Link>
        </section>
      </header>

      <form
        className="w-72 flex items-center gap-3 rounded-full bg-white border-gray-200 focus-within:border-gray-300 transition-all duration-100 ease-in-out px-6 py-2 border-2 focus-within:w-[30rem] ${

          "
        tabIndex="0"
      >
        <input
          placeholder="Search"
          className="bg-none focus:outline-none w-[90%]"
        />
        <CgSearch className="cursor-pointer text-xl placeholder:text-stone-400 text-gray-500 " />
      </form>

      <section className="flex items-center justify-center gap-8 px-6">
        <button className="bg-blue-500 text-white px-3 py-2 text-sm rounded-md cursor-pointer font-medium hover:brightness-95 transition-all duration-150">
          Create Ticket
        </button>
        <RiNotificationLine
          className={`text-2xl text-blue-500 cursor-pointer ${
            scrolling && "!text-gray-800"
          }`}
        />
        <ToggleMode scrolling={scrolling} />
        <div className="relative" ref={userImageRef}>
          <div
            className="w-12 h-12"
            onClick={() => {
              setShowMenuOptions((menuOptions) => !menuOptions);
            }}
          >
            <img
              src={userImage}
              alt="user"
              className="w-full h-full rounded-full object-cover cursor-pointer"
            />
          </div>
          {showMenuOptions ? <MenuSettings menuRef={menuRef} /> : null}
        </div>
      </section>
    </header>
  );
};
export default Header;
