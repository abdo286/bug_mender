import { Breadcrumbs, Table } from "../components";
import { BiShow } from "react-icons/bi";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin7Line } from "react-icons/ri";
import { TicketsStats } from "../features/Tickets";

const data = [
  {
    title: "Modal doesn't close when I press the modal icon ",
    priority: "low",
    key: "title",
  },
];
const state = {
  columns: [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      className: "max-w-[8rem] text-gray-800 font-medium text-sm",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render(priority) {
        let priorityClass = "";

        if (priority === "low") {
          priorityClass = "bg-green-600";
        } else if (priority === "medium") {
          priorityClass = "bg-yellow-600";
        } else if (priority === "high") {
          priorityClass = "bg-red-600";
        }

        return (
          <div className="flex justify-center items-center">
            <span
              className={`border-2 rounded-2xl px-4 py-1 font-bold text-white shadow tracking-wider ${priorityClass} `}
            >
              {priority}
            </span>
          </div>
        );
      },
    },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Project Title", dataIndex: "projectTitle", key: "projectTitle" },
    { title: "Created", dataIndex: "created", key: "created" },
    { title: "Updated", dataIndex: "updated", key: "updated" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Assigned To", dataIndex: "assignedTo", key: "assignedTo" },
    { title: "Submitted By", dataIndex: "submittedBy", key: "submittedBy" },
    {
      title: "Actions",
      dataIndex: "",
      key: "actions",
      width: "fit-content",
      render() {
        return (
          <devi className="flex items-center gap-4 justify-center">
            <BiShow className="text-xl text-gray-500 cursor-pointer " />
            <LuEdit className="text-xl text-blue-500 cursor-pointer " />
            <RiDeleteBin7Line className="text-xl text-red-500 cursor-pointer  " />
          </devi>
        );
      },
    },
  ],
};

const Tickets = () => {
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs />
      </div>
      <div className="bg-white mx-16 mt-10 px-10 py-12">
        <TicketsStats />
        <section>
          <Table data={data} state={state} title={"Tickets"} />;
        </section>
      </div>
    </div>
  );
};
export default Tickets;

// Status: New, Development, Resolved
// Priority: Hight, Medium, Low
