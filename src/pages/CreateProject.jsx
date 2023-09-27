import { useMemo } from "react";
import { Breadcrumbs, DatePicket } from "../components";
import { FormInput, FormSelect } from "../components";
import ReactQuill from "react-quill";
import { nanoid } from "nanoid";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { supabase } from "../libs/supabaseClient";
import { toast } from "react-toastify";
import useUsersContext from "../context/UsersContext";

const options = [
  {
    key: nanoid(),
    text: "projects",
    to: "/projects",
  },
  {
    key: nanoid(),
    text: "create-project",
    to: "/create-project",
  },
];

const CreateProject = () => {
  const { users } = useUsersContext();
  const developers = useMemo(() => {
    return users
      .filter((user) => user.role === "developer")
      .map((user) => {
        return { value: user.id, label: user.name };
      });
  }, [users]);

  const projectManagers = useMemo(() => {
    return users
      .filter((user) => user.role === "projectManager")
      .map((user) => {
        return { value: user.id, label: user.name };
      });
  }, [users]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      description: "",
      startDate: new Date(),
      developers: [],
    },
  });

  const onSubmit = async (formData) => {
    const data = {
      ...formData,
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
      projectManager: formData.projectmanager || null,
    };
    delete data.developers;
    delete data.projectmanager;
    const { error } = await supabase.from("projects").insert(data);
    if (error) toast.error(error);
    else {
      toast.success("Ticket was created successfully");
    }
    reset();
  };

  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[60%] bg-white mx-auto pt-5 gap-12 px-8 rounded-md shadow-md ">
        <form className="flex flex-col gap-5">
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
          <div className="mt-1">
            <p className="label-text font-semibold mb-2">Project Manager</p>

            <Controller
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
          </div>
          <section className="mt-1">
            <p className="label-text font-semibold mb-2">Assigned Developers</p>

            <Controller
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
          <Controller
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
            <button className="btn btn-neutral">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default CreateProject;
