import React from "react";
import styles from "./SupportRequest.module.scss";
import { search, deleteIcon } from "./../../assets";

const SupportRequest = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Support Requests</h1>
        <select>
          <option>Mar 2023</option>
          <option>Mar 2024</option>
          <option>Mar 2025</option>
        </select>
      </div>
      <div className={styles.intro}>
        <div className={styles.intro_left_side}>
          <div>
            <p>Employees Status</p>
            <span>Non Archived</span>
          </div>
          <div>
            <p>Groups</p>
            <span>All group</span>
          </div>
          <div>
            <p>Status</p>
            <span>status</span>
          </div>
          <div>
            <p>Assigned Signature</p>
            <span>All Signature</span>
          </div>
        </div>
        <div className={styles.intro_right_side}>
          <input type="text" placeholder="Search by Name" />
          <img src={search} alt="search" />
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.overflow}>
          <table>
            <thead>
              <tr>
                <th>Employees Status</th>
                <th>Groups</th>
                <th>Status</th>
                <th>Assigned Signature</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <tr key={i}>
                    <td>Anton Hall</td>
                    <td>Active</td>
                    <td>Sale</td>
                    <td>My company Signature</td>
                    <td>
                      <img src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className={styles.info}>{/* <span>1 to 18 of 18</span> */}</div>
      </div>
    </>
  );
};

export default SupportRequest;
