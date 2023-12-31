import { useEffect, useState } from "react";
import { Header } from "../features/Header";
import { Sidebar } from "../features/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useResponsiveContext from "../context/ResponsiveContext";

const AppLayout = () => {
  const [shouldShowSidebar, setShouldHideSidebar] = useState(true);
  const { pathname } = useLocation();
  const { isXl } = useResponsiveContext();

  const { session } = useAuthContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (session) toast.success(`Welcome Back`);
  }, [session]);

  if (!session) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <ToastContainer position="top-center" />
      <section className="relative xl:grid xl:grid-rows-[auto,1fr] border-box ">
        <Header
          setShouldHideSidebar={setShouldHideSidebar}
          user={{
            created_at: session.user.created_at,
            email: session.user.email,
            id: session.user.id,
            updated_at: session.user,
            last_sign_in_at: session.user.last_sign_in_at,
          }}
        />

        {isXl && shouldShowSidebar ? (
          <section className={`grid grid-cols-[17fr_83fr] !w-full !ml-0 `}>
            <Sidebar />
            <Outlet />
          </section>
        ) : isXl ? (
          <div className={`grid w-full ml-auto relative`}>
            <Outlet />
          </div>
        ) : (
          <div className={`grid w-[100vw] ml-auto relative`}>
            <Sidebar />
            <Outlet />
          </div>
        )}
      </section>
    </>
  );
};
export default AppLayout;
// &&
