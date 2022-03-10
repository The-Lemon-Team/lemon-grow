import * as React from "react";

import { FirebaseContext } from "./FirebaseContext";

export const FirebaseProvider: React.FC = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
  );
};
