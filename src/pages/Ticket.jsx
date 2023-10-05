import { useMemo } from "react";
import { Breadcrumbs, RTable } from "../components";
import {
  TicketAttachments,
  TicketDetails,
  TicketsDetailsLoader,
  TicketComments,
} from "../features/Ticket";
import RTableColumns from "../features/Ticket/data/RTableColumns";
import RTableDummyData from "../features/Ticket/data/RTableDummyData";
import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import { supabase } from "../libs/supabaseClient";

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
        {ticketsLoading ? (
          <TicketsDetailsLoader />
        ) : ticketsError ? (
          <div>
            <p className="text-red-500 font-medium relative top-[25%] left-[15%]">
              There was an Error Loading the Ticket Details
            </p>
          </div>
        ) : (
          <TicketDetails ticket={tickets[0]} />
        )}
        <RTable columns={RTableColumns} data={RTableDummyData} />
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
    </main>
  );
};
export default Ticket;
