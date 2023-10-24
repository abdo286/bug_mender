import { Breadcrumbs, SelectSection } from "../components";
import { FormInput, FormSelect } from "../components";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useCreateTicket from "../features/Ticket/hooks/useCreateTicket";
import Loading from "./Loading";
import Error from "./Error";
import { Controller } from "react-hook-form";

const CreateTicket = () => {
  const navigate = useNavigate();
  const { ticketId } = useParams();
  const { historyId } = useParams();
  const {
    developers,
    register,
    handleSubmit,
    errors,
    control,
    onSubmit,
    projects,
    ticketsLoading,
    ticketHistoryEntryLoading,
    ticketsError,
    ticketHistoryEntryError,
    mode,
  } = useCreateTicket({ ticketId, historyId });

  if (mode === "editing" || mode == "restoring") {
    if (ticketsLoading || ticketHistoryEntryLoading) return <Loading />;
    if (mode === "editing" && ticketsError) {
      console.log(ticketsError);
      return <Error />;
    }
    if (mode === "restoring" && ticketHistoryEntryError) {
      console.log(ticketHistoryEntryError);
      return <Error />;
    }
  }

  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs
          optionsData={
            ({
              key: "tickets",
              text: "tickets",
              to: "/tickets",
            },
            {
              key: "create-ticket",
              text: "create-ticket",
              to: "/create-ticket",
            })
          }
        />
      </div>
      <section
        className="w-[90%] lg:w-[60%] bg-white mx-auto pt-5 gap-12 px-8 rounded-md shadow-md mt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            label="Type"
            name="type"
            register={register}
            options={[
              "new_development",
              "defect",
              "change_request",
              "enhancement",
            ]}
          />
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

          <SelectSection
            label="Projects"
            name="projectId"
            control={control}
            options={projects}
            errors={errors}
          />

          <SelectSection
            label="Assigned To"
            name="assignedTo"
            control={control}
            options={developers}
            errors={errors}
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
export default CreateTicket;
