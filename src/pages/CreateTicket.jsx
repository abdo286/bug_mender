import { Breadcrumbs, SelectSection } from "../components";
import { FormInput, FormSelect } from "../components";
import ReactQuill from "react-quill";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../libs/supabaseClient";
import { toast } from "react-toastify";
import useUsersContext from "../context/UsersContext";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import useTicketsContext from "../context/TicketsContext";
import useProjectsContext from "../context/ProjectsContext";
import useAuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";

const options = [
  {
    key: "tickets",
    text: "tickets",
    to: "/tickets",
  },
  {
    key: "create-ticket",
    text: "create-ticket",
    to: "/create-ticket",
  },
];

const getTicket = (tickets, ticketId, users) => {
  if (!ticketId || !tickets) return null;
  let ticket = tickets.find((ticket) => Number(ticket.id) === Number(ticketId));
  if (!ticket) return null;
  const user = users.find((user) => user.id === ticket.createdBy);
  if (user) {
    ticket.userName = user.userName;
  }
  return ticket;
};

const getProjects = (projectsData) => {
  if (!projectsData) return [];
  return projectsData.map((project) => {
    return { label: project.name, value: project.id };
  });
};

const CreateTicket = () => {
  const navigate = useNavigate();

  const { users } = useUsersContext();

  const developers = useMemo(() => {
    return users
      .filter((user) => user.role === "developer")
      .map((user) => {
        return { value: user.id, label: user.name };
      });
  }, [users]);

  const { ticketId } = useParams();

  const mode = useMemo(() => {
    return ticketId ? "editing" : "creating";
  }, [ticketId]);

  const {
    tickets,
    error: ticketsError,
    loading: ticketsLoading,
  } = useTicketsContext();

  const ticket = useMemo(() => {
    return getTicket(tickets, ticketId, users);
  }, [tickets, ticketId, users]);

  const { projects: projectsData } = useProjectsContext();
  const projects = useMemo(() => getProjects(projectsData), [projectsData]);

  const { userProfile } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      description: mode === "editing" ? ticket?.description : "",
      name: mode === "editing" ? ticket?.name : "",
      assignedTo: mode === "editing" ? ticket?.assignedTo : "Select...",
      priority: mode === "editing" ? ticket?.priority : "low",
      status: mode === "editing" ? ticket?.status : "new",
      projectId: mode === "editing" ? ticket?.projectId : "Select...",
      type: mode === "editing" ? ticket?.type : "new_development",
    },
  });

  const onSubmit = async (formData) => {
    const data = {
      ...formData,
      projectId: formData.projectId.value,
      assignedTo: formData?.assignedTo?.value,
      createdAt: mode === "editing" ? ticket.createdAt : new Date(),
      createdBy: userProfile?.data?.id,
    };

    for (let key of Object.keys(data)) {
      if (!data[key] && key !== "assignedTo") {
        toast.error("Fill all the fields");
        return;
      }
    }

    let error;

    if (mode === "editing") {
      const { error: updatingError } = await supabase
        .from("tickets")
        .update(data)
        .eq("id", ticket.id);
      error = updatingError;
    } else {
      const { error: insertingError } = await supabase
        .from("tickets")
        .insert(data);
      error = insertingError;
    }

    if (error) {
      console.log(error);
      toast.error("There was error submitting the form");
    } else {
      toast.success(
        `Ticket was ${mode === "editing" ? "updated" : "created"} successfully`
      );
      reset();
    }
  };

  useEffect(() => {
    if (mode === "editing" && ticket !== null && !!ticket) {
      setValue("name", ticket.name);
      setValue("description", ticket.description);
      if (ticket.assignedTo) setValue("assignedTo", ticket.assignedTo);
      setValue("projectId", {
        value: ticket.projectId,
        label: ticket.projects.name,
      });

      if (ticket.userName) {
        setValue("developerId", {
          value: ticket.createdBy,
          label: ticket.userName,
        });
      }

      setValue("status", ticket.status);
      setValue("priority", ticket.priority);
      setValue("type", ticket.type);
    }
  }, [tickets, mode, ticket, setValue]);

  if (ticketsLoading) return <Loading />;
  if (ticketsError) {
    console.log(ticketsError);
    return <Error />;
  }

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
