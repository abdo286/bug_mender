import { UserStatCard } from "./UserStatCard";
import { FaUser } from "react-icons/fa";
import { TbSum } from "react-icons/tb";
import { IoTicket } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";

const UserStats = () => {
  return (
    <div className="bg-white py-6 px-5 flex flex-col gap-8 rounded-md shadow-sm hover:shadow-md transition-all duration-150 ease-in-out">
      <UserStatCard Icon={FaUser} name="New Users" number={0} />
      <UserStatCard Icon={TbSum} name="Total Users" number={18} />
      <UserStatCard Icon={IoTicket} name="Tickets in Development" number={14} />
      <UserStatCard Icon={BsCodeSlash} name="Total Developers" number={7} />
    </div>
  );
};
export default UserStats;
