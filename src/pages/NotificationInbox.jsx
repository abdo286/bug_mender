import { Breadcrumbs } from "../components";
import { Error, Loading } from "../components";
import { Notification } from "../features/NotificationInbox";
import useAuthContext from "../context/AuthContext";
import useNotificationsData from "../features/NotificationInbox/hooks/useNotificationsData";

const NotificationInbox = () => {
  const { userProfile } = useAuthContext();

  const {
    notifications,
    error,
    loading,
    selectedType,
    setSelectedType,
    types,
  } = useNotificationsData(userProfile?.data?.id);

  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={{
            key: "Notifications",
            text: "Notifications",
            to: "/notification-inbox",
          }}
        />
      </nav>
      <section className="w-[90%] mx-auto pt-12">
        <h2 className="text-xl mb-10">Notifications</h2>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <label htmlFor="type-select">Sort by type:</label>

            <select
              id="type-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="select select-bordered w-full max-w-xs  "
            >
              <option value="">All types</option>
              {types.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="hover:text-[#f6ad55]"
                >
                  {type}
                </option>
              ))}
            </select>
          </div>
          {loading && <Loading />}
          {(!userProfile?.data?.id || error) && <Error />}
          {!loading && !error && (
            <ul className="list-none flex flex-col gap-5">
              {notifications.map((notification) => (
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
