import { FaRegUserCircle } from "react-icons/fa";
export const data = [
  {
    name: "user33",
    about: "user 33 ",
    email: "user33@gmail.com",
    role: "admin",
    projects: ["3333333", "555555", "454666566"],
    image: "",
    created: "23/7/2023",
    updated: "23/7/2023",
  },
];

export const state = {
  columns: [
    {
      title: "Avatar",
      dataIndex: "image",
      key: "image",
      // className:
      //   "max-w-[10rem] min-w-[10rem] text-gray-800 font-medium text-sm",
      render(image) {
        if (image) {
          return <p className="text-gray-800 font-medium text-sm">{image}</p>;
        }
        return (
          <p className="text-gray-800 font-medium text-2xl pl-3">
            <FaRegUserCircle />
          </p>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      className:
        "max-w-[10rem] min-w-[10rem] text-gray-800 font-medium text-sm",
    },
    {
      title: "Projects",
      dataIndex: "projects",
      key: "projects",
      render(projects) {
        return (
          <p className="text-gray-800 font-medium text-sm">{projects.length}</p>
        );
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      className:
        "max-w-[10rem] min-w-[10rem] text-gray-600 font-medium text-sm border-2 border-gray-500",
    },
  ],
};
//
//   columns: [
//     {
//       title: "Title",
//       dataIndex: "title",
//       key: "title",
//       className:
//         "max-w-[10rem] min-w-[10rem] text-gray-800 font-medium text-sm",
//     },
//     {
//       title: "Priority",
//       dataIndex: "priority",
//       key: "priority",
//       render(priority) {
//         let priorityClass = "";
//         if (priority === "low") {
//           priorityClass = "bg-green-600";
//         } else if (priority === "medium") {
//           priorityClass = "bg-yellow-600";
//         } else if (priority === "high") {
//           priorityClass = "bg-red-600";
//         }
//         return (
//           <div className="flex justify-start items-center">
//             <span
//               className={`border-2 rounded-2xl px-4 py-1 font-bold text-white shadow tracking-wider text-sm ${priorityClass} `}
//             >
//               {priority}
//             </span>
//           </div>
//         );
//       },
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render(status) {
//         let statusClass = "";
//         if (status === "New") {
//           statusClass = "bg-blue-600";
//         } else if (status === "Development") {
//           statusClass = "bg-yellow-600";
//         } else if (status === "Resolved") {
//           statusClass = "bg-green-600";
//         }
//         return (
//           <div className="flex justify-start items-center">
//             <span
//               className={`border-2 rounded-2xl px-4 py-1 font-bold text-white shadow tracking-wider text-sm ${statusClass} `}
//             >
//               {status}
//             </span>
//           </div>
//         );
//       },
//     },
//     {
//       title: "Project Title",
//       dataIndex: "projectTitle",
//       key: "projectTitle",
//       render(projectTitle) {
//         return (
//           <div className="flex justify-start items-center">
//             <span className="px-4 py-1 font-bold tracking-wider text-sm">
//               {projectTitle}
//             </span>
//           </div>
//         );
//       },
//     },
//     {
//       title: "Type",
//       dataIndex: "type",
//       key: "type",
//       render(type) {
//         return (
//           <div className="flex justify-start items-center">
//             <span className="px-4 py-1 font-bold tracking-wider text-sm">
//               {type}
//             </span>
//           </div>
//         );
//       },
//     },
//     {
//       title: "Assigned To",
//       dataIndex: "assignedTo",
//       key: "assignedTo",
//       render(type) {
//         return (
//           <div className="flex justify-start items-center">
//             <span className="px-4 py-1 font-bold tracking-wider text-sm">
//               {type}
//             </span>
//           </div>
//         );
//       },
//     },
//     {
//       title: "Submitted By",
//       dataIndex: "submittedBy",
//       key: "submittedBy",
//       render(type) {
//         return (
//           <div className="flex justify-start items-center">
//             <span className="px-4 py-1 font-bold tracking-wider text-sm">
//               {type}
//             </span>
//           </div>
//         );
//       },
//     },
//     {
//       title: "Actions",
//       dataIndex: "",
//       key: "actions",
//       width: "fit-content",
//       render() {
//         return (
//           <devi className="flex items-center gap-4 justify-start">
//             <BiShow className="text-xl text-gray-500 cursor-pointer " />
//             <LuEdit className="text-xl text-blue-500 cursor-pointer " />
//             <RiDeleteBin7Line className="text-xl text-red-500 cursor-pointer  " />
//           </devi>
//         );
//       },
//     },
//   ],
