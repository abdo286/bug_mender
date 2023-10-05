import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { supabase } from "../../../libs/supabaseClient";
import useUsersContext from "../../../context/UsersContext";
import useTicketsContext from "../../../context/TicketsContext";
import useProjectsContext from "../../../context/ProjectsContext";
import useAuthContext from "../../../context/AuthContext";
import { useFetch } from "../../../components/hooks";
import { getProjects, getTicket } from "../helpers/functions";

const useCreateTicket = ({ ticketId, historyId }) => {
  const { users } = useUsersContext();
  const {
    tickets,
    loading: ticketsLoading,
    error: ticketsError,
  } = useTicketsContext();
  const { projects: projectsData } = useProjectsContext();
  const { userProfile } = useAuthContext();

  const developers = useMemo(() => {
    return users
      .filter((user) => user.role === "developer")
      .map((user) => {
        return { value: user.id, label: user.name };
      });
  }, [users]);

  const query = useMemo(() => {
    return () =>
      supabase
        .from("ticketHistory")
        .select(
          `id, name, description, type, priority, status, ticketId, assignedTo, projects (id, name, description, description, status)`
        )
        .eq("id", historyId);
  }, [historyId]);

  const {
    data: ticketHistoryEntry,
    loading: ticketHistoryEntryLoading,
    error: ticketHistoryEntryError,
  } = useFetch(query);

  const mode = useMemo(() => {
    return ticketId ? "editing" : historyId ? "restoring" : "creating";
  }, [ticketId, historyId]);

  const ticket = useMemo(() => {
    return getTicket(tickets, ticketId, users);
  }, [tickets, ticketId, users]);

  const projects = useMemo(() => getProjects(projectsData), [projectsData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      description: mode === "editing" ? ticket?.description : "",
      name: mode === "editing" ? ticket?.name : "",
      assignedTo: mode === "editing" ? ticket?.assignedTo : "Select...",
      priority: mode === "editing" ? ticket?.priority : "low",
      status: mode === "editing" ? ticket?.status : "new",
      projectId: mode === "editing" ? ticket?.projectId : "Select...",
      type: mode === "editing" ? ticket?.type : "new_development",
    },
  });

  const onSubmit = async (formData) => {
    const data = {
      ...formData,
      projectId: formData.projectId.value,
      assignedTo: formData?.assignedTo?.value,
    };

    if (mode === "creating") {
      data.createdAt = new Date();
      // data.createdBy = userProfile.id;
      // I could log in but I had to hardcode the value of createdBy 
      data.createdBy = 21;
    }

    for (let key of Object.keys(data)) {
      if (!data[key] && key !== "assignedTo") {
        console.error(key);
        toast.error(`${key} was missing `);
        toast.error("Fill all the fields");
        return;
      }
    }

    let error;

    if (mode === "editing" || mode == "restoring") {
      const data = mode === "editing" ? ticket : ticketHistoryEntry[0];

      // eslint-disable-next-line
      const { projects, ticketId, ...dataWithoutProjects } = data;
      const { error: updatingError } = await supabase
        .from("tickets")
        .update(dataWithoutProjects)
        .eq("id", mode == "editing" ? data.id : data.ticketId);
        console.log("data.ticketId", data.ticketId);

      const { error: addingToHistoryError } = await supabase
        .from("ticketHistory")
        .insert({
          projectId: data.projects.id,
          ticketId: mode === "editing" ? data.id : data.ticketId,
          description: data.description,
          name: data.name,
          priority: data.priority,
          status: data.status,
          type: data.type,
          assignedTo: data.assignedTo,
          updated: new Date(),
          createdBy: userProfile.id,
        });

      if (addingToHistoryError) {
        console.log(addingToHistoryError);
        toast.error("Failed to add new updates to Ticket History");
      }

      error = updatingError;
    } else {
      const { error: insertingError } = await supabase
        .from("tickets")
        .insert(data);
      error = insertingError;
    }

    if (error) {
      console.log(error);
      toast.error("There was error submitting the form");
    } else {
      toast.success(
        `Ticket was ${
          mode === "editing" || mode === "restoring" ? "updated" : "created"
        } successfully`
      );
      if (mode == "creating") {
        reset();
      }
    }
  };

  useEffect(() => {
    if (mode !== "editing" && mode !== "restoring") return;

    const data =
      mode === "editing"
        ? ticket
        : ticketHistoryEntry
        ? ticketHistoryEntry[0]
        : null;

    if (data !== null && !!data) {
      setValue("name", data.name);
      setValue("description", data.description);

      if (data.assignedTo) {
        setValue("assignedTo", {
          value: data.assignedTo,
          label: users.find((user) => user.id === data.assignedTo)?.name,
        });
      }

      setValue("projectId", {
        value: data.projects.id,
        label: data.projects.name,
      });

      setValue("status", data.status);
      setValue("priority", data.priority);
      setValue("type", data.type);
    }
  }, [mode, ticket, ticketHistoryEntry, setValue, users]);

  return {
    developers,
    register,
    handleSubmit,
    errors,
    control,
    onSubmit,
    projects,
    ticketsLoading,
    ticketHistoryEntryLoading,
    ticketsError,
    ticketHistoryEntryError,
    mode,
  };
};

export default useCreateTicket;
