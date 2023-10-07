import useFetch from "../../../components/hooks/useFetch";
import { supabase } from "../../../libs/supabaseClient";
import { useMemo } from "react";

const useTicketData = (ticketId) => {
  const queries = useMemo(() => {
    return {
      ticketQuery: () =>
        supabase
          .from("tickets")
          .select(
            `createdAt, updated, id, name, description, type, priority, status, assignedTo, createdBy, projects (id, name, description, description, status)`
          )
          .eq("id", ticketId),
      ticketHistoryQuery: () =>
        supabase
          .from("ticketHistory")
          .select(
            `id, projectId,ticketId, description, name, priority, status,type, assignedTo, updated`
          )
          .eq("ticketId", ticketId),
      attachmentsQuery: () =>
        supabase.from("attachments").select().eq("ticketId", ticketId),
      commentsQuery: () =>
        supabase
          .from("comments")
          .select(
            `id, createdAt, ticketId, comment, profiles (id, name, email, role, image, lastName, country )`
          )
          .eq("ticketId", ticketId),
    };
  }, [ticketId]);

  const {
    data: tickets,
    error: ticketsError,
    loading: ticketsLoading,
  } = useFetch(queries.ticketQuery);

  const {
    data: ticketHistory,
    error: ticketHistoryError,
    loading: ticketHistoryLoading,
  } = useFetch(queries.ticketHistoryQuery);

  const {
    data: attachments,
    error: attachmentsError,
    loading: attachmentsLoading,
  } = useFetch(queries.attachmentsQuery);

  const {
    data: comments,
    error: commentsError,
    loading: commentsLoading,
  } = useFetch(queries.commentsQuery);

  return {
    tickets,
    ticketsError,
    ticketsLoading,
    ticketHistory,
    ticketHistoryError,
    ticketHistoryLoading,
    attachments,
    attachmentsError,
    attachmentsLoading,
    comments,
    commentsError,
    commentsLoading,
  };
};

export default useTicketData;
