import { useNavigate } from "react-router-dom";
import { parseISO, format } from "date-fns";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="card card-compact bg-base-100 shadow-xl max-w-[24rem]">
      <figure>
        <img
          src="https://cdn.dribbble.com/users/5994307/screenshots/16482764/media/e8642c4b4d8f16ca3db158848e615c47.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description}</p>
        <section className="flex flex-col gap-3 mt-6">
          <p>
            <span className="font-medium mr-1">Priority:</span>
            <span className="text-gray-800"> {project.priority}</span>
          </p>
          <p>
            <span className="font-medium mr-1">Created:</span>
            <span className="text-gray-800">
              {format(parseISO(project.createdAt), "MMM dd yyyy")}
            </span>
          </p>
          <p>
            <span className="font-medium mr-1"> Timeline:</span>
            <span className="text-gray-800">Aug 20 2021 - Feb 20 2022</span>
          </p>
        </section>
        <div className="card-actions justify-end mt-6">
          <button
            className=" btn bg-[#339af0] text-gray-100 hover:bg-[#228be6]"
            onClick={() => {
              navigate(`/projects/${project.id}`);
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
