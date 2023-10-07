import useUsersContext from "../context/UsersContext";
import useProjectsContext from "../context/ProjectsContext";
import useAuthContext from "../context/AuthContext";
import { useFetch } from "../components/hooks";
import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { supabase } from "../libs/supabaseClient";
import { toast } from "react-toastify";

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

const addNotificationToUser = async ({
  projectId,
  developerId,
  userFirstName,
  projectName,
  message,
  type,
}) => {
  const { error } = await supabase.from("notifications").insert({
    userId: developerId,
    projectId: projectId,
    message,
    type,
  });
  if (error) {
    console.log(projectId, developerId, userFirstName, projectName);
    console.log("notification error");
    console.log(error);
  }
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
      addNotificationToUser({
        projectId,
        developerId: developers[index],
        userFirstName,
        projectName,
        message: `You have been add to project Id ${projectId} by ${userFirstName} - ${projectName}`,
        type: "project added",
      });
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
      addNotificationToUser({
        projectId,
        developerId: developers[index],
        userFirstName,
        projectName,
        message: `You were removed from project Id ${projectId} by ${userFirstName} - ${projectName}`,
        type: "project removed",
      });
    }
  });
};

const useCreateProjects = () => {
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

    console.log("data", data);
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
            userProfile?.data?.name
          );
        }

        if (developersToRemove.length > 0) {
          removeDevelopersFromProject(
            developersToRemove,
            data.id,
            data.name,
            userProfile?.data?.name
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
          userProfile?.data?.name
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

  return {
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
    mode
  };
};

export default useCreateProjects;
