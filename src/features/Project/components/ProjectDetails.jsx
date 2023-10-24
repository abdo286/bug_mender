import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { supabase } from "../../../libs/supabaseClient";
import { DeleteTableRowDialog } from "../../../components";

const ProjectDetails = ({ project }) => {
  const { name, description } = project[0];
  const navigate = useNavigate();

  const handleDelete = async () => {
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", project[0].id);
    if (error) {
      console.log(error);
      toast("There was an error deleting project");
      return;
    }
    toast("project was deleted successfully");
    navigate("/projects");
  };
  return (
    <div className="bg-white text-gray-600 px-6 py-5 flex flex-col gap-6 shadow-sm hover:shadow-md transition-all duration-100 ease-in-out rounded-md">
      <div>
        <h2 className="text-xl font-medium mb-1">{name}</h2>
        <p>{description}</p>{" "}
      </div>
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="mb-1 font-medium">Project Status: </p>
        <div className="flex items-center justify-center sm:justify-end">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary "
            style={{ "--value": Number(50) }}
          >
            {50}%
          </div>
        </div>
      </section>{" "}
      <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-5 mb-2">
        <button
          className="bg-[#f03e3e] text-white px-3 py-1 rounded-md text-sm shadow-smd cursor-pointer hover:brightness-95 transition-all ease-in-out duration-100"
          onClick={() => {
            navigate(`/create-project/${project[0].id}`);
          }}
        >
          Edit Project
        </button>
        <button
          className="bg-[#f03e3e] text-white px-3 py-1 rounded-md text-sm shadow-smd cursor-pointer hover:brightness-95 transition-all ease-in-out duration-100"
          onClick={() => document.getElementById("deleteRomModal").showModal()}
        >
          Delete Project
        </button>
        <DeleteTableRowDialog
          rowId={project.id}
          rowType="project"
          handleDelete={handleDelete}
        />
      </footer>
    </div>
  );
};

export default ProjectDetails;
