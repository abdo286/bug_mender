import { Breadcrumbs, MainHeader, TableSection } from "../components";
import { TicketsCards, TicketsStats } from "../features/Tickets";
import { useState } from "react";
import RTableColumns from "../features/Tickets/data/RTableColumns";
import useTicketsContext from "../context/TicketsContext";

const Tickets = () => {
  const { tickets, error, loading } = useTicketsContext();

  const [view, setView] = useState("grid");

  if (error) console.log(error);
  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={{
            key: "tickets",
            text: "tickets",
            to: "/tickets",
          }}
        />
      </nav>
      <section className="w-[90%] mx-auto">
        
        <MainHeader
          view={view}
          setView={setView}
          text="Ticket"
          path="/create-ticket"
        />
        <section>
          <div className="px-10 pt-16">
            <TicketsStats />
          </div>

          {view === "table" ? (
            <TableSection
              title="Tickets"
              columns={RTableColumns}
              data={tickets}
              loading={loading}
              error={error}
            />
          ) : (
            <TicketsCards tickets={tickets} loading={loading} error={error} />
          )}
        </section>
      </section>
    </main>
  );
};
export default Tickets;
