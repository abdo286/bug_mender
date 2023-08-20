import userImage from "../../../assets/images/userImage.avif";

const ProjectTeam = () => {
  return (
    <>
      <div className="mt-12 bg-white px-5 py-3 rounded-md shadow-sm ">
        <h3 className="font-medium text-lg">Project Team</h3>
        <p className="text-sm text-gray-600">6 team members</p>
        <div className="">
          <div className="flex gap-4 mt-5">
            <div className="w-16 h-16">
              <img
                src={userImage}
                alt="project manager"
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium">Demo Project Manager</h3>
              <p className="text-xs text-gray-500">demopm@butracker.com</p>
              <p className="text-xs text-gray-500">Project Manager</p>{" "}
            </div>
          </div>
          <div className="flex justify-end">
            <button className="text-sm border-2 px-3 py-1 rounded-xl border-[#74c0fc] text-[#74c0fc] font-medium hover:bg-[#74c0fc] hover:text-white transition-all duration-150 ease-in-out">
              Change PM
            </button>
          </div>
        </div>

        <hr className="my-6" />
        <section className="flex flex-col gap-3">
          <div className="flex gap-3 ">
            <div className="w-8 h-8">
              <img
                src={`https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80`}
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>
            <p className="flex flex-col ">
              <span className="font-medium text-gray-600 ">James Appuser</span>
              <span className="text-xs text-gray-500">Developer</span>
            </p>
          </div>
          <div className="flex justify-end">
            <button className="text-sm border-2 px-3 py-1 rounded-xl border-[#74c0fc] text-[#74c0fc] font-medium hover:bg-[#74c0fc] hover:text-white transition-all duration-150 ease-in-out">
              Assign Roles
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
export default ProjectTeam;
