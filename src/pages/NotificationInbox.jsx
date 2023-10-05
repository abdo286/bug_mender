import { Breadcrumbs, Loading, Error } from "../components";
import { Notification } from "../features/NotificationInbox";
import useAuthContext from "../context/AuthContext";
import { useCallback, useMemo, useState } from "react";
import { supabase } from "../libs/supabaseClient";
import { useFetch } from "../components/hooks";

const options = [
  {
    key: "Notifications",
    text: "Notifications",
    to: "/notification-inbox",
  },
];

const NotificationInbox = () => {
  const { userProfile } = useAuthContext();

  const query = useCallback(async () => {
    return supabase
      .from("notifications")
      .select()
      .eq("userId", userProfile?.data?.id || 0);
  }, [userProfile?.data?.id]);

  const { data: notifications, error, loading } = useFetch(query);

  const [selectedType, setSelectedType] = useState("");

  const types = useMemo(() => {
    if (!notifications) return null;
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

  return (
    <main>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[90%] mx-auto mt-12">
        <h2 className="text-xl mb-10">Notifications</h2>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <label htmlFor="type-select">Sort by type:</label>
            <select
              id="type-select"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error && (
            <ul className="list-none">
              {sortedNotifications.map((notification) => (
                <li key={notification.id}>
                  <Notification notification={notification} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
};

export default NotificationInbox;
