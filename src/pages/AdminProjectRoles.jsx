import { useMemo } from "react";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { supabase } from "../libs/supabaseClient";
import { useFetch } from "../components/hooks";
import { Breadcrumbs } from "../components";
import { Table, UserAssignmentForm } from "../features/Admin";
import useUsersContext from "../context/UsersContext";
import Loading from "./Loading";
import Error from "./Error";

const query = async (projectId) => {
  return supabase
    .from("UsersProjects")
    .select(
      `id, created_at, userId, projectId, role, profiles (id, name, email, lastName, image, role)`
    )
    .eq("projectId", projectId);
};

const options = [
  {
    key: nanoid(),
    text: `admin`,
    to: "/admin",
  },
];

const AdminProjectRoles = () => {
  const { id: projectId } = useParams();
  const customQuery = useMemo(() => {
    return () => query(projectId);
  }, [projectId]);
  const { data: projectAssignedUsers, error, loading } = useFetch(customQuery);

  const { users } = useUsersContext();

  const developers = useMemo(() => {
    if (loading || error) return [];
    const isUserAssignedToProject = (userId) => {
      const user = projectAssignedUsers.find((user) => {
        return user.profiles.id === userId;
      });

      return !!user;
    };
    return users
      .filter(
        (user) => !isUserAssignedToProject(user.id) && user.role === "developer"
      )
      .map((user) => {
        return { value: user.id, label: user.name };
      });
  }, [users, loading, error, projectAssignedUsers]);

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <Error />;
  }

  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs
          optionsData={[
            ...options,
            {
              key: nanoid(),
              text: projectId || null,
              to: ".",
            },
          ]}
        />
      </div>
      <section className="w-[90%] mx-auto mt-12 grid grid-cols-[40fr_60fr] gap-12">
        <div>
          <h3 className="text-2xl font-medium mb-6">Assign User</h3>
          <UserAssignmentForm projectId={projectId} developers={developers} />
        </div>

        <div>
          <h3 className="text-2xl font-medium mb-6">Assignees</h3>
          <Table projectAssignedUsers={projectAssignedUsers} />
        </div>
      </section>
    </div>
  );
};

export default AdminProjectRoles;
