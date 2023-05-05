import React from "react";
import styles from "./Login.module.scss";
import { line, google } from "./../../assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.login_container_box}>
          <center>
            <h1>Sign in</h1>
          </center>
          <div className={styles.login_container_box_form}>
            <form>
              <label>Email</label>
              <br></br>
              <input placeholder="example@email.com" />
              <div className={styles.login_container_box_form_question}>
                <label>Password</label>
                <p>Forgot password?</p>
              </div>
              <input type="password" placeholder="*********" />
              <button onClick={() => navigate("/dashboard")}>Login</button>
            </form>
          </div>
          <div className={styles.login_container_box_options}>
            <img src={line} alt="line" />
            <p>or continue with</p>
            <img src={line} alt="line" />
          </div>
          <div className={styles.login_container_box_google_btn}>
            <img src={google} alt="google" />
            <p>Continue with google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
