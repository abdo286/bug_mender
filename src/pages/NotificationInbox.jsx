import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components";

const NotificationInbox = () => {
  return (
    <section>
      <div className="mt-3">
        <Breadcrumbs />
      </div>
      <div className="w-[90%] mx-auto mt-12 ">
        <h2 className="text-xl mb-10">Notifications</h2>
        <div className="flex flex-col gap-6">
          <section className="flex items-center gap-5 bg-white px-6 py-2 shadow-sm rounded-md">
            <div className="w-12 h-12">
              <img
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                alt="notification sender"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-gray-600 text-sm">
              <h3>
                You have been assigned to ticket{" "}
                <Link
                  to="tickets"
                  className="text-blue-500 font-medium underline cursor-pointer"
                >
                  Id 33
                </Link>{" "}
                by
                <span> John Michael</span>
                <span> - </span>
                <Link
                  to="/projects/5"
                  className="text-blue-500 font-medium underline cursor-pointer"
                >
                  BugTracker{" "}
                </Link>
              </h3>
              <p className="text-xs">5 hours ago</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default NotificationInbox;
