import { useEffect, useState } from "react";
import { Header } from "../features/Header";
import { Sidebar } from "../features/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {
  const [shouldShowSidebar, setShouldHideSidebar] = useState(true);
  const { pathname } = useLocation();

  // const { session } = useAuthContext();

  // useEffect(() => {
  //   if (session) toast.success(`Welcome Back`);
  // }, [session]);

  // if (!session) {
  //   return <Navigate to="/login" />;
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ToastContainer position="top-center" />
      <section className="relative grid grid-rows-[auto,1fr] border-box pb-16">
        {/* <Header
          setShouldHideSidebar={setShouldHideSidebar}
          user={{
            created_at: session.user.created_at,
            email: session.user.email,
            id: session.user.id,
            updated_at: session.user,
            last_sign_in_at: session.user.last_sign_in_at,
          }}
        /> */}

        {shouldShowSidebar ? (
          <section
            className={`grid grid-cols-[17fr_83fr] items-start !w-full !ml-0 `}
          >
            <Sidebar />
            <Outlet />
          </section>
        ) : (
          <div className={`grid shouldShowSidebar w-[95%] ml-auto`}>
            <Outlet />
          </div>
        )}
      </section>
    </>
  );
};
export default AppLayout;
