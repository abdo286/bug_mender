import { Breadcrumbs, DatePicket } from "../components";
import { FormInput, FormSelect } from "../components";
import ReactQuill from "react-quill";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Loading from "./Loading";
import Error from "./Error";
import useCreateProject from "../features/Projects/hooks/useCreateProject";

const CreateProject = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    projectsError,
    projectsLoading,
    projectManagers,
    developers,
    projectDevelopersError,
    projectDevelopersLoading,
    control,
    mode,
  } = useCreateProject();

  if (mode === "editing") {
    if (projectsLoading || projectDevelopersLoading) return <Loading />;
    if (projectsError || projectDevelopersError) {
      if (projectsError) console.log(projectsError);
      if (projectDevelopersError) console.log(projectDevelopersError);
      return <Error />;
    }
  }

  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs
          optionsData={
            ({
              key: "projects",
              text: "projects",
              to: "/projects",
            },
            {
              key: "create-project",
              text: "create-project",
              to: "/create-project",
            })
          }
        />
      </div>
      <section className="w-[90%] lg:w-[60%] bg-white mx-auto pt-5 gap-12 px-8 rounded-md shadow-md mt-8">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <FormInput label="name" register={register} errors={errors} />
          <section className="flex flex-col gap-2 my-3">
            <p className="font-semibold">Description</p>
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <ReactQuill theme="snow" {...field} />}
            />
            {errors.description?.type === "required" && (
              <p role="alert" className="text-sm text-red-600 mt-1">
                Description is required
              </p>
            )}
          </section>
          <FormSelect
            errors={errors}
            label="Priority"
            name="priority"
            register={register}
            options={["low", "medium", "high"]}
          />
          <FormSelect
            errors={errors}
            label="Status"
            name="status"
            register={register}
            options={["new", "development", "resolved"]}
          />
          <section className="mt-1">
            <p className="label-text font-semibold mb-2 text-sm lg:text-base">
              Project Manager
            </p>

            <Controller // eslint-disable-line
              name="Project Manager"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isSearchable={true}
                  options={projectManagers}
                />
              )}
            />
          </section>{" "}
          <section className="mt-1">
            <p className="label-text font-semibold mb-2 text-sm lg:text-base">
              Assigned Developers
            </p>

            <Controller // eslint-disable-line
              name="developers"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti={true}
                  isSearchable={true}
                  options={developers}
                />
              )}
            />
          </section>
          <Controller // eslint-disable-line
            name="deadline"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <DatePicket field={field} />}
          />
          <div className="flex justify-between my-8">
            <button
              className="btn"
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </button>
            <button className="btn btn-neutral" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default CreateProject;
