import React from "react";
import styles from "./Support.module.scss";
import { MdOutlineSearch } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Support = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <h1>Support Reqeusts</h1>
        </div>
        <div className={styles.right}>
          <select defaultValue={"Mar23"}>
            <option value="Mar23">Mar 2023</option>
            <option value="Feb23">Feb 2023</option>
            <option value="Jan23">Jan 2023</option>
          </select>
        </div>
      </div>
      <div className={styles.middle}>
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
              <tr>
                <td>Non Archived</td>
                <td>All Group</td>
                <td></td>
                <td>All Signature</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search by Name" />
          <span className={styles.icon}>
            <MdOutlineSearch />
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
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
                      <RiDeleteBin6Line />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className={styles.info}>
          <span>1 to 18 of 18</span>
        </div>
      </div>
    </div>
  );
};

export default Support;
