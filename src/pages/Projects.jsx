import { ProjectsGrid } from "../features/Projects";
import { MainHeader } from "../components";
import { Table } from "../components";
import { Breadcrumbs } from "../components";
import { useState } from "react";
import { data, state } from "../features/Projects/constants/ProjectsData";
import { nanoid } from "nanoid";

const options = [
  {
    key: nanoid(),
    text: "projects",
    to: "/projects",
  },
];

const Projects = () => {
  const [view, setView] = useState("grid");
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[90%] mx-auto">
        <MainHeader view={view} setView={setView} text="Project" />

        <section className="bg-white px-10 py-6 mt-16 shadow-md">
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
