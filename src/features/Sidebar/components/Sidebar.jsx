import { SlSpeedometer } from "react-icons/sl";
import { PiNotificationBold } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { PiTicketLight } from "react-icons/pi";
import { MdPersonAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const sidebarData = [
  {
    text: "Dashboard",
    icon: SlSpeedometer,
    to: "/",
    id: nanoid(),
  },
  {
    text: "Notification Inbox",
    icon: PiNotificationBold,
    to: "/notification-inbox",
    id: nanoid(),
  },
  {
    text: "Projects",
    icon: GoProject,
    to: "/projects",
    id: nanoid(),
  },
  {
    text: "Tickets",
    icon: PiTicketLight,
    to: "/tickets",
    id: nanoid(),
  },
  {
    text: "Admin",
    icon: MdPersonAdd,
    to: "/admin",
    id: nanoid(),
  },
];
const Sidebar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolling(true);
      else setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      className={`flex flex-col sticky z-[1000] ${
        isScrolling ? "bg-[#ced4da] top-12" : "top-5"
      }`}
    >
      <nav className={`xl:mt-12 mt-5  ${isScrolling && "mb-1"}`}>
        <ul className="xl:flex xl:flex-col gap-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-cols-auto">
          {sidebarData.map((cur) => (
            <li key={cur.id} className="inline-block ">
              <NavLink
                className="flex items-center gap-5 text-lg px-5 transition-all duration-300 xl:hover:bg-[#dee2e6be] xl:py-3 ease-in-out xl:border-l-8 xl:border-l-green-100 hover:border-l-green-500"
                to={cur.to}
              >
                <cur.icon className="text-green-600" />
                <h2 className="text-gray-800 text-[0.9rem] xl:text-base ">
                  {cur.text}{" "}
                </h2>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
