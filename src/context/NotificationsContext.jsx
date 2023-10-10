import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useFetchUser } from "../components/hooks";
import { supabase } from "../libs/supabaseClient";
import PropTypes from "prop-types";

const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [profileId, setProfileId] = useState(null);
  const { data: notifications, error, loading, getData } = useFetchUser();

  useEffect(() => {
    if (profileId) {
      const query = async () => {
        return supabase
          .from("notifications")
          .select("*")
          .eq("userId", profileId);
      };
      getData(query);
    }
  }, [profileId, getData]);

  const value = useMemo(() => {
    return { notifications, error, loading, setProfileId };
  }, [notifications, error, loading]);

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};

const useNotificationsContext = () => {
  return useContext(NotificationsContext);
};

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default useNotificationsContext;
