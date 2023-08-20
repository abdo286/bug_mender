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
          <div className="w-[90%] mx-auto pt-12 gap-12 grid grid-cols-3 bg-[#7895CB] px-8 py-8 shadow-sm">
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