import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  AppLayout,
  HomePage,
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
} from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="notification-inbox" element={<NotificationInbox />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:id" element={<Project />} />
      <Route path="tickets" element={<Tickets />} />
      <Route path="tickets/:id" element={<Ticket />} />
      <Route path="create-project" element={<CreateProject />} />
      <Route path="create-ticket" element={<CreateTicket />} />
      <Route path="admin" element={<Admin />} />
      <Route path="account" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
