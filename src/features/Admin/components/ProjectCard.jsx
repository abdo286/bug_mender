import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="card card-compact max-w-[24rem] shadow-xl bg-[#228be6] text-white">
      <div className="card-body ">
        <h2 className="card-title">{project.name}</h2>
        <p className="lines-5">{project.description}</p>
        <section className="flex flex-col gap-3 mt-6">
          <p>
            <span className="font-medium mr-1">Priority:</span>
            <span className="text-white"> {project.priority}</span>
          </p>
          <p>
            <span className="font-medium mr-1">Created:</span>
            <span className="text-white">
              {" "}
              {format(parseISO(project.createdAt), "MMM dd yyyy")}
            </span>
          </p>
          <p>
            <span className="font-medium mr-1"> Timeline:</span>
            <span className="text-white">Aug 20 2021 - Feb 20 2022</span>
          </p>
        </section>
        <div className="card-actions justify-end mt-6">
          <button
            className=" btn bg-[#CCCCCC] text-gray-600 hover:bg-[#228be6]"
            onClick={() => {
              navigate(`/admin/project/${project.id}`);
            }}
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
