const ProjectsHeader = () => {
  return (
    <div className="bg-white flex items-center justify-between w-[90%] py-5 px-8 mt-12">
      <section>
        <form action="" className="flex gap-16">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Sort By
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="grid-last-name"
            >
              <option value="">Name (A-Z)</option>
              <option value="">Name (Z-A)</option>
              <option value="">Priority</option>
              <option value="">Start Date</option>
              <option value="">End Date</option>{" "}
            </select>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Search
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="grid-first-name"
              type="text"
              placeholder="Search"
            />
          </div>
        </form>
      </section>
      <section>
        <button className="text-sm font-medium bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in-out text-white px-4 py-3 rounded-xl">
          Create Project
        </button>
      </section>
    </div>
  );
};
export default ProjectsHeader;
