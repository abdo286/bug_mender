import { nanoid } from "nanoid";
import { Breadcrumbs, TableSection } from "../components";
import {
  ProjectDetails,
  ProjectDetailsDate,
  ProjectTeam,
} from "../features/Project";
import { useParams } from "react-router-dom";

import Loading from "./Loading";
import NotFound from "./NotFound";
import RTableColumns from "../features/Tickets/data/RTableColumns";
import useProjectData from "../features/Project/hooks/useProjectDat";

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
    <main className="px-4 sm:px-6 lg:px-8 bg-[#F1F3F5]">
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={[
            {
              key: "projects",
              text: `projects`,
              to: "/projects",
            },
            {
              key: nanoid(),
              text: project.name,
              to: `.`,
            },
          ]}
        />
      </nav>
      <section className="w-full mx-auto pt-12 gap-12 grid lg:grid-cols-2">
        <div className="max-w-full">
          <ProjectDetails project={project} />
        </div>{" "}
        <div className="max-w-full">
          <ProjectDetailsDate project={project} />
        </div>{" "}
        <div className="max-w-full">
          <ProjectTeam projectTeam={projectTeam} />
        </div>{" "}
      </section>
      <section className="w-full mx-auto pt-12 gap-12">
        <div className="max-w-full">
          <TableSection
            title="Tickets"
            columns={RTableColumns}
            data={projectTickets}
            loading={projectTicketsLoading}
            error={projectTicketsError}
            className="mt-0  max-w-full"
          />
        </div>
      </section>
    </main>
  );
};

export default Project;
