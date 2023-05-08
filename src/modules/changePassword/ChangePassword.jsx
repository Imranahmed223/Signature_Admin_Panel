import React, { useState } from "react";
import styles from "./ChangePassword.module.scss";
import { share } from "./../../assets";
import OtpInput from "react-otp-input";

const ChangePassword = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.child}>
          <h1 className={styles.child_heading}>Change Password</h1>
          <p className={styles.child_desc}>
            Your Password has Expired, Please choose a New Password
          </p>
          <div className={styles.child_form}>
            <center>
              <h3>Email Sent</h3>
              <img src={share} alt="share" />
              <p>
                Enter your six digit code sent on <br />
                the given email
              </p>
            </center>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                border: `1px solid #4EDAFC`,
                fontSize: "20px",
                padding: "2px",
                marginRight: "1.5rem",
                borderRadius: "5px",
                marginTop: "1.5rem",
              }}
              containerStyle={{
                display: "flex",
                justifyContent: "center",
              }}
            />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
