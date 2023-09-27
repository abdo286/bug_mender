import { ProjectsGrid } from "../features/Projects";
import { MainHeader, RTable } from "../components";
import { Breadcrumbs } from "../components";
import { useState } from "react";
import { nanoid } from "nanoid";
import useProjectsContext from "../context/ProjectsContext";
import RTableColumns from "../features/Projects/data/RTableColumns";

const options = [
  {
    key: nanoid(),
    text: "projects",
    to: "/projects",
  },
];

const Projects = () => {
  const [view, setView] = useState("grid");
  const { projects, error, loading } = useProjectsContext();

  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[90%] mx-auto">
        <MainHeader
          view={view}
          setView={setView}
          text="Project"
          path="/create-project"
        />

        {loading ? (
          <section>loading...</section>
        ) : error ? (
          <section>There was an error</section>
        ) : (
          <section className="mt-16">
            {view === "grid" ? (
              <div className="bg-white shadow-md px-10 py-6">
                <ProjectsGrid data={projects} />
              </div>
            ) : (
              <div className="mt-12">
                <RTable columns={RTableColumns} data={projects} />
              </div>
            )}
          </section>
        )}
      </section>
    </div>
  );
};

export default Projects;
