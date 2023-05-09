import React from "react";
import styles from "./SupportRequest.module.scss";
import { search, deleteIcon } from "./../../assets";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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
const SupportRequest = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.web_modal}
      >
        <Box sx={style}>
          <div className={styles.modal_box}>
            <label>Name</label>
            <input type="text" placeholder="Anton Hall" />
            <label>Email</label>
            <input type="text" />
            <label>
              issues<span style={{ color: "red" }}>*</span>
            </label>
            <textarea rows="10" cols="30"></textarea>
            {/* <button onClick={() => handleClose()}>Submit</button> */}
          </div>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.mobile_modal}
      >
        <Box sx={style1}>
          <div className={styles.modal_box}>
            <label>Name</label>
            <input type="text" placeholder="Anton Hall" />
            <label>Email</label>
            <input type="text" />
            <label>
              issues<span style={{ color: "red" }}>*</span>
            </label>
            <textarea rows="10" cols="25"></textarea>
            {/* <button onClick={() => handleClose()}>Submit</button> */}
          </div>
        </Box>
      </Modal>
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
      <div className={styles.table} onClick={() => handleOpen()}>
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
