import React, { useState, useReducer, useContext } from "react";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ ...state }}>
      {/* render the application and pass down the value object 
        children refers to App component with all the routes
      */}
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
