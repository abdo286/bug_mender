import CompanyDataItem from "./CompanyDataItem";
import { MdGroups } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import { RiNotification3Fill } from "react-icons/ri";
const CompanyData = () => {
  return (
    <div className="bg-white py-6 px-5 flex flex-col gap-8 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-150 ease-in-out">
      <h3>Company Data</h3>
      <div className="px-5 flex flex-col gap-8 rounded-md">
        <CompanyDataItem
          Icon={MdGroups}
          name="Members"
          number={18}
          numberColor="#82c91e"
        />
        <CompanyDataItem
          Icon={FaFolderOpen}
          name="Projects"
          number={18}
          numberColor="#495057"
        />
        <CompanyDataItem
          Icon={ImTicket}
          name="Tickets"
          number={18}
          numberColor="#f59f00"
        />
        <CompanyDataItem
          Icon={RiNotification3Fill}
          name="Notifications"
          number={18}
          numberColor="#ff6b6b"
        />
      </div>
    </div>
  );
};
export default CompanyData;
