import { useState } from "react";
import { Breadcrumbs, DatePicket } from "../components";
import { FormInput, FormSelect } from "../components";
// import ReactQuill from "react-quill";
import { nanoid } from "nanoid";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { supabase } from "../libs/supabaseClient";

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

const developers = [
  { value: "user30", label: "user30" },
  { value: "user33", label: "user33" },
  { value: "user3", label: "user3" },
];

const CreateProject = () => {
  const [value, setValue] = useState("");
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
    if (error) console.warn(error);
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
            {/* <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <ReactQuill theme="snow" {...field} />}
            /> */}
            {errors.description?.type === "required" && (
              <p role="alert" className="text-sm text-red-600 mt-1">
                Description is required
              </p>
            )}
          </section>

          <FormSelect
            label="Priority"
            register={register}
            values={["low", "medium", "high"]}
          />
          <FormSelect
            label="Status"
            register={register}
            values={["new", "development", "resolved"]}
          />
          <FormSelect
            text="Project Manager"
            label="projectManager"
            register={register}
            values={[]}
          />
          <section>
            <p className="label-text font-semibold">Assigned Developers</p>

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
