import { useEffect, useMemo, useState } from "react";
import useNotificationsContext from "../../../context/NotificationsContext";

const useNotificationsData = (userId) => {
  const { notifications, error, loading, setProfileId } =
    useNotificationsContext();

  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    if (userId) setProfileId(userId);
  }, [userId, setProfileId]);

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
