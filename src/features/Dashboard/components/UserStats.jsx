import PropTypes from "prop-types";
import { UserStatCard } from "./UserStatCard";
import { FaUser } from "react-icons/fa";
import { TbSum } from "react-icons/tb";
import { IoTicket } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";

const UserStats = ({
  newUsers,
  totalUsers,
  developmentTickets,
  totalDevelopers,
}) => {
  return (
    <div className="bg-white py-6 px-5 flex flex-col gap-8 rounded-md shadow-sm hover:shadow-md transition-all duration-150 ease-in-out">
      <UserStatCard Icon={FaUser} name="New Users" number={newUsers} />
      <UserStatCard Icon={TbSum} name="Total Users" number={totalUsers} />
      <UserStatCard
        Icon={IoTicket}
        name="Tickets in Development"
        number={developmentTickets}
      />
      <UserStatCard
        Icon={BsCodeSlash}
        name="Total Developers"
        number={totalDevelopers}
      />
    </div>
  );
};

UserStats.propTypes = {
  newUsers: PropTypes.number.isRequired,
  totalUsers: PropTypes.number.isRequired,
  developmentTickets: PropTypes.number.isRequired,
  totalDevelopers: PropTypes.number.isRequired,
};

export default UserStats;
