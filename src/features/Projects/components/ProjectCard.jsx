const ProjectCard = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1511954766786-1f88f53fb528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1251&q=80"
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
          <button className=" btn bg-[#339af0] text-gray-100 hover:bg-[#228be6]  ">
            View
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
