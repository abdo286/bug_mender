import { forwardRef } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../libs/supabaseClient";
import PropTypes from "prop-types";

const MenuSettings = forwardRef(function MenuSettings(
  { setShowMenuOptions, user, userImage },
  ref
) {
  const navigate = useNavigate();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    localStorage.removeItem("session");
    console.warn(error);
  };

  return (
    <motion.div>
      <motion.div
        className="absolute translate-y-1 -left-48 shadow-md rounded-md"
        ref={ref}
      >
        <header className="flex gap-3 pt-2 bg-[#2ed0e6] px-2 py-3 items-center w-[16rem] overflow-hidden">
          <div className="w-12 h-12 relative ">
            <img
              src={
                userImage ||
                "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
              alt="user profile"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full shadow-md"></div>
          </div>
          <div>
            <h3 className="overflow-hidden max-w-[80%]">Demo Admin</h3>
            <p className="overflow-hidden max-w-[80%]"> {user?.email}</p>
          </div>
        </header>
        <section className="bg-white w-full">
          <ul className="flex flex-col">
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
            <li
              className="cursor-pointer text-sm text-gray-600 font-medium flex items-center gap-2  hover:bg-[#f1f3f5] pt-5 pb-3 pl-5 transition-all ease-in-out duration-100 active:bg-[#66D9E8]"
              onClick={logout}
            >
              <BiLogOut className="text-xl text-[#fa5252]" />
              Log Out
            </li>
          </ul>
        </section>
      </motion.div>
    </motion.div>
  );
});

MenuSettings.propTypes = {
  setShowMenuOptions: PropTypes.func.isRequired,
  user: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    last_sign_in_at: PropTypes.string.isRequired,
  }).isRequired,
};
export default MenuSettings;
