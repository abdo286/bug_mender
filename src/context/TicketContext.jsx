import { createContext, useContext } from "react";

const TicketContext = createContext();

export const TicketContextProvider = ({ children }) => {
  return <TicketContext.Provider value={{}}>{children}</TicketContext.Provider>;
};

const useTicketContext = () => {
  return useContext(TicketContext);
};

export default useTicketContext;
