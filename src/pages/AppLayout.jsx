import { Header } from "../features/Header";
import { Sidebar } from "../features/Sidebar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <section className="grid grid-cols-[17fr_83fr] items-center py-6 ">
      <section>
        <Sidebar />
      </section>

      <section>
        <Header />
        <Outlet />
      </section>
    </section>
  );
};
export default AppLayout;
