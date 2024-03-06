import { createContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  //Global context states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  // For Listings
  const [listings, setListings] = useState([]);
  const [singleListing, setSingleListing] = useState({});

  // For Property Manager Requests for Admin
  const [allPMReqs, setAllPMReqs] = useState([]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        listings,
        setListings,
        singleListing,
        setSingleListing,
        allPMReqs,
        setAllPMReqs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
