import { ProjectsGrid } from "../features/Projects";
import { MainHeader } from "../components";
import { Table } from "../components";
import { Breadcrumbs } from "../components";
import { BiShow } from "react-icons/bi";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useState } from "react";

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

const Projects = () => {
  const [view, setView] = useState("grid");
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs />
      </div>
      <section className="w-[90%] mx-auto">
        <MainHeader view={view} setView={setView} text="Projects" />

        <section className="bg-white px-10 py-6 mt-16">
          {view === "grid" ? (
            <ProjectsGrid />
          ) : (
            <Table
              data={data}
              state={state}
              title={"Projects"}
              sortByColor="bg-white"
              className="mt-12"
            />
          )}
        </section>
      </section>
    </div>
  );
};

export default Projects;
