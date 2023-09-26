import { createContext, useContext, useEffect } from "react";
import { useAuth, useFetchUser } from "../components/hooks";
import { supabase } from "../libs/supabaseClient";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { session } = useAuth();
  const { data, error, loading, getData } = useFetchUser();

  useEffect(() => {
    if (session) {
      const query = async () => {
        return supabase
          .from("profiles")
          .select("*")
          .eq("email", session.user.email);
      };
      getData(query);
    }
  }, [session, getData]);

  return (
    <AuthContext.Provider
      value={{ session, userProfile: { data, error, loading } }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default useAuthContext;
