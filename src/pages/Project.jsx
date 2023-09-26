import { nanoid } from "nanoid";
import { Breadcrumbs } from "../components";
import {
  ProjectDetails,
  ProjectTeam,
  ProjectTickets,
} from "../features/Project";

const Project = () => {
  const options = [
    {
      key: nanoid(),
      text: `projects/${30}`,
      to: "/",
    },
  ];

  return (
    <div>
      <div>
        <div className="mt-3">
          <Breadcrumbs optionsData={options} />
        </div>
        <section className="w-[90%] mx-auto pt-12 gap-12 grid grid-cols-[30fr_70fr] ">
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
