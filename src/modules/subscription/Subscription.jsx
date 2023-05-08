import React from "react";
import styles from "./Subscription.module.scss";
import { deleteIcon, search } from "./../../assets";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.header}>
        <h1>Subscription</h1>
        <select>
          <option>Mar 2023</option>
          <option>Mar 2024</option>
          <option>Mar 2025</option>
        </select>
      </div>
      <div className={styles.intro}>
        <div className={styles.intro_left_side}></div>
        <div className={styles.intro_right_side}>
          <input type="text" placeholder="Search by Name" />
          <img src={search} alt="search" />
        </div>
      </div>
      <div className={styles.table}>
        <div
          className={styles.overflow}
          onClick={() => navigate("/subscriptionUpdate")}
        >
          <table>
            <thead>
              <tr>
                <th>Clients Name</th>
                <th>Email</th>
                <th>Subscription Plan</th>
                <th>Billing Cycle</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <tr key={i}>
                    <td>Joseph Carter</td>
                    <td>Abcd@mail.com</td>
                    <td>Company</td>
                    <td>By Card</td>
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

export default Subscription;
