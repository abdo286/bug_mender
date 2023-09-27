import { createContext, useContext, useMemo } from "react";
import { useFetch } from "../components/hooks";
import { supabase } from "../libs/supabaseClient";
import PropTypes from "prop-types";

const TicketsContext = createContext();

const query = async () => {
  return supabase
    .from("tickets")
    .select(
      `createdAt, id, name, description, type, priority, status, assignedTo, createdBy, projects (id, name, description, description, status)`
    );
};

export const TicketsContextProvider = ({ children }) => {
  const { data: tickets, error, loading } = useFetch(query);
  const value = useMemo(() => {
    return { tickets, error, loading };
  }, [tickets, error, loading]);

  return (
    <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>
  );
};

const useTicketsContext = () => {
  return useContext(TicketsContext);
};

TicketsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default useTicketsContext;
