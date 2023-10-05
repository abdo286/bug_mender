import { Breadcrumbs } from "../components";
import { ProjectCard } from "../features/Admin";
import useProjectsContext from "../context/ProjectsContext";

const options = [
  {
    key: "admin",
    text: "admin",
    to: "/admin",
  },
];

const Project = () => {
  const { projects, error, loading } = useProjectsContext();

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
