import { Header } from "../features/Header";
import { Sidebar } from "../features/Sidebar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <section className="grid grid-cols-[17fr_83fr] items-center py-6 h-screen w-screen overflow-visible">
      <section className="h-full relative ">
        <Sidebar />
      </section>
      <section className="h-full ">
        <Header />
        <Outlet />
      </section>
    </section>
  );
};
export default AppLayout;
