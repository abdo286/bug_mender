import { useCallback, useEffect, useMemo } from "react";
import { Breadcrumbs, DatePicket } from "../components";
import { FormInput, FormSelect } from "../components";
import ReactQuill from "react-quill";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { supabase } from "../libs/supabaseClient";
import { toast } from "react-toastify";
import useUsersContext from "../context/UsersContext";
import useProjectsContext from "../context/ProjectsContext";
import useAuthContext from "../context/AuthContext";
import Loading from "./Loading";
import Error from "./Error";
import { useFetch } from "../components/hooks";

const options = [
  {
    key: "projects",
    text: "projects",
    to: "/projects",
  },
  {
    key: "create-project",
    text: "create-project",
    to: "/create-project",
  },
];

const getProject = (projects, projectId) => {
  if (!projectId || !projects) return null;
  let project = projects.find(
    (project) => Number(project.id) === Number(projectId)
  );

  return project;
};

const getSelectOptions = (users, developers) => {
  const set = new Set(developers);
  let options = [];
  users.map((user) => {
    if (set.has(user.id)) options.push({ label: user.name, value: user.id });
  });
  return options;
};

const getDevelopersToAdd = (
  projectOriginalDevelopers,
  projectCurrentDevelopers
) => {
  const developers = projectOriginalDevelopers.map((cur) => cur.userId);
  const set = new Set(developers);
  return projectCurrentDevelopers.filter((cur) => !set.has(cur));
};

const getDevelopersToRemove = (
  projectOriginalDevelopers,
  projectCurrentDevelopers
) => {
  const developers = projectOriginalDevelopers.map((cur) => cur.userId);
  const set = new Set(projectCurrentDevelopers);
  return developers.filter((cur) => !set.has(cur));
};

const addDevelopersToProject = async (
  developers,
  projectId,
  projectName,
  userFirstName
) => {
  const projectUsers = await Promise.all(
    developers.map((cur) => {
      return supabase.from("UsersProjects").insert({
        userId: cur,
        projectId: projectId,
        role: "developer",
        createdAt: new Date(),
        id: cur + projectId,
      });
    })
  );
  projectUsers.map(async (cur, index) => {
    if (cur.error) {
      console.log(cur.error);
      toast.error(
        `There is an error adding developer with id: ${developers[index]}`
      );
    } else {
      const { error } = await supabase.from("notifications").insert({
        userId: developers[index],
        projectId: projectId,
        message: `You have been add to project Id ${projectId} by ${userFirstName} - ${projectName}`,
        type: "project added",
      });
      if (error) {
        console.log(projectId, cur, userFirstName, projectName);
        console.log("notification error");
        console.log(error);
      }
    }
  });
};

const removeDevelopersFromProject = async (
  developers,
  projectId,
  projectName,
  userFirstName
) => {
  const removeUsers = await Promise.all(
    developers.map((cur) => {
      return supabase
        .from("UsersProjects")
        .delete()
        .eq("id", cur + projectId);
    })
  );

  removeUsers.map(async (cur, index) => {
    if (cur.error) {
      console.log(cur.error);
      toast.error(
        `There is an error removing developer with id: ${developers[index]}`
      );
    } else {
      const { error } = await supabase.from("notifications").insert({
        userId: developers[index],
        projectId: projectId,
        message: `You were removed from project Id ${projectId} by ${userFirstName} - ${projectName}`,
        type: "project removed",
      });
      if (error) {
        console.log("notification error");
        console.log(error);
      }
    }
  });
};

