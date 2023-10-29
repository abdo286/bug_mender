import { forwardRef, useEffect } from "react";
import { Notification } from "../../NotificationInbox";
import PropTypes from "prop-types";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";
import useNotificationsContext from "../../../context/NotificationsContext";
import useAuthContext from "../../../context/AuthContext";

const Notifications = forwardRef(function Notifications(
  { setShowNotifications },
  ref
) {
  const { userProfile } = useAuthContext();
  const userId = userProfile?.data?.id;

  const { notifications, error, loading, setProfileId } =
    useNotificationsContext();

  useEffect(() => {
    if (userId) setProfileId(userId);
  }, [userId, setProfileId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, setShowNotifications]);

  return (
    <section className="mx-auto mt-5 absolute translate-y-1 -left-48 shadow-md rounded-md">
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <ul className="flex flex-col gap-1 w-[20rem] bg-white py-1 px-1 rounded-md">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <li className="notification" key={notification.id}>
                <Notification notification={notification} />
              </li>
            ))
          ) : (
            <div className="h-36 grid place-items-center text-sm text-gray-600">
              <p>You don&lsquo;t have Notification</p>
            </div>
          )}
        </ul>
      )}
    </section>
  );
});

Notifications.propTypes = {
  setShowNotifications: PropTypes.func,
  ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
export default Notifications;
