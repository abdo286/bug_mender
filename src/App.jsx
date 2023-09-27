import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./context/AuthContext";
import { UsersContextProvider } from "./context/UsersContext";
import { TicketsContextProvider } from "./context/TicketsContext";
import { ProjectsContextProvider } from "./context/ProjectsContext";
import "react-quill/dist/quill.snow.css";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <UsersContextProvider>
          <TicketsContextProvider>
            <ProjectsContextProvider>
              <RouterProvider router={router} />
            </ProjectsContextProvider>
          </TicketsContextProvider>
        </UsersContextProvider>
      </AuthProvider>
    </div>
  );
};
export default App;
