import { AiOutlineMenu } from "react-icons/ai";
import { SlSpeedometer } from "react-icons/sl";
import { PiNotificationBold } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { PiTicketLight } from "react-icons/pi";
import { MdPersonAdd } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

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
  return (
    <div className="flex flex-col sticky top-5">
      <nav className="mt-12">
        <ul className="flex flex-col gap-3 ">
          {sidebarData.map((cur) => (
            <li key={cur.id} className="inline-block ">
              <NavLink
                className="flex items-center gap-5 text-lg px-5 transition-all duration-300 hover:bg-[#dee2e6be] py-3 ease-in-out border-l-8 border-l-green-100 hover:border-l-green-500"
                to={cur.to}
              >
                <cur.icon className="text-green-600" />
                <h2 className="text-gray-800 ">{cur.text} </h2>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