const CreateProject = () => {
  const navigate = useNavigate();

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
      .filter((user) => user.role === "project_manager")
      .map((user) => {
        return { value: user.id, label: user.name };
      });
  }, [users]);

  const { projectId } = useParams();

  const query = useCallback(async () => {
    return supabase.from("UsersProjects").select().eq("projectId", projectId);
  }, [projectId]);

  const {
    data: projectDevelopers,
    error: projectDevelopersError,
    loading: projectDevelopersLoading,
  } = useFetch(query);

  const mode = useMemo(() => {
    return projectId ? "editing" : "creating";
  }, [projectId]);

  const {
    projects,
    error: projectsError,
    loading: projectsLoading,
  } = useProjectsContext();

  const project = useMemo(() => {
    return getProject(projects, projectId);
  }, [projects, projectId]);

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
      name: mode === "editing" ? project?.name : "",
      description: mode === "editing" ? project?.description : "",
      priority: mode === "editing" ? project?.priority : "low",
      status: mode === "editing" ? project?.status : "new",
      startDate: mode === "editing" ? project?.startDate : new Date(),
      endDate: mode === "editing" ? project?.endDate : new Date(),
      deadline: mode === "editing" ? project?.deadline : new Date(),
      createdAt: mode === "editing" ? project?.createdAt : new Date(),
      developers: [],
      ["Project Manager"]: mode === "editing" ? project?.projectManager : null,
    },
  });

  const onSubmit = async (formData) => {
    function generateUniqueBigInt() {
      const timestamp = new Date().getTime();
      const randomPart = Math.floor(Math.random() * 10000);
      const uniqueBigInt = BigInt(`${timestamp}${randomPart}`);
      return uniqueBigInt.toString();
    }

    const data = {
      ...formData,
      startDate: mode === "editing" ? project.createdAt : new Date(),
      endDate: mode === "editing" ? project.createdAt : new Date(),
      createdAt: mode === "editing" ? project.createdAt : new Date(),
      id: mode === "editing" ? project.id : generateUniqueBigInt(),
      developers: formData.developers.map((cur) => cur.value),
      createdBy: userProfile?.data?.id,
      projectManager: formData["Project Manager"],
    };
    delete data["Project Manager"];

    const developers = data.developers;
    delete data.developers;
    let error;
    if (mode === "editing") {
      const { error: updatingError } = await supabase
        .from("projects")
        .update(data)
        .eq("id", project.id);
      console.log("developers", developers);
      if (developers) {
        const developersToAdd = getDevelopersToAdd(
          projectDevelopers,
          developers
        );
        const developersToRemove = getDevelopersToRemove(
          projectDevelopers,
          developers
        );
        console.log("developersToAdd", developersToAdd);
        console.log("developersToRemove", developersToRemove);

        if (developersToAdd.length > 0) {
          addDevelopersToProject(
            developersToAdd,
            data.id,
            data.name,
            userProfile.data.name
          );
        }

        if (developersToRemove.length > 0) {
          removeDevelopersFromProject(
            developersToRemove,
            data.id,
            data.name,
            userProfile?.data.name
          );
        }
      }

      error = updatingError;
    } else {
      const { error: insertingError } = await supabase
        .from("projects")
        .insert(data);

      if (developers.length > 0) {
        addDevelopersToProject(
          developers,
          data.id,
          data.name,
          userProfile?.data.name
        );
      }

      error = insertingError;
      reset();
    }

    if (error) {
      console.log(error);
      toast.error("There was error submitting the form");
    } else {
      toast.success(
        `Project was ${mode === "editing" ? "updated" : "created"} successfully`
      );
    }
  };

  useEffect(() => {
    if (mode === "editing" && !!projectDevelopers) {
      const options = getSelectOptions(
        users,
        projectDevelopers.map((cur) => cur.userId)
      );
      setValue("developers", options);
    }
  }, [setValue, users, projectDevelopers, mode]);

  useEffect(() => {
    if (mode === "editing" && !!project) {
      setValue("name", project.name);
      setValue("description", project.description);
      setValue("status", project.status);
      setValue("priority", project.priority);
      setValue("startDate", project.startDate);
      setValue("endDate", project.endDate);
      setValue("deadline", new Date());
      setValue("createdAt", project.createdAt);
      setValue("Project Manager", project.projectManager);
    }
  }, [mode, setValue, users, project]);

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
        <Breadcrumbs optionsData={options} />
      </div>
      <section className="w-[60%] bg-white mx-auto pt-5 gap-12 px-8 rounded-md shadow-md ">
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
            <p className="label-text font-semibold mb-2">Project Manager</p>

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
            <p className="label-text font-semibold mb-2">Assigned Developers</p>

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
