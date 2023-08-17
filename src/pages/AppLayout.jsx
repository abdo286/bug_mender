import { Header } from "../features/Header";
import { Sidebar } from "../features/Sidebar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <section className="h-[200rem] relative grid grid-rows-[auto,1fr]">
      <Header />
      <section className="grid grid-cols-[17fr_83fr] items-start">
        <Sidebar />
        <Outlet />
      </section>
    </section>
  );
};
export default AppLayout;
