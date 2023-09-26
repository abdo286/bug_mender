import { Breadcrumbs, MainHeader, Table } from "../components";
import { TicketsCards, TicketsStats } from "../features/Tickets";
import { useState } from "react";
import { data, state } from "../features/Tickets/constants/TicketsData";
import { nanoid } from "nanoid";
import useFetch from "../components/hooks/useFetch";
import { supabase } from "../libs/supabaseClient";

const options = [
  {
    key: nanoid(),
    text: "tickets",
    to: "/tickets",
  },
];

const query = async () => {
  return supabase
    .from("tickets")
    .select(
      `createdAt, id, name, description, type, priority, status, assignedTo, createdBy, projects (id, name, description, description, status)`
    );
};

const Tickets = () => {
  const { data: tickets, error, loading } = useFetch(query);

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
            <section className=" bg-white shadow-md px-10 py-6 mt-16 ">
              <h2 className="text-2xl font-medium">Tickets</h2>
              {view === "table" ? (
                <Table data={data} state={state} className="mt-12" />
              ) : (
                <div className="mt-8 px-10 rounded-md py-6">
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
// className="bg-white mx-16   "
