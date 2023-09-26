import RolesByProjectsBarChart from "./RolesByProjectsBarChart";

const RolesByProjects = () => {
  return (
    <div className="bg-white py-6 px-5 flex flex-col rounded-md shadow-sm hover:shadow-md transition-all duration-150 ease-in-out">
      <div>
        <h3 className="font-medium mb-1">Roles By Projects</h3>
        <section className="flex gap-5 text-sm text-gray-800">
          <div className="flex items-center gap-1 ">
            <div className="bg-[#94d82d] w-3  h-3 border-2"></div>
            <p>Submitter</p>
          </div>
          <div className="flex items-center gap-1 ">
            <div className="bg-[#ffd43b] w-3  h-3 border-2"></div>
            <p>Developer</p>
          </div>
          <div className="flex items-center gap-1 ">
            <div className="bg-[#c0eb75] w-3  h-3 border-2"></div>
            <p>PMS</p>
          </div>
        </section>
      </div>
      <div className="w-full h-full">
        <RolesByProjectsBarChart />
      </div>
    </div>
  );
};
export default RolesByProjects;
