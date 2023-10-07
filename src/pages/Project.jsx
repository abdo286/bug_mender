import { nanoid } from "nanoid";
import { Breadcrumbs, TableSection } from "../components";
import { ProjectDetails, ProjectTeam } from "../features/Project";
import { useParams } from "react-router-dom";

import Loading from "./Loading";
import NotFound from "./NotFound";
import RTableColumns from "../features/Tickets/data/RTableColumns";
import useProjectData from "../features/Project/hooks/useProjectDat";

const options = [
  {
    key: "projects",
    text: `projects`,
    to: "/projects",
  },
];

const Project = () => {
  const { id: projectId } = useParams();

  const {
    project,
    projectError,
    projectLoading,
    projectTeam,
    projectTeamError,
    projectTeamLoading,
    projectTickets,
    projectTicketsError,
    projectTicketsLoading,
  } = useProjectData(projectId);

  if (projectLoading || projectTeamLoading || projectTicketsLoading)
    return <Loading />;
  if (
    projectError ||
    projectTeamError ||
    projectTicketsError ||
    (!projectLoading && !project)
  ) {
    console.log(projectError || projectTeamError || projectTicketsError);
    return <NotFound />;
  }

  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={[
            ...options,
            {
              key: nanoid(),
              text: project.name,
              to: `.`,
            },
          ]}
        />
      </nav>
      <section className="w-[90%] mx-auto pt-12 gap-12 grid grid-cols-[30fr_70fr] ">
        <div>
          <ProjectDetails project={project} />
          <ProjectTeam projectTeam={projectTeam} />
        </div>
        <TableSection
          title="Tickets"
          columns={RTableColumns}
          data={projectTickets}
          loading={projectTicketsLoading}
          error={projectTicketsError}
          className="mt-0"
        />
      </section>
    </main>
  );
};

export default Project;
