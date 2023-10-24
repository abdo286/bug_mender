import { ProjectsGrid } from "../features/Projects";
import { Error, Loading, MainHeader, RTable } from "../components";
import { Breadcrumbs } from "../components";
import { useState } from "react";
import useProjectsContext from "../context/ProjectsContext";
import RTableColumns from "../features/Projects/data/RTableColumns";

const Projects = () => {
  const [view, setView] = useState("grid");
  const { projects, error, loading } = useProjectsContext();

  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={{
            key: "projects",
            text: "projects",
            to: "/projects",
          }}
        />
      </nav>
      <section className="lg:w-[99%] mx-auto">
        <MainHeader
          view={view}
          setView={setView}
          text="Project"
          path="/create-project"
        />

        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
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
    </main>
  );
};

export default Projects;
