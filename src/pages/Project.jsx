import { Breadcrumbs } from "../components";
import {
  ProjectDetails,
  ProjectTeam,
  ProjectTickets,
} from "../features/Project";
const Project = () => {
  return (
    <div>
      <div>
        <div className="mt-3">
          <Breadcrumbs />
        </div>
        <section className="w-[90%] mx-auto grid grid-cols-2 pt-12  gap-12 grid grid-cols-[30fr_70fr] ">
          <div>
            <ProjectDetails />
            <ProjectTeam />
          </div>
          <ProjectTickets />
        </section>
      </div>
    </div>
  );
};
export default Project;
