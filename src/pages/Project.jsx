import { nanoid } from "nanoid";
import { Breadcrumbs } from "../components";
import {
  ProjectDetails,
  ProjectTeam,
  ProjectTickets,
} from "../features/Project";
import { useParams } from "react-router-dom";

const options = [
  {
    key: "projects",
    text: `projects`,
    to: "/projects",
  },
];

const Project = () => {
  const { id } = useParams();

  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={[
            ...options,
            {
              key: nanoid(),
              text: id,
              to: `.`,
            },
          ]}
        />
      </nav>
      <section className="w-[90%] mx-auto pt-12 gap-12 grid grid-cols-[30fr_70fr] ">
        <div>
          <ProjectDetails />
          <ProjectTeam />
        </div>
        <ProjectTickets />
      </section>
    </main>
  );
};
export default Project;
