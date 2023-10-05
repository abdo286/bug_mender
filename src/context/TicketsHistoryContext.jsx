import { createContext, useContext, useMemo } from "react";
import { useFetch } from "../components/hooks";
import { supabase } from "../libs/supabaseClient";
import PropTypes from "prop-types";

const ticketsHistoryContext = createContext();

const query = async () => {
  return supabase
    .from("ticketsHistory")
    .select(
      `id, name, description, type, priority, status, assignedTo, ticketId, projects (id, name, description, description, status)`
    );
};

export const TicketsHistoryContextProvider = ({ children }) => {
  const { data: ticketsHistory, error, loading } = useFetch(query);
  const value = useMemo(() => {
    return { ticketsHistory, error, loading };
  }, [ticketsHistory, error, loading]);

  return (
    <ticketsHistoryContext.Provider value={value}>
      {children}
    </ticketsHistoryContext.Provider>
  );
};

const useTicketsHistoryContext = () => {
  return useContext(ticketsHistoryContext);
};

TicketsHistoryContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default useTicketsHistoryContext;
