import { Breadcrumbs } from "../components";
import {
  Comments,
  TicketAttachments,
  TicketComments,
  TicketDetails,
  TicketHistory,
} from "../features/Ticket";

const Ticket = () => {
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs />
      </div>
      <section className="w-[90%] mx-auto grid grid-cols-2 pt-12  gap-12  ">
        <TicketDetails />
        <TicketHistory />
        <TicketAttachments />
        <div>
          <TicketComments />
          <Comments />
        </div>
      </section>
    </div>
  );
};
export default Ticket;
{
  /* <div className="bg-white mt-16 px-10 py-12">
  <TicketsStats />
  <section>
    <Table data={data} state={state} title={"Tickets"} />;
  </section>
</div>; */
}
