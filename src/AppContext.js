import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [app_state, setAppState] = useState({
    window: "window_1",
    handle: "handle_1",
    hinge: "hinge_1",
    total: 150,
  });
  return (
    <AppContext.Provider value={[app_state, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};
