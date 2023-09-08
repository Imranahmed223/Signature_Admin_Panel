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
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { NotFound } from "./components";

const Routess = () => {
  const { user } = useSelector((s) => s.authReducer);

  return (
    <>
      <HashRouter>
        <Toaster
          toastOptions={{
            style: {
              fontSize: "18px",
            },
          }}
        />
        <Routes>
          {!user?.email ? (
            <Route path="/" element={<Login />} />
          ) : (
            <Route element={<LayoutElement />}>
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
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
};
export default Routess;
