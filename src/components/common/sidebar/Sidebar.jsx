import React, { useState } from "react";
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
  dashboard,
} from "./../../../assets";

const Sidebar = ({ handler }) => {
  const navigate = useNavigate();
  const [coloredImage, setColoredImage] = useState(false);
  const location = useLocation();

  const getColor = (current) => {
    if (location.pathname === current) {
      return "#01C8FB";
    }
  };
  const getBackgroundColor = (current) => {
    if (location.pathname === current) {
      return "#01C8FB";
    }
  };
  const getBackgroundColorOpacity = (current) => {
    if (location.pathname === current) {
      return 0.2;
    }
  };
  const getPadding = (current) => {
    if (location.pathname === current) {
      return "2rem 0.5rem 1rem 0.5rem";
    }
  };
  const getPaddingLeft = (current) => {
    if (location.pathname === current) {
      return "0.5rem";
    }
  };
  const handleImage = () => {
    setColoredImage(true);
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
                  <span
                    className={styles.icon}
                    // style={{
                    //   padding: getPadding(item.path),
                    //   backgroundColor: getBackgroundColor(item.path),
                    //   opacity: getBackgroundColorOpacity(item.path),
                    // }}
                  >
                    <img src={item.icon} alt="icons" />
                  </span>
                  <span
                    className={styles.text}
                    style={{
                      color: getColor(item.path),
                      // padding: getPaddingLeft(item.path),
                      // marginTop: "-2rem",
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

      <div className={styles.container_bottom}>
        <div className={styles.left}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>Selina</p>
          <span className={styles.scale}>Signature design</span>
        </div>
        <div className={styles.right}>
          <img src={logout} alt="logout" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
