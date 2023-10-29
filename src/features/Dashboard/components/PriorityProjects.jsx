import { useMemo } from "react";
import { PriorityProjectsPIeChart } from "..";
import Error from "../../../components/Error";
import Loading from "../../../components/Loading";

const PriorityProjects = ({ data, loading, error }) => {
  const priorityCounts = useMemo(() => {
    if (!loading && !error) {
      const counts = {};
      data.forEach((project) => {
        const priority = project.priority;
        counts[priority] = counts[priority] ? counts[priority] + 1 : 1;
      });
      const priorityCounts = Object.entries(counts).map(([name, value]) => ({
        name,
        value,
      }));
      return priorityCounts;
    }
    return null;
  }, [data, loading, error]);

  return (
    <div className="bg-white py-6 px-5 flex flex-col rounded-md shadow-sm hover:shadow-md transition-all duration-150 ease-in-out">
      <div>
        <h3 className="font-medium">Priority Projects</h3>
        <p className="text-gray-500 text-xs">Project Priorities</p>
      </div>
      <div className="w-full h-full">
        {error ? (
          <Error />
        ) : loading ? (
          <Loading />
        ) : (
          <PriorityProjectsPIeChart data={priorityCounts} />
        )}
      </div>
    </div>
  );
};
export default PriorityProjects;
