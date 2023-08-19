import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <div className="py-12 px-5 grid grid-cols-3 gap-y-16">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};
export default ProjectsGrid;
