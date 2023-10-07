import { nanoid } from "nanoid";
import { Breadcrumbs, TableSection } from "../components";
import { ProjectDetails, ProjectTeam } from "../features/Project";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { supabase } from "../libs/supabaseClient";
import useFetch from "../components/hooks/useFetch";
import Loading from "./Loading";
import NotFound from "./NotFound";
import RTableColumns from "../features/Tickets/data/RTableColumns";

const options = [
  {
    key: "projects",
    text: `projects`,
    to: "/projects",
  },
];

const Project = () => {
  const { id } = useParams();

  const queries = useMemo(() => {
    return {
      projectQuery: () => supabase.from("projects").select().eq("id", id),
      projectTeamQuery: () =>
        supabase
          .from("UsersProjects")
          .select(
            `userId, role, profiles (id, name, email, role, image, lastName, country )`
          )
          .eq("projectId", id),
      projectTicketsQuery: () =>
        supabase
          .from("tickets")
          .select(
            `createdAt, updated, id, name, description, type, priority, status, assignedTo, createdBy`
          )
          .eq("projectId", id),
    };
  }, [id]);

  const {
    data: project,
    error: projectError,
    loading: projectLoading,
  } = useFetch(queries.projectQuery);

  const {
    data: projectTeam,
    error: projectTeamError,
    loading: projectTeamLoading,
  } = useFetch(queries.projectTeamQuery);

  const {
    data: projectTickets,
    error: projectTicketsError,
    loading: projectTicketsLoading,
  } = useFetch(queries.projectTicketsQuery);

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
