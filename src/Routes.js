import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  Test,
  Dashboard,
  SupportRequest,
  Subscription,
  ManageEmployee,
  Settings,
} from "./modules";
import { LayoutElement } from "./components/common";

const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="" element={<LayoutElement />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/supportRequest" element={<SupportRequest />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/manageEmployee" element={<ManageEmployee />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default Routess;
