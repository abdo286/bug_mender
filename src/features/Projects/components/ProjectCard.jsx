import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const navigate = useNavigate();
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
      <figure>
        <img
          src="https://cdn.dribbble.com/users/5994307/screenshots/16482764/media/e8642c4b4d8f16ca3db158848e615c47.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Bug Tracker</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          itaque consectetur qui rem nemo molestias ducimus. Porro, numquam
          praesentium quae doloribus eaque illum? Inventore dolores, doloremque
          fuga perferendis adipisci suscipit?
        </p>
        <section className="flex flex-col gap-3 mt-6">
          <p>
            <span className="font-medium mr-1">Priority:</span>
            <span className="text-gray-800"> High</span>
          </p>
          <p>
            <span className="font-medium mr-1">Created:</span>
            <span className="text-gray-800">Mar 20 2022</span>
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
              navigate("/projects/5");
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
