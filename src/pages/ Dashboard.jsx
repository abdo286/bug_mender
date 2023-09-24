import { nanoid } from "nanoid";
import { Breadcrumbs, RTable, RcTable, Table } from "../components";
import {
  CompanyData,
  TicketsStats,
  UserStats,
  PriorityProjects,
  RolesByProjects,
  membersData,
  membersState,
  MembersTable,
} from "../features/Dashboard";
import { data, state } from "../features/Projects/constants/ProjectsData";
import {
  data as TicketsData,
  state as TicketsState,
} from "../features/Tickets/constants/TicketsData";

const options = [
  {
    key: nanoid(),
    text: "Dashboard",
    to: "/",
  },
];

const Dashboard = () => {
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[90%] mx-auto mt-12 grid ">
        <TicketsStats />
        <section className="grid grid-cols-4 mt-12 mb-8  gap-9">
          <UserStats />
          <CompanyData />
          <PriorityProjects />
          <RolesByProjects />
        </section>
        <section className="grid grid-cols-[40fr_60fr] gap-8 w-full">
          <section className="bg-white px-10 py-6 mt-8">
            <Table
              data={membersData}
              state={membersState}
              title={"Members"}
              sortByColor="bg-white"
            />
          </section>
          <section className="bg-white px-10 py-6 mt-8">
            <Table
              data={data}
              state={state}
              title={"Projects"}
              sortByColor="bg-white"
            />
          </section>
        </section>{" "}
        <section className="bg-white px-10 py-6 mt-16">
          <Table data={TicketsData} state={TicketsState} title={"Tickets"} />
        </section>
        <section className="mt-16">
          <RTable />
        </section>
      </section>{" "}
    </div>
  );
};
export default Dashboard;
