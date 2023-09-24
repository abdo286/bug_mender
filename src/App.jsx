import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./context/AuthContext";
import { UsersContextProvider } from "./context/UsersContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <UsersContextProvider>
          <RouterProvider router={router} />
        </UsersContextProvider>
      </AuthProvider>
    </div>
  );
};
export default App;
