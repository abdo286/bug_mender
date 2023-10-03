import { Breadcrumbs, MainHeader, RTable } from "../components";
import { TicketsCards, TicketsStats } from "../features/Tickets";
import { useState } from "react";
import { nanoid } from "nanoid";
import RTableColumns from "../features/Tickets/data/RTableColumns";
import useTicketsContext from "../context/TicketsContext";

const options = [
  {
    key: nanoid(),
    text: "tickets",
    to: "/tickets",
  },
];



const Tickets = () => {
  const { tickets, error, loading } = useTicketsContext();

  const [view, setView] = useState("grid");

  if (error) console.log(error);
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[90%] mx-auto">
        <section>
          <MainHeader
            view={view}
            setView={setView}
            text="Ticket"
            path="/create-ticket"
          />
        </section>
        <div>
          <div className="px-10 pt-16">
            <TicketsStats />
          </div>
          {loading ? (
            <section>loading...</section>
          ) : error ? (
            <section>There was an error</section>
          ) : (
            <section className="px-10 py-6 mt-16">
              <h2 className="text-2xl font-medium">Tickets</h2>
              {view === "table" ? (
                <div className="mt-12">
                  <RTable columns={RTableColumns} data={tickets} />
                </div>
              ) : (
                <div className="mt-8 px-10 rounded-md py-6 bg-white shadow-md">
                  <TicketsCards tickets={tickets} />
                </div>
              )}
            </section>
          )}
        </div>
      </section>
    </div>
  );
};
export default Tickets;

// Status: New, Development, Resolved
// Priority: Hight, Medium, Low
