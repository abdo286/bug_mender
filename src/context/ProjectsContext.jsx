import { createContext, useContext, useMemo } from "react";
import { useFetch } from "../components/hooks";
import { supabase } from "../libs/supabaseClient";
import PropTypes from "prop-types";

const ProjectsContext = createContext();

const query = async () => {
  return supabase.from("projects").select();
};

export const ProjectsContextProvider = ({ children }) => {
  const { data: projects, error, loading } = useFetch(query);
  const value = useMemo(() => {
    return { projects, error, loading };
  }, [projects, error, loading]);

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

const useProjectsContext = () => {
  return useContext(ProjectsContext);
};

ProjectsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default useProjectsContext;
