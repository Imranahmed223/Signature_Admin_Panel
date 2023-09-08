import React from "react";
import { notFound } from "../../assets/gif";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <img
        src={notFound}
        alt="Not Found"
        style={{ width: "70rem", maxWidth: "95vw" }}
      />
    </div>
  );
};

export default NotFound;
