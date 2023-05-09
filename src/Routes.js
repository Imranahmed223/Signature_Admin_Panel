import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import {
  Login,
  Dashboard,
  SupportRequest,
  Subscription,
  ManageEmployee,
  Settings,
  InviteEmployee,
  ChangePassword,
  SubscriptionUpdate,
} from "./modules";
import { LayoutElement } from "./components/common";

const Routess = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="" element={<LayoutElement />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/supportRequest" element={<SupportRequest />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/manageEmployee" element={<ManageEmployee />} />
            <Route path="/inviteEmployee" element={<InviteEmployee />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route
              path="/subscriptionUpdate"
              element={<SubscriptionUpdate />}
            />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};
export default Routess;
