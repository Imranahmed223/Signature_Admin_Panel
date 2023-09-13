import React, { useLayoutEffect, useState } from "react";
import styles from "./ManageEmployee.module.scss";
import { employSearch } from "./../../assets";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import { useFormik } from "formik";
import { invitationSchema } from "../../schemas";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, inviteNewUser } from "../../store/actions";
import toast from "react-hot-toast";
import { useGlobalContext } from "../../Context";

const MyPagination = styled(({ ...props }) => <Pagination {...props} />)`
  & > .MuiPagination-ul {
    & > li > button {
      font-size: 1.3rem;

      & > svg {
        height: 1.8rem;
        width: 1.8rem;
      }
    }
  }
`;

const ManageEmployee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { loading, results, totalPages } = useSelector(
    (s) => s.manageEmployeeReducer
  );
  const { setIsGlobalLoading } = useGlobalContext();
  const { ...formik } = useFormik({
    initialValues: {
      email: "",
      role: "Account Manager",
    },
    validationSchema: invitationSchema,
    onSubmit: (values, { resetForm }) => {
      const { email, role } = values;
      dispatch(
        inviteNewUser(
          {
            body: {
              email,
              role,
            },
          },
          () => {
            toast.success("Invited Successfully!");
            resetForm();
          }
        )
      );
    },
  });

  useLayoutEffect(() => {
    dispatch(getAllUsers({ page: currentPage }));
  }, [currentPage, dispatch]);

  useLayoutEffect(() => {
    setIsGlobalLoading(loading);
  }, [loading]);
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <h1>Manage employee</h1>
        {/* <select>
          <option>Mar 2023</option>
          <option>Mar 2024</option>
          <option>Mar 2025</option>
        </select> */}
      </div>
      <div className={styles.container_intro}>
        {/* <div className={styles.container_intro_left_side}>
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
          <button
            className={styles.container_intro_right_side_btn1}
            onClick={() => navigate("/manageEmployee")}
          >
            Add manually
          </button>
          <button
            className={styles.container_intro_right_side_btn2}
            onClick={() => navigate("/inviteEmployee")}
          >
            Invite users
          </button>
        </div> */}
      </div>
      <div className={styles.container_grid}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {results?.map((singleUser, ind) => (
                  <tr key={ind}>
                    <td>{singleUser?.userName ?? "--"}</td>
                    <td className={styles.table_active}>
                      {singleUser?.email ?? "--"}
                    </td>
                    <td>{singleUser?.role ?? "--"}</td>
                  </tr>
                ))}

                {results?.length === 0 && (
                  <tr>
                    <td colSpan={5}>
                      <p style={{ textAlign: "center" }}>No Record Found</p>
                    </td>
                  </tr>
                )}
                {results?.length !== 0 && (
                  <tr>
                    <td
                      style={{ paddingTop: "2rem" }}
                      colSpan={5}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        style={{
                          display: "grid",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MyPagination
                          count={totalPages}
                          page={currentPage}
                          onChange={(_, newPage) => setCurrentPage(newPage)}
                        />
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className={styles.container_grid_right_side}>
              <p className={styles.container_grid_right_side_heading}>
                Add members
              </p>
              {/* <div className={styles.container_grid_right_side_options}>
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
              </div> */}
              <div className={styles.container_grid_right_side_search_box}>
                {/* <img
                  src={employSearch}
                  alt="employSearch"
                  width="20"
                  height="13"
                /> */}
                <FaUserAlt style={{ fontSize: "1.3rem", color: "#2B4465" }} />
                <input
                  type="email"
                  placeholder="Email"
                  value={formik.values.email}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#d63535",
                    fontWeight: "500",
                    fontFamily: "Roboto",
                    paddingTop: ".65rem",
                  }}
                >
                  {formik.errors.email}
                </p>
              )}
              {/* <div className={styles.container_grid_right_side_info}>
                <p>Select all</p>
                <p>Deselect all</p>
              </div> */}
              <div className={styles.container_grid_right_side_table}>
                <table>
                  <thead>
                    <tr>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label>
                          <input
                            type="radio"
                            name="role"
                            value="Account Manager"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            defaultChecked
                          />
                          <span className="text">Account Manager</span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          <input
                            type="radio"
                            name="role"
                            value="Support Manager"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span className="text">Support Manager</span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.container_grid_right_side_btns}>
                {/* <button className={styles.container_grid_right_side_btns_btn1}>
                  Cancel
                </button> */}
                <button
                  className={styles.container_grid_right_side_btns_btn2}
                  onClick={formik.handleSubmit}
                >
                  Send Invite
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ManageEmployee;
