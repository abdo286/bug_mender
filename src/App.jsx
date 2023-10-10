import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./context/AuthContext";
import { UsersContextProvider } from "./context/UsersContext";
import { TicketsContextProvider } from "./context/TicketsContext";
import { ProjectsContextProvider } from "./context/ProjectsContext";
import "react-quill/dist/quill.snow.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import { Loading } from "./pages";
import { NotificationsProvider } from "./context/NotificationsContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <UsersContextProvider>
          <TicketsContextProvider>
            <ProjectsContextProvider>
              <NotificationsProvider>
                <Suspense fallback={<Loading />}>
                  <RouterProvider router={router} />
                </Suspense>
              </NotificationsProvider>
            </ProjectsContextProvider>
          </TicketsContextProvider>
        </UsersContextProvider>
      </AuthProvider>
    </div>
  );
};
export default App;
