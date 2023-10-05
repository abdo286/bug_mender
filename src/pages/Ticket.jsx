import { useMemo } from "react";
import { Breadcrumbs } from "../components";
import {
  TicketAttachments,
  TicketDetails,
  TicketsDetailsLoader,
  TicketComments,
} from "../features/Ticket";
import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import { supabase } from "../libs/supabaseClient";
import TicketsHistory from "../features/Ticket/components/TicketsHistory";

const options = [
  {
    key: "Project",
    text: "Project",
    to: "/",
  },
];

// Add commentsQuery and filter using userId and ticketId
const Ticket = () => {
  const { id: ticketId } = useParams();
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

  if (ticketsError) console.log(ticketsError);

  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs optionsData={options} />
      </nav>
      <section className="w-[90%] mx-auto grid grid-cols-2 pt-12 gap-12 ">
        <TicketDetails
          ticket={!!tickets && tickets[0]}
          ticketsLoading={ticketsLoading}
          ticketsError={ticketsError}
        />

        <TicketAttachments
          ticketId={ticketId}
          attachments={{
            data: attachments,
            error: attachmentsError,
            loading: attachmentsLoading,
          }}
        />

        <TicketComments
          ticketId={ticketId}
          comments={{
            data: comments,
            error: commentsError,
            loading: commentsLoading,
          }}
        />
      </section>

      <section className="w-[90%] mx-auto pt-12 gap-12 ">
        <TicketsHistory
          ticketHistoryData={{
            data: ticketHistory,
            error: ticketHistoryError,
            loading: ticketHistoryLoading,
          }}
        />
      </section>
    </main>
  );
};
export default Ticket;
