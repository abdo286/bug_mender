import { useCallback, useMemo, useState } from "react";
import { supabase } from "../../../libs/supabaseClient";
import { useFetch } from "../../../components/hooks";

const useNotificationsData = (userId) => {
  const query = useCallback(async () => {
    return supabase
      .from("notifications")
      .select()
      .eq("userId", userId || 0);
  }, [userId]);

  const { data: notifications, error, loading } = useFetch(query);

  const [selectedType, setSelectedType] = useState("");

  const types = useMemo(() => {
    if (!notifications) return [];
    const allTypes = notifications.map((notification) => notification.type);
    return [...new Set(allTypes)];
  }, [notifications]);

  const sortedNotifications = useMemo(() => {
    if (selectedType) {
      const matchingNotifications = notifications.filter(
        (notification) => notification.type === selectedType
      );
      const otherNotifications = notifications.filter(
        (notification) => notification.type !== selectedType
      );
      return [...matchingNotifications, ...otherNotifications];
    } else {
      return notifications;
    }
  }, [notifications, selectedType]);

  return {
    notifications: sortedNotifications,
    error,
    loading,
    selectedType,
    setSelectedType,
    types,
  };
};

export default useNotificationsData;
