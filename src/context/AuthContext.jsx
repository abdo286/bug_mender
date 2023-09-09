import { createContext, useContext } from "react";
import { useAuth } from "../components/hooks";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { session } = useAuth();

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
