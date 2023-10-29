import { BiShow } from "react-icons/bi";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin7Line } from "react-icons/ri";

export const data = [
  {
    project: "But Tracker",
    priority: "low",
    startDate: "23/8/2022",
    endDate: "23/9/2023",
    key: "1",
  },
];

export const state = {
  columns: [
    { title: "Project", dataIndex: "project", key: "a" },
    { title: "Priority", dataIndex: "priority", key: "c" },
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
            <VscEdit className="text-xl text-blue-500 cursor-pointer " />
            <RiDeleteBin7Line className="text-xl text-red-500 cursor-pointer " />
          </devi>
        );
      },
    },
  ],
};
