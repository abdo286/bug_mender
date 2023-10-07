import PropTypes from "prop-types";
import TeamMember from "./TeamMember";

const ProjectTeam = ({ projectTeam }) => {
  const projectManager = projectTeam.find(
    (member) => member.role === "project_manager"
  );
  const developers = projectTeam.filter(
    (member) => member.role !== "project_manager"
  );

  return (
    <div className="mt-12 bg-white px-5 py-3 rounded-md shadow-sm">
      <h2 className="font-medium text-xl mb-2">Project Team</h2>
      <p className="text-sm text-gray-600 mb-4">
        {projectTeam.length} team members
      </p>

      {projectManager && (
        <section className="mt-6 mb-12">
          <h3 className="font-medium text-lg mb-3">Project Manager</h3>
          <TeamMember member={projectManager} />
        </section>
      )}

      <section>
        <h3 className="font-medium text-lg mb-3 ">Developers</h3>
        <div className="space-y-12 max-h-[20rem] overflow-auto project-team-scrollbar">
          {developers.map((member) => (
            <TeamMember key={member.userId} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

ProjectTeam.propTypes = {
  projectTeam: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      profiles: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        image: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default ProjectTeam;


