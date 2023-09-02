import { forwardRef } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MenuSettings = forwardRef(function MenuSettings({
  menuRef,
  setShowMenuOptions,
}) {
  const navigate = useNavigate();
  return (
    <motion.div>
      <motion.div
        className="absolute translate-y-1 -left-48 shadow-md rounded-md"
        ref={menuRef}
      >
        <header className="flex gap-3 pt-2 bg-[#2ed0e6] px-2 py-3 items-center">
          <div className="w-9 h-9">
            <img
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="user profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <h3>Demo Admin</h3>
            <p>demoadmin@bugtracker.com</p>
          </div>
        </header>
        <section className="bg-white w-full">
          <ul className="flex flex-col  ">
            <li
              className="cursor-pointer text-sm text-gray-600 font-medium  flex items-center gap-2 hover:bg-[#f1f3f5] pt-5 pb-3 pl-5 transition-all ease-in-out duration-100 active:bg-[#66D9E8]"
              onClick={() => {
                navigate("/account");
                setShowMenuOptions(false);
              }}
            >
              <BsPersonFill className="text-xl text-[#3B82F6]" />
              My Profile
            </li>
            <li className="cursor-pointer text-sm text-gray-600 font-medium flex items-center gap-2  hover:bg-[#f1f3f5] pt-5 pb-3 pl-5 transition-all ease-in-out duration-100 active:bg-[#66D9E8]">
              <BiLogOut className="text-xl text-[#fa5252]" />
              Log Out
            </li>
          </ul>
        </section>
      </motion.div>
    </motion.div>
  );
});
export default MenuSettings;
