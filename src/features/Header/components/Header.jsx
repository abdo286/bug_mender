import { RiNotificationLine } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import userImage from "../../../assets/images/userImage.avif";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <section>
        <form
          className="w-72 flex items-center gap-3 rounded-full bg-white border-gray-300 focus-within:border-gray-400 transition-all duration-100 ease-in-out px-6 py-2 border-2 focus-within:w-[30rem]"
          tabindex="0"
        >
          >
          <input
            placeholder="Search"
            className="bg-none focus:outline-none w-[90%]"
          />
          <CgSearch className="cursor-pointer text-xl placeholder:text-stone-400 " />
        </form>
      </section>
      <section className="flex items-center justify-center gap-8 px-6">
        <button className="bg-blue-500 text-white px-3 py-2 text-sm rounded-md cursor-pointer font-medium hover:brightness-95 transition-all duration-150">
          Create Ticket
        </button>
        <RiNotificationLine className="text-2xl text-gray-500 cursor-pointer" />
        <div className="w-12 h-12">
          <img
            src={userImage}
            alt="user"
            className="w-full h-full rounded-full object-cover cursor-pointer"
          />
        </div>
      </section>
    </header>
  );
};
export default Header;

//  <button className="bg-red-500 text-white px-3 py-2 text-sm rounded-md cursor-pointer font-medium hover:brightness-95 transition-all duration-150">
//    Logout
//  </button>;

//    <button className=" px-4 py-2 rounded-md cursor-pointer font-medium hover:brightness-95 transition-all duration-150 flex items-center gap-2 text-gray-600 border-2 border-gray-300">
//      <AiOutlinePlus className="text-xl" />
//      <span className="text-sm font-bold">New Ticket</span>
//    </button>;
