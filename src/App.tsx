import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./modules/auth/containers";
import { AuthScreenContainer } from "./modules/auth/containers";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div>THE APP</div>
            </PrivateRoute>
          }
        />
        <Route path="/auth" element={<AuthScreenContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
