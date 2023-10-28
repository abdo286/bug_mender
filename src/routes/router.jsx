import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AppLayout, Error, NotFound } from "../pages";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const NotificationInbox = lazy(() => import("../pages/NotificationInbox"));
const Projects = lazy(() => import("../pages/Projects"));
const Project = lazy(() => import("../pages/Project"));
const Tickets = lazy(() => import("../pages/Tickets"));
const Ticket = lazy(() => import("../pages/Ticket"));
const CreateProject = lazy(() => import("../pages/CreateProject"));
const CreateTicket = lazy(() => import("../pages/CreateTicket"));
const Admin = lazy(() => import("../pages/Admin"));
const AdminProjectRoles = lazy(() => import("../pages/AdminProjectRoles"));
const Account = lazy(() => import("../pages/Account"));
const Auth = lazy(() => import("../pages/Auth"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));

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
        <Route
          path="create-ticket/history/:historyId"
          element={<CreateTicket />}
        />
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
