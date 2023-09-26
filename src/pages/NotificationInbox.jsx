import { Breadcrumbs } from "../components";
import { nanoid } from "nanoid";
import { Notification } from "../features/NotificationInbox";

const options = [
  {
    key: nanoid(),
    text: "Notifications ",
    to: "/notification-inbox",
  },
];

const NotificationInbox = () => {
  return (
    <section>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <div className="w-[90%] mx-auto mt-12 ">
        <h2 className="text-xl mb-10">Notifications</h2>
        <div className="flex flex-col gap-6">
          <Notification />
        </div>
      </div>
    </section>
  );
};
export default NotificationInbox;
