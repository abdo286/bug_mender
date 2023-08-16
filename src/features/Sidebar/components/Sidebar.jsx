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
    to: "",
    id: nanoid(),
  },
  {
    text: "Notification Inbox",
    icon: PiNotificationBold,
    to: "",
    id: nanoid(),
  },
  {
    text: "Projects",
    icon: GoProject,
    to: "",
    id: nanoid(),
  },
  {
    text: "Tickets",
    icon: PiTicketLight,
    to: "",
    id: nanoid(),
  },
  {
    text: "Admin",
    icon: MdPersonAdd,
    to: "",
    id: nanoid(),
  },
];
const Sidebar = () => {
  return (
    <div className="flex flex-col fixed top-6 z-50 ">
      <header>
        <section className="flex items-center gap-3 text-2xl px-6">
          <button className="hover:scale-110">
            <AiOutlineMenu className="cursor-pointer " />
          </button>
          <Link className="text-red-500 font-semibold " to="/">
            BugMender
          </Link>
        </section>
      </header>

      <nav className="mt-12 ">
        <ul className="flex flex-col gap-3 ">
          {sidebarData.map((cur) => (
            <li key={cur.id} className="inline-block ">
              <NavLink
                className="flex items-center gap-5 text-lg px-5 transition-all duration-300 hover:bg-[#dee2e6] py-3 ease-in-out"
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
