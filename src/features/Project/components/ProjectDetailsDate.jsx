import { format } from "date-fns";

const ProjectDetailsDate = ({ project }) => {
  const { createdAt, deadline, priority, status } = project[0];
  return (
    <div className="bg-white px-6 flex flex-col gap-5 py-5 text-sm self-start">
      <p className="flex items-center justify-between">
        <span className="font-medium ">Created </span>
        <span className="text-gray-500">
          {format(new Date(createdAt), "yyyy-MM-dd")}
        </span>
      </p>
      <p className="flex items-center justify-between">
        <span className="font-medium">Deadline </span>
        <span className="text-gray-500">
          {deadline ? format(new Date(deadline), "yyyy-MM-dd") : ""}
        </span>
      </p>
      <p className="flex items-center justify-between">
        <span className="font-medium">Priority </span>
        <span className="text-gray-500">{priority}</span>
      </p>
      <p className="flex items-center justify-between">
        <span className="font-medium">Status </span>
        <span className="text-gray-500">{status}</span>
      </p>
    </div>
  );
};

export default ProjectDetailsDate;
