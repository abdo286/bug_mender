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
          <h2 className="text-2xl font-medium py-8 px-8">Assign Roles</h2>

          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <div className="w-[90%] lg:w-[95%] xl:w-[99%] xl:mx-auto pt-12 gap-12 grid l:px-8 py-8 border-2 border-gray-200 rounded-2xl shadow-sm bg-gray-50 grid-cols-card px-8 mx-auto">
              {projects.map((project) => (
                <div key={project.id} className="flex justify-center">
                  <ProjectCard project={project} />
                </div>
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
