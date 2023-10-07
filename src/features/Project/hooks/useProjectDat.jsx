import { useMemo } from "react";
import { supabase } from "../../../libs/supabaseClient";
import useFetch from "../../../components/hooks/useFetch";

const useProjectData = (projectId) => {
  const queries = useMemo(() => {
    return {
      projectQuery: () =>
        supabase.from("projects").select().eq("id", projectId),
      projectTeamQuery: () =>
        supabase
          .from("UsersProjects")
          .select(
            `userId, role, profiles (id, name, email, role, image, lastName, country )`
          )
          .eq("projectId", projectId),
      projectTicketsQuery: () =>
        supabase
          .from("tickets")
          .select(
            `createdAt, updated, id, name, description, type, priority, status, assignedTo, createdBy`
          )
          .eq("projectId", projectId),
    };
  }, [projectId]);

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

  return {
    project,
    projectError,
    projectLoading,
    projectTeam,
    projectTeamError,
    projectTeamLoading,
    projectTickets,
    projectTicketsError,
    projectTicketsLoading,
  };
};
export default useProjectData;
