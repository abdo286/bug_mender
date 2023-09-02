import { useState } from "react";
import { Header } from "../features/Header";
import { Sidebar } from "../features/Sidebar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  const [shouldShowSidebar, setShouldHideSidebar] = useState(true);
  return (
    <section className="h-[200rem] relative grid grid-rows-[auto,1fr] border-box">
      <Header setShouldHideSidebar={setShouldHideSidebar} />

      {shouldShowSidebar ? (
        <section
          className={`grid grid-cols-[17fr_83fr] items-start !w-full !ml-0`}
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
  );
};
export default AppLayout;
