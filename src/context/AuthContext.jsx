import { createContext, useContext, useEffect, useCallback } from "react";
import { useAuth, useFetchUser } from "../components/hooks";
import { supabase } from "../libs/supabaseClient";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { session } = useAuth();

  const query = useCallback(async () => {
    return supabase
      .from("profiles")
      .select("*")
      .eq("email", session.user.email);
  }, [session?.user?.email]);

  const { data, error, loading, getData } = useFetchUser({
    query,
    tableName: "profiles",
    profileId: session?.user?.email,
  });

  useEffect(() => {
    if (session) {
      getData(query);
    }
  }, [session, getData, query]);

  return (
    <AuthContext.Provider
      value={{
        session,
        userProfile: { data: data ? data[0] : null, error, loading },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default useAuthContext;
