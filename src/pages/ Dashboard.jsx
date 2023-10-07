import { Breadcrumbs, TableSection } from "../components";
import {
  CompanyData,
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

const options = [
  {
    key: "Dashboard",
    text: "Dashboard",
    to: "/",
  },
];

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
  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs optionsData={options} />
      </nav>

      <section className="w-[90%] mx-auto mt-12 grid ">
        <TicketsStats />

        <section className="grid grid-cols-4 mt-12 mb-8 gap-9">
          <UserStats />
          <CompanyData />
          <PriorityProjects />
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
