import { useMemo } from "react";
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
      `id, createdAt, userId, projectId, role, profiles (id, name, email, lastName, image, role)`
    )
    .eq("projectId", projectId);
};

const AdminProjectRoles = () => {
  const { id: projectId } = useParams();
  const customQuery = useMemo(() => {
    return () => query(projectId);
  }, [projectId]);
  const {
    data: projectAssignedUsers,
    error,
    loading,
  } = useFetch({ query: customQuery, tableName: "UsersProjects" });

  const { users } = useUsersContext();

  const developers = useMemo(() => {
    if (loading || error) return [];
    const isUserAssignedToProject = (userId) =>
      projectAssignedUsers.some((user) => user.profiles.id === userId);
    return users
      .filter(
        (user) => !isUserAssignedToProject(user.id) && user.role === "developer"
      )
      .map((user) => ({ value: user.id, label: user.name }));
  }, [users, loading, error, projectAssignedUsers]);

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <Error />;
  }

  return (
    <main>
      <nav className="mt-3">
        <Breadcrumbs
          optionsData={[
            { key: "admin", text: "admin", to: "/admin" },
            { key: projectId || null, text: projectId || null, to: "." },
          ]}
        />
      </nav>
      <section className="w-[90%] mx-auto mt-12 grid grid-cols-[40fr_60fr] gap-12">
        <article>
          <h3 className="text-2xl font-medium mb-6">Assign User</h3>
          <UserAssignmentForm projectId={projectId} developers={developers} />
        </article>

        <aside>
          <h3 className="text-2xl font-medium mb-6">Assignees</h3>
          <Table projectAssignedUsers={projectAssignedUsers} />
        </aside>
      </section>
    </main>
  );
};

export default AdminProjectRoles;
