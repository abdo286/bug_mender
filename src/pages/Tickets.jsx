import { Breadcrumbs, MainHeader, Table } from "../components";
import { TicketsStats } from "../features/Tickets";
import { useState } from "react";
import { data, state } from "../features/Tickets/constants/TicketsData";
import { nanoid } from "nanoid";

const options = [
  {
    key: nanoid(),
    text: "tickets",
    to: "/tickets",
  },
];  

const Tickets = () => {
  const [view, setView] = useState("table");
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[90%] mx-auto">
        <section>
          <MainHeader view={view} setView={setView} text="Ticket" path="/create-ticket" />
        </section>
        <div>
          <div className="px-10 pt-16">
            <TicketsStats />
          </div>
          <section className="mt-16 px-10 py-3 bg-white shadow-md rounded-md">
            <Table
              data={data}
              state={state}
              title={"Tickets"}
              className="mt-12"
            />
            ;
          </section>
        </div>
      </section>
    </div>
  );
};
export default Tickets;

// Status: New, Development, Resolved
// Priority: Hight, Medium, Low
// className="bg-white mx-16   "
