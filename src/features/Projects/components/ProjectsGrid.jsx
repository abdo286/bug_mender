import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ data }) => {
  return (
    <section>
      <h2 className="text-xl font-medium mb-8">Projects</h2>
      <section className="grid grid-cols-card justify-around gap-x-12 gap-y-12">
        {data?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
};

export default ProjectsGrid;
/// md:grid-cols-[minmax(24rem, 1fr)_minmax(24rem, 1fr)] md:gap-x-12 md:gap-y-12 lg:grid-cols-3 lg:gap-y-16 gap-y-8 py-12 lg:px-5
