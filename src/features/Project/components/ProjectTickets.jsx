import { Table } from "../../../components";
import { BiShow } from "react-icons/bi";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin7Line } from "react-icons/ri";

const data = [
  { a: "123", key: "1" },
  { a: "cdd", b: "edd", key: "2" },
  { a: "1333", c: "eee", d: 2, key: "3" },
];

const state = {
  columns: [
    { title: "Project", dataIndex: "Project", key: "a" },
    { title: "Priority", dataIndex: "Priority", key: "c" },
    { title: "Start Date", dataIndex: "startDate", key: "b" },
    { title: "End Date", dataIndex: "endDate", key: "c" },
    { title: "Team", dataIndex: "team", key: "c" },
    {
      title: "Actions",
      dataIndex: "",
      key: "d",
      width: 200,
      render() {
        return (
          <devi className="flex items-center gap-4 justify-center">
            <BiShow className="text-xl text-gray-500 cursor-pointer " />
            <LuEdit className="text-xl text-blue-500 cursor-pointer " />
            <RiDeleteBin7Line className="text-xl text-red-500 cursor-pointer " />
          </devi>
        );
      },
    },
  ],
};

const ProjectTickets = () => {
  return (
    <div className="bg-white rounded-lg h-fit">
      <div className="px-8 py-6">
        <Table title="Tickets" data={data} state={state}  />
      </div>
    </div>
  );
};
export default ProjectTickets;
