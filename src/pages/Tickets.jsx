import { Breadcrumbs, MainHeader, Table } from "../components";
import { BiShow } from "react-icons/bi";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin7Line } from "react-icons/ri";
import { TicketsStats } from "../features/Tickets";
import { useState } from "react";

const data = [
  {
    title:
      "Modal doesn't close when I press the modal iconModal doesn't close when I press the modal icon ",
    priority: "low",
    status: "New",
    key: "title",
    projectTitle: "bugTracker",
    created: "23/7/2023",
    updated: "23/7/2023",
    type: "defect",
    assignedTo: "fighter",
    submittedBy: "user36",
  },
];
const state = {
  columns: [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      className:
        "max-w-[10rem] min-w-[10rem] text-gray-800 font-medium text-sm",
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
          <div className="flex justify-start items-center">
            <span
              className={`border-2 rounded-2xl px-4 py-1 font-bold text-white shadow tracking-wider text-sm ${priorityClass} `}
            >
              {priority}
            </span>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render(status) {
        let statusClass = "";

        if (status === "New") {
          statusClass = "bg-blue-600";
        } else if (status === "Development") {
          statusClass = "bg-yellow-600";
        } else if (status === "Resolved") {
          statusClass = "bg-green-600";
        }

        return (
          <div className="flex justify-start items-center">
            <span
              className={`border-2 rounded-2xl px-4 py-1 font-bold text-white shadow tracking-wider text-sm ${statusClass} `}
            >
              {status}
            </span>
          </div>
        );
      },
    },
    {
      title: "Project Title",
      dataIndex: "projectTitle",
      key: "projectTitle",
      render(projectTitle) {
        return (
          <div className="flex justify-start items-center">
            <span className="px-4 py-1 font-bold tracking-wider text-sm">
              {projectTitle}
            </span>
          </div>
        );
      },
    },
    // {
    //   title: "Created",
    //   dataIndex: "created",
    //   key: "created",
    //   render(created) {
    //     return (
    //       <div className="flex justify-start items-center">
    //         <span className="px-4 py-1 font-bold tracking-wider text-sm">
    //           {created}
    //         </span>
    //       </div>
    //     );
    //   },
    // },
    // {
    //   title: "Updated",
    //   dataIndex: "updated",
    //   key: "updated",
    //   render(updated) {
    //     return (
    //       <div className="flex justify-start items-center">
    //         <span className="px-4 py-1 font-bold tracking-wider text-sm">
    //           {updated}
    //         </span>
    //       </div>
    //     );
    //   },
    // },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render(type) {
        return (
          <div className="flex justify-start items-center">
            <span className="px-4 py-1 font-bold tracking-wider text-sm">
              {type}
            </span>
          </div>
        );
      },
    },
    {
      title: "Assigned To",
      dataIndex: "assignedTo",
      key: "assignedTo",
      render(type) {
        return (
          <div className="flex justify-start items-center">
            <span className="px-4 py-1 font-bold tracking-wider text-sm">
              {type}
            </span>
          </div>
        );
      },
    },
    {
      title: "Submitted By",
      dataIndex: "submittedBy",
      key: "submittedBy",
      render(type) {
        return (
          <div className="flex justify-start items-center">
            <span className="px-4 py-1 font-bold tracking-wider text-sm">
              {type}
            </span>
          </div>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "actions",
      width: "fit-content",
      render() {
        return (
          <devi className="flex items-center gap-4 justify-start">
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
  const [view, setView] = useState("table");
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs />
      </div>
      <section className="w-[90%] mx-auto">
        <section>
          <MainHeader view={view} setView={setView} text="Tickets" />
        </section>
        <div className="bg-white mt-16 px-10 py-12">
          <TicketsStats />
          <section>
            <Table
              data={data}
              state={state}
              title={"Tickets"}
              className="mt-12"
            />
            ;
          </section>
        </div>
      </section>
    </div>
  );
};
export default Tickets;

// Status: New, Development, Resolved
// Priority: Hight, Medium, Low
// className="bg-white mx-16   "
