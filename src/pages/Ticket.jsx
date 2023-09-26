import { useMemo } from "react";
import { nanoid } from "nanoid";
import { Breadcrumbs, RTable } from "../components";
import {
  TicketAttachments,
  TicketDetails,
  TicketHistory,
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
    key: nanoid(),
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

  if (ticketsError) console.log(ticketsError);

  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
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

        <TicketComments />
      </section>
    </div>
  );
};
export default Ticket;

{
  /* <TicketHistory /> */
}

{
  /* <div className="bg-white mt-16 px-10 py-12">
  <TicketsStats />
  <section>
    <Table data={data} state={state} title={"Tickets"} />;
  </section>
</div>; */
}
