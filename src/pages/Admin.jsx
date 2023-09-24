import { nanoid } from "nanoid";
import { Breadcrumbs } from "../components";
import { ProjectCard } from "../features/Admin";
import { useFetch } from "../components/hooks";
import { supabase } from "../libs/supabaseClient";

const options = [
  {
    key: nanoid(),
    text: "admin",
    to: "/admin",
  },
];

const query = async () => {
  return supabase.from("projects").select();
};

const Project = () => {
  const { data: projects, error, loading } = useFetch(query);

  return (
    <div>
      <div>
        <div className="mt-3">
          <Breadcrumbs optionsData={options} />
        </div>
        <section>
          <h2 className="text-2xl font-medium py-8">Assign Roles</h2>

          {loading ? (
            <section>loading...</section>
          ) : error ? (
            <section>There was an error</section>
          ) : (
            <div className="w-[90%] mx-auto pt-12 gap-12 grid grid-cols-3  px-8 py-8 border-2 border-gray-200 rounded-2xl shadow-sm bg-gray-50">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
export default Project;
//
