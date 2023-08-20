const ProjectDetails = () => {
  return (
    <>
      <div className="bg-white text-gray-600 px-6 py-5 flex flex-col gap-6 shadow-sm hover:shadow-md transition-all duration-100 ease-in-out rounded-md">
        <div>
          <h2 className="text-xl font-medium mb-1">Bug Tracker</h2>
          <p>A custom Designed Nodejs Application with postgres database</p>
        </div>
        <section>
          <p className="mb-1 font-medium">Project Status: </p>
          <div>
            <div
              className="radial-progress bg-primary text-primary-content border-4 border-primary "
              style={{ "--value": 70 }}
            >
              70%
            </div>
          </div>
        </section>{" "}
        <footer className="flex items-center gap-5 justify-end mb-2">
          <button className="bg-[#f03e3e] text-white px-3 py-1 rounded-md text-sm shadow-smd cursor-pointer hover:brightness-95 transition-all ease-in-out duration-100">
            Edit Project
          </button>
          <button className="bg-[#f03e3e] text-white px-3 py-1 rounded-md text-sm shadow-smd cursor-pointer hover:brightness-95 transition-all ease-in-out duration-100">
            Archive Project
          </button>
        </footer>
      </div>
      <div className="bg-white mt-8 px-6 flex flex-col gap-5 py-5 text-sm">
        <p className="flex items-center justify-between">
          <span className="font-medium ">Created </span>
          <span className="text-gray-500">23/6/2022</span>
        </p>
        <p className="flex items-center justify-between">
          <span className="font-medium">Deadline </span>
          <span className="text-gray-500">23/8/2022</span>
        </p>
        <p className="flex items-center justify-between">
          <span className="font-medium">Priority </span>
          <span className="text-gray-500">Low</span>
        </p>
        <p className="flex items-center justify-between">
          <span className="font-medium">Status </span>
          <span className="text-gray-500">Active</span>
        </p>
      </div>
    </>
  );
};
export default ProjectDetails;
