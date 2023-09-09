import { forwardRef } from "react";
import { Notification } from "../../NotificationInbox";

const Notifications = forwardRef(function Notifications(
  { setShowNotifications },
  ref
) {
  return (
    <div
      className="mx-auto mt-5 absolute translate-y-1 -left-48 shadow-md rounded-md"
      ref={ref}
    >
      <div className="flex flex-col gap-1 w-[20rem] bg-white py-1 px-1 rounded-md">
        <Notification shouldShowImage={false} />
        <Notification shouldShowImage={false} />
        <Notification shouldShowImage={false} />
      </div>
    </div>
  );
});
export default Notifications;
