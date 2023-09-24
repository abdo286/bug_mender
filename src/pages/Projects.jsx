import { ProjectsGrid } from "../features/Projects";
import { MainHeader } from "../components";
import { Table } from "../components";
import { Breadcrumbs } from "../components";
import { useState } from "react";
import { data, state } from "../features/Projects/constants/ProjectsData";
import { nanoid } from "nanoid";
import { supabase } from "../libs/supabaseClient";
import useFetch from "../components/hooks/useFetch";
import "react-quill/dist/quill.snow.css";

const options = [
  {
    key: nanoid(),
    text: "projects",
    to: "/projects",
  },
];

const query = async () => {
  return supabase.from("projects").select();
};

const Projects = () => {
  const [view, setView] = useState("grid");
  const { data: projects, error, loading } = useFetch(query);

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
          <section className="bg-white px-10 py-6 mt-16 shadow-md">
            {view === "grid" ? (
              <ProjectsGrid data={projects} />
            ) : (
              <Table
                data={projects}
                state={state}
                title={"Projects"}
                sortByColor="bg-white"
                className="mt-12"
              />
            )}
          </section>
        )}
      </section>
    </div>
  );
};

export default Projects;
