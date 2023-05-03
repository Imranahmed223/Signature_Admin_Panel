import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../sidebar/Sidebar";
import Header from "./../header/Header";
import styles from "./Layout.module.scss";

const LayoutElement = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const handler = () => {
    setIsSideOpen((previous) => !previous);
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header handler={handler} isSideOpen={isSideOpen} />
      </div>
      <div className={styles.bottom}>
        <div
          className={`${styles.container_sidebar} ${
            isSideOpen ? styles.open : styles.close
          }`}
        >
          <Sidebar handler={handler} />
        </div>
        <div className={styles.container_content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutElement;
