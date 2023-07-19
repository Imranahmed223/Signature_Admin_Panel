import React from "react";
import styles from "./InviteEmployee.module.scss";
import { employSearch } from "./../../assets";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const InviteEmployee = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <h1>Invite Employee</h1>
        <select>
          <option>Mar 2023</option>
          <option>Mar 2024</option>
          <option>Mar 2025</option>
        </select>
      </div>
      <div className={styles.container_intro}>
        <div className={styles.container_intro_left_side}>
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
        <div className={styles.container_intro_right_side}>
          {/* <button
            className={styles.container_intro_right_side_btn1}
            onClick={() => navigate("/manageEmployee")}
          >
            Add manually
          </button> */}
          <button
            className={styles.container_intro_right_side_btn2}
            onClick={() => navigate("/inviteEmployee")}
          >
            Invite users
          </button>
        </div>
      </div>
      <div className={styles.container_grid}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <table>
              <thead>
                <tr>
                  <th>Employee’s Name</th>
                  <th>Assigned Signature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Anton Hall</td>
                  <td className={styles.table_active}>Active</td>
                  <td>My Company Signature</td>
                </tr>
                <tr>
                  <td>Anton Hall</td>
                  <td className={styles.table_active}>Active</td>
                  <td>My Company Signature</td>
                </tr>
                <tr>
                  <td>Anton Hall</td>
                  <td className={styles.table_active}>Active</td>
                  <td>My Company Signature</td>
                </tr>
                <tr>
                  <td>Anton Hall</td>
                  <td className={styles.table_active}>Active</td>
                  <td>My Company Signature</td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className={styles.container_grid_right_side}>
              <p className={styles.container_grid_right_side_heading}>
                Add members
              </p>
              <div className={styles.container_grid_right_side_options}>
                <div>
                  <input type="radio" />
                  <p className={styles.container_grid_right_side_options_p}>
                    All Members
                  </p>
                </div>
                <div>
                  <input type="radio" />
                  <p className={styles.container_grid_right_side_options_p}>
                    Only Selected
                  </p>
                </div>
              </div>
              <div className={styles.container_grid_right_side_search_box}>
                <img
                  src={employSearch}
                  alt="employSearch"
                  width="20"
                  height="13"
                />
                <input type="text" placeholder="Search members" />
              </div>
              <div className={styles.container_grid_right_side_info}>
                <p>Select all</p>
                <p>Deselect all</p>
              </div>
              <div className={styles.container_grid_right_side_table}>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Anton Hall</td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Anton Hall</td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Anton Hall</td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.container_grid_right_side_btns}>
                <button className={styles.container_grid_right_side_btns_btn1}>
                  Cancel
                </button>
                <button className={styles.container_grid_right_side_btns_btn2}>
                  Save changes
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InviteEmployee;
