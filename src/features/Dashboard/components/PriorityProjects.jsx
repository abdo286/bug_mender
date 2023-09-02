import { PriorityProjectsPIeChart } from "..";

const PriorityProjects = () => {
  return (
    <div className="bg-white py-6 px-5 flex flex-col rounded-md shadow-sm hover:shadow-md transition-all duration-150 ease-in-out">
      <div>
        <h3 className="font-medium">Priority Projects</h3>
        <p className="text-gray-500 text-xs">Project Priorities</p>
      </div>
      <div className="w-full h-full">
        <PriorityProjectsPIeChart />
      </div>
    </div>
  );
};
export default PriorityProjects;
