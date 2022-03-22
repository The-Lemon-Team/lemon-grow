import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthScreenContainer } from "./modules/auth/containers";

import "./App.css";
import { MainPage } from "./modules/common/components/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage>
              <div>THE APP</div>
            </MainPage>
          }
        />
        <Route path="/auth" element={<AuthScreenContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
