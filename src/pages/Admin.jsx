import { Breadcrumbs } from "../components";
import { ProjectCard } from "../features/Admin";
import useProjectsContext from "../context/ProjectsContext";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Project = () => {
  const { projects, error, loading } = useProjectsContext();

  return (
    <section>
      <div className="mt-3">
        <Breadcrumbs
          optionsData={{
            key: "admin",
            text: "admin",
            to: "/admin",
          }}
        />

        <section>
          <h2 className="text-2xl font-medium py-8">Assign Roles</h2>

          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <div className="w-[90%] mx-auto pt-12 gap-12 grid grid-cols-3  px-8 py-8 border-2 border-gray-200 rounded-2xl shadow-sm bg-gray-50">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
};
export default Project;
//
