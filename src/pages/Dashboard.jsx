import { Breadcrumbs, TableSection } from "../components";
import {
  TicketsStats,
  UserStats,
  PriorityProjects,
  RolesByProjects,
} from "../features/Dashboard";

import ProjectsRTableColumns from "../features/Projects/data/RTableColumns";
import TicketsRTableColumns from "../features/Tickets/data/RTableColumns";
import useTicketsContext from "../context/TicketsContext";
import useProjectsContext from "../context/ProjectsContext";
import useUsersContext from "../context/UsersContext";
import AccountRTableColumns from "../features/Account/data/RTableColumns";
import getTicketStats from "../features/Dashboard/helpers/getTicketStats";
import getUsersStats from "../features/Dashboard/helpers/getUsersStats";

const Dashboard = () => {
  const {
    tickets,
    error: ticketsError,
    loading: ticketsLoading,
  } = useTicketsContext();
  const {
    projects,
    error: projectsError,
    loading: projectsLoading,
  } = useProjectsContext();

  const { users, usersError, usersLoading } = useUsersContext();
  const {
    unassignedTickets,
    inProgressTickets,
    resolvedTickets,
    totalTickets,
  } = getTicketStats(tickets);
  const { newUsers, totalUsers, totalDevelopers } = getUsersStats(users);

  return (
    <main className="overflow-x-hidden sm:w-[95%]">
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={{
            key: "Dashboard",
            text: "Dashboard",
            to: "/",
          }}
        />
      </nav>

      <section className="sm:w-[95%] md:w-[90%] md:mx-auto mt-12 grid ">
        <TicketsStats
          unsignedTickets={unassignedTickets}
          totalTickets={totalTickets}
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
          loading={ticketsLoading}
          error={ticketsError}
        />

        <section className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-[30fr_35fr] mt-12 mb-8 gap-9">
          <UserStats
            newUsers={newUsers}
            totalUsers={totalUsers}
            developmentTickets={inProgressTickets}
            totalDevelopers={totalDevelopers}
            loading={usersLoading}
            error={usersError}
          />
          {/* <CompanyData /> */}
          {/* <PriorityProjects
            data={projects}
            loading={projectsLoading}
            error={projectsError}
          /> */}
          <RolesByProjects />
        </section>

        <TableSection
          title="Projects"
          columns={ProjectsRTableColumns}
          data={projects}
          loading={projectsLoading}
          error={projectsError}
        />

        <TableSection
          title="Tickets"
          columns={TicketsRTableColumns}
          data={tickets}
          loading={ticketsLoading}
          error={ticketsError}
        />

        <TableSection
          title="Users"
          columns={AccountRTableColumns}
          data={users}
          loading={usersLoading}
          error={usersError}
        />
      </section>
    </main>
  );
};

export default Dashboard;
