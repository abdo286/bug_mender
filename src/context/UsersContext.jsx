import { createContext, useContext, useMemo } from "react";
import { useFetch } from "../components/hooks";
import { supabase } from "../libs/supabaseClient";

const UsersContext = createContext();

const query = async () => {
  return supabase.from("profiles").select();
};
export const UsersContextProvider = ({ children }) => {
  const { data, error, loading } = useFetch(query);

  const value = useMemo(() => {
    return { users: data || [], usersError: error, usersLoading: loading };
  }, [data, error, loading]);
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

const useUsersContext = () => {
  return useContext(UsersContext);
};

export default useUsersContext;
