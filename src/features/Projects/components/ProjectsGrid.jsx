import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ data }) => {
  return (
    <section>
      <h2 className="text-xl font-medium mb-8">Projects</h2>
      <div className="py-12 px-5 grid grid-cols-3 gap-y-16">
        {data?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
export default ProjectsGrid;
