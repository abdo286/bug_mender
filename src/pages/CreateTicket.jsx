import { Breadcrumbs } from "../components";
import { FormInput, FormSelect } from "../components";
import { nanoid } from "nanoid";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../libs/supabaseClient";
import Select from "react-select";
import { toast } from "react-toastify";
import useUsersContext from "../context/UsersContext";
import { useMemo } from "react";

const options = [
  {
    key: nanoid(),
    text: "tickets",
    to: "/tickets",
  },
  {
    key: nanoid(),
    text: "create-ticket",
    to: "/create-ticket",
  },
];

const CreateTicket = () => {
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
    },
  });
  const { users } = useUsersContext();

  const developers = useMemo(() => {
    return users
      .filter((user) => user.role === "developer")
      .map((user) => {
        return { value: user.id, label: user.name };
      });
  }, [users]);

  const onSubmit = async (formData) => {
    const data = {
      ...formData,
      createdAt: new Date(),
      projectId: "1",
      description: "war",
      assignedTo: null,
    };
    delete data.project;
    const { error } = await supabase.from("tickets _duplicate").insert(data);
    if (error) toast.error(error);
    else {
      toast.success("Ticket was created successfully");
    }
    console.warn(error);
    reset();
  };

  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs optionsData={options} />
      </div>
      <section
        className="w-[60%] bg-white mx-auto pt-5 gap-12 px-8 rounded-md shadow-md "
        onSubmit={handleSubmit(onSubmit)}
      >
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
            label="Type"
            register={register}
            errors={errors}
            values={[
              "newDevelopment",
              "defect",
              "changeRequest",
              "Enhancement",
            ]}
          />
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
            label="Project"
            register={register}
            values={["Bug Tracker"]}
          />

          <section className="mt-1">
            <p className="label-text font-semibold mb-2">Assigned To</p>

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
          <section className="mt-3">
            <p className="label-text font-semibold">Attach File: </p>

            <div className="flex col gap-6 mt-3">
              <div>
                <input
                  type="text"
                  placeholder="Add Description"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div>
                <input
                  type="file"
                  multiple
                  className="file-input file-input-bordered file-input-info w-full max-w-xs"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-between my-8">
            <button className="btn" type="button">
              Cancel
            </button>
            <button className="btn btn-neutral">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default CreateTicket;
// upload file logic should be in components global
// add created when uploading the data
// submitter
// assigned should be shown based on if the user is admin or project manager and assigned to assign project or not
// admins can only add projects - assigned project managers and add developers
// project managers can assign or remove developers only and they can do that only to the projects they were assigned to
// add the functionality of adding a project manager and a list of developers using react select to during adding the project
// add the functionality of adding attachments to the ticket during creating the ticket
