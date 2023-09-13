import React, { useLayoutEffect, useMemo, useState } from "react";
import styles from "./SupportRequest.module.scss";
import { search, deleteIcon } from "./../../assets";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Pagination, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSupportRequest,
  getAllSupportRequests,
  replyToSupportRequest,
} from "../../store/actions";
import { useGlobalContext } from "../../Context";
import { useFormik } from "formik";
import { replyToSupportRequestSchema } from "../../schemas";

const style = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  height: 430,
  bgcolor: "background.paper",
  border: "1px solid #F5F5F5",
  borderRadius: "4rem",
  boxShadow: 24,
  p: 4,
};

const style1 = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "background.paper",
  border: "1px solid #F5F5F5",
  borderRadius: "4rem",
  boxShadow: 24,
  p: 4,
};

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

const SupportRequest = () => {
  const [selectedId, setSelectedId] = useState("");
  const handleClose = () => setSelectedId("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, results, totalPages } = useSelector(
    (s) => s.supportRequestReducer
  );

  const dispatch = useDispatch();
  const { setIsGlobalLoading } = useGlobalContext();
  const selectedIssue = useMemo(() => {
    return results?.find((issue) => issue._id === selectedId);
  }, [results, selectedId]);
  const formik = useFormik({
    initialValues: {
      reply: "",
    },
    validationSchema: replyToSupportRequestSchema,
    onSubmit: (values, { resetForm }) => {
      const { reply } = values;
      dispatch(
        replyToSupportRequest(
          {
            page: currentPage,
            _id: selectedId,
            body: {
              email: selectedIssue?.email ?? "",
              name: selectedIssue?.name ?? "",
              issue: reply,
            },
            search: searchText,
          },
          () => {
            resetForm();
            setSelectedId("");
          }
        )
      );
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");
    if (search) setSearchText(search);
  };

  useLayoutEffect(() => {
    dispatch(getAllSupportRequests({ search: searchText, page: currentPage }));
  }, [currentPage, dispatch, searchText]);

  useLayoutEffect(() => {
    setIsGlobalLoading(loading);
  }, [loading]);

  return (
    <>
      <Modal
        open={Boolean(selectedId)}
        onClose={() => {
          setSelectedId("");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.web_modal}
      >
        <Box sx={style}>
          <div className={styles.modal_box}>
            <label>Name</label>
            <input
              type="text"
              style={{ width: "100%" }}
              placeholder="Anton Hall"
              disabled
              value={selectedIssue?.name ?? "--"}
            />
            <label>Email</label>
            <input
              style={{ width: "100%" }}
              type="email"
              placeholder="anton@gmail.com"
              disabled
              value={selectedIssue?.email ?? "--"}
            />
            <label>Iissues</label>
            <textarea
              style={{
                width: "100%",
                resize: "none",
                height: "7rem",
                padding: ".65rem ",
              }}
              disabled
              value={selectedIssue?.issue ?? "--"}
            ></textarea>
            <label>
              Reply <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              style={{
                width: "100%",
                resize: "none",
                height: "7rem",
                padding: ".65rem ",
              }}
              placeholder="Reply To issue"
              value={formik.values.reply}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="reply"
            ></textarea>
            <label style={{ color: "#d63535" }}>
              {formik.errors.reply && formik.touched.reply
                ? formik.errors.reply
                : ""}
            </label>
            <button onClick={formik.handleSubmit}>Submit</button>
          </div>
        </Box>
      </Modal>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.mobile_modal}
      >
        <Box sx={style1}>
          <div className={styles.modal_box}>
            <label>Name</label>
            <input type="text" placeholder="Anton Hall" disabled />
            <label>Email</label>
            <input type="email" placeholder="anton@gmail.com" disabled />
            <label>
              issues<span style={{ color: "red" }}>*</span>
            </label>
            <textarea rows="10" cols="25" disabled></textarea>
            <button onClick={() => handleClose()}>Submit</button>
          </div>
        </Box>
      </Modal> */}
      <div className={styles.header}>
        <h1>Support Requests</h1>
        {/* <select>
          <option>Mar 2023</option>
          <option>Mar 2024</option>
          <option>Mar 2025</option>
        </select> */}
      </div>
      <div className={styles.intro}>
        <div className={styles.intro_left_side}>
          {/* <div>
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
          </div> */}
        </div>
        <form className={styles.intro_right_side} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search by Name"
            name="search"
            onChange={(e) => (e.target.value === "" ? setSearchText("") : "")}
          />
          <img src={search} alt="search" />
        </form>
      </div>
      <div className={styles.table}>
        <div className={styles.overflow}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Issue</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {results.map((supportRequest, i) => (
                <tr key={i} onClick={() => setSelectedId(supportRequest?._id)}>
                  <td>{supportRequest?.name ?? "--"}</td>
                  <td>{supportRequest?.email ?? "--"}</td>
                  <td>
                    {supportRequest?.issue
                      ? supportRequest?.issue?.length > 20
                        ? supportRequest?.issue.slice(0, 20) + "..."
                        : supportRequest?.issue
                      : "--"}
                  </td>
                  <td>
                    {supportRequest?.status
                      ? supportRequest?.status === "resolved"
                        ? "Resolved"
                        : "Pending"
                      : "--"}
                  </td>
                  <td>
                    <img
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                          deleteSupportRequest({
                            search: searchText,
                            page: currentPage,
                            _id: supportRequest?._id,
                          })
                        );
                      }}
                      src={deleteIcon}
                      alt="deleteIcon"
                    />
                  </td>
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
        </div>
        <div className={styles.info}>{/* <span>1 to 18 of 18</span> */}</div>
      </div>
    </>
  );
};

export default SupportRequest;
