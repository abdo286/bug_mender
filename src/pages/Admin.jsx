import { Breadcrumbs } from "../components";
import { ProjectCard } from "../features/Admin";

const Project = () => {
  return (
    <div>
      <div>
        <div className="mt-3">
          <Breadcrumbs />
        </div>
        <section>
          <h2 className="text-2xl font-medium py-8">Projects</h2>
          <div className="w-[90%] mx-auto pt-12 gap-12 grid grid-cols-3  px-8 py-8 border-2 border-gray-200 rounded-2xl shadow-sm bg-gray-50">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
      </div>
    </div>
  );
};
export default Project;
// 