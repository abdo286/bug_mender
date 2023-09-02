import { useState } from "react";
import { Header } from "../features/Header";
import { Sidebar } from "../features/Sidebar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  const [shouldShowSidebar, setShouldHideSidebar] = useState(false);
  return (
    <section className="h-[200rem] relative grid grid-rows-[auto,1fr]">
      <Header setShouldHideSidebar={setShouldHideSidebar} />
      <section className={`grid grid-cols-[17fr_83fr] items-start`}>
        <div>
          <Sidebar />
        </div>
        <Outlet />
      </section>
    </section>
  );
};
export default AppLayout;
