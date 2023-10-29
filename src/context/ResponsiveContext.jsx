import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });
  const is2Xl = useMediaQuery({ query: "(min-width: 1536px)" });

  const value = useMemo(() => {
    return { isSm, isMd, isLg, isXl, is2Xl };
  }, [isSm, isMd, isLg, isXl, is2Xl]);

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

const useResponsiveContext = () => {
  return useContext(ResponsiveContext);
};

ResponsiveProvider.propTypes = {
  children: PropTypes.node,
};

export default useResponsiveContext;
