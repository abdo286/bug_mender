import { Breadcrumbs, FormSelect } from "../components";
import { Table } from "../features/Admin";
const AdminProjectRoles = () => {
  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs />
      </div>
      <section className="w-[90%] mx-auto mt-12 grid grid-cols-[40fr_60fr] gap-12">
        <div>
          <h3 className="text-2xl font-medium mb-6">Assign User</h3>
          <form className="bg-white px-8 py-4 flex flex-col gap-6">
            <FormSelect label="Developer" />
            <FormSelect label="Role" />
            <div className="flex justify-end mt-3 mb-2 ">
              <button className="btn btn-neutral bg-[#4dabf7] border-[#4dabf7] hover:bg-[#4dabf7] hover:border-[#4dabf7]">
                Assign
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-6">Assignees</h3>
          <Table />
        </div>
      </section>
    </div>
  );
};
export default AdminProjectRoles;
