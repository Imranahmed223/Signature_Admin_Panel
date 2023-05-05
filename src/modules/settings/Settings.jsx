import React from "react";
import styles from "./Settings.module.scss";
import { checkBox } from "./../../assets";

const Settings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.child}>
          <h1 className={styles.child_heading}>Change Password</h1>
          <p className={styles.child_desc}>
            Your Password has Expired, Please choose a New Password
          </p>
          <div className={styles.child_form}>
            <form>
              <label>Old Password</label>
              <br></br>
              <input type="password" placeholder="*********" />
              <div className={styles.child_form_question}>
                <label>New Password</label>
              </div>
              <input type="password" placeholder="*********" />
              <div className={styles.child_form_question}>
                <label>Confirm New Password</label>
              </div>
              <input type="password" placeholder="*********" />
              <button>Reset Password</button>
              <div className={styles.child_form_question}>
                <p>Two factor authentication</p>
                {/* <input type="checkbox" checked /> */}
                <img src={checkBox} alt="checkBox" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
