import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  AppLayout,
  Dashboard,
  NotificationInbox,
  Projects,
  Tickets,
  Admin,
  CreateProject,
  CreateTicket,
  Account,
  Project,
  Ticket,
  NotFound,
  AdminProjectRoles,
  Error,
  Auth,
  Login,
  SignUp,
} from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />} errorElement={<Error />}>
        <Route index element={<Dashboard />} />
        <Route path="notification-inbox" element={<NotificationInbox />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<Project />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="tickets/:id" element={<Ticket />} />
        <Route path="create-project" element={<CreateProject />} />
        <Route path="create-project/:projectId" element={<CreateProject />} />
        <Route path="create-ticket" element={<CreateTicket />} />
        <Route path="create-ticket/:ticketId" element={<CreateTicket />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/project/:id" element={<AdminProjectRoles />} />
        <Route path="account" element={<Account />} errorElement={<Error />} />
      </Route>
      <Route element={<Auth />} errorElement={<Error />}>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
