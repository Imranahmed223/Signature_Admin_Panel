import React, { useEffect } from "react";
import { logo } from "../../../assets";
import styles from "./Sidebar.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  dashboardWithoutBackground,
  manageEmployee,
  setting,
  subscription,
  supportRequest,
  avatar,
  logout,
} from "./../../../assets";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logOut, clearErrors, clearMessages } from "./../../../store/actions";

const Sidebar = ({ handler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    logOutMessage,
    logOutErrors: error,
    sessionExpireError,
    logOutLoading,
  } = useSelector((state) => state.authReducer);
  const location = useLocation();

  useEffect(() => {
    if (error.length > 0) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (sessionExpireError !== "") {
      toast.error(sessionExpireError);
      dispatch(clearErrors());
      setTimeout(() => navigate("/"), 2000);
    }
    if (logOutMessage !== "") {
      toast.success(logOutMessage);
      dispatch(clearMessages());
      setTimeout(() => navigate("/"), 2000);
    }
  }, [error, sessionExpireError, logOutMessage, dispatch, navigate]);
  const getColor = (current) => {
    if (location.pathname === current) {
      return "#01C8FB";
    }
  };

  const data = [
    {
      path: "/dashboard",
      icon: dashboardWithoutBackground,
      title: "Dashboard",
    },
    {
      path: "/supportRequest",
      icon: supportRequest,
      title: "Support Request",
    },
    {
      path: "/subscription",
      icon: subscription,
      title: "Subscription",
    },
    {
      path: "/manageEmployee",
      icon: manageEmployee,
      title: "Manage employee",
    },
    {
      path: "/settings",
      icon: setting,
      title: "Settings",
    },
  ];

  const admin = JSON.parse(sessionStorage.getItem("admin"));

  return (
    <div className={styles.container}>
      <div
        className={styles.container_main_logo}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="main_logo" />
      </div>
      <div className={styles.container_routing}>
        <ul>
          {data.map((item, ind) => {
            return (
              <li key={ind}>
                <Link to={item.path} onClick={() => handler()}>
                  <span className={styles.icon}>
                    <img src={item.icon} alt="icons" />
                  </span>
                  <span
                    className={styles.text}
                    style={{
                      color: getColor(item.path),
                    }}
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={styles.container_bottom}
        onClick={() => dispatch(logOut())}
      >
        <div className={styles.left}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.info} onClick={() => dispatch(logOut())}>
          <p className={styles.name}>{admin?.userName && admin.userName}</p>
          <span className={styles.scale}>Signature design</span>
        </div>
        {logOutLoading ? (
          "Please wait..."
        ) : (
          <div className={styles.right} onClick={() => dispatch(logOut())}>
            <img src={logout} alt="logout" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
