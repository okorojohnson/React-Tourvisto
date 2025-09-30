import { createContext, useContext } from "react";
import { featuredDestinations } from "../data/mockData";

const DestinationContext = createContext();

export const useDestination = () => {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error("useDestination must be used within a DestinationProvider");
  }
  return context;
};

export const DestinationProvider = ({ children }) => {
  const getFeaturedDestinations = () => featuredDestinations;

  return (
    <DestinationContext.Provider value={{ getFeaturedDestinations }}>
      {children}
    </DestinationContext.Provider>
  );
};
