import { Breadcrumbs } from "../components";
import {
  TicketAttachments,
  TicketDetails,
  TicketComments,
} from "../features/Ticket";
import { useParams } from "react-router-dom";
import TicketsHistory from "../features/Ticket/components/TicketsHistory";
import Loading from "./Loading";
import NotFound from "./NotFound";
import useTicketData from "../features/Ticket/hooks/useTicketData";

const Ticket = () => {
  const { id: ticketId } = useParams();

  const {
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
  } = useTicketData(ticketId);

  if (ticketsLoading) return <Loading />;
  if (ticketsError || (!ticketsLoading && !tickets[0])) {
    console.log(ticketsError);
    return <NotFound />;
  }

  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={{
            key: "Project",
            text: "Project",
            to: "/",
          }}
        />
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
