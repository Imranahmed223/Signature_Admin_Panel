import React from "react";
import styles from "./SubscriptionUpdate.module.scss";
import { search, billingCard, downArrow, horizontalLine } from "./../../assets";

const SubscriptionUpdate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <h1>Subscription</h1>
        <select>
          <option>Mar 2023</option>
          <option>Mar 2024</option>
          <option>Mar 2025</option>
        </select>
      </div>
      <div className={styles.container_intro}>
        <div className={styles.container_intro_left_side}>
          <div>
            <p>Client name</p>
            <span>Joseph Carter</span>
          </div>
          <div>
            <p>Status</p>
            <span style={{ color: "#6EC4CF" }}>Active</span>
          </div>
          <div>
            <p>Subscription Plan</p>
            <span>Company</span>
          </div>
          <div>
            <p>Billing Cycle</p>
            <span>By Card</span>
          </div>
          <div>
            <p>Price</p>
            <span>$2.99</span>
          </div>
          <div>
            <p>Payment Due</p>
            <span>Valid</span>
          </div>
        </div>
        <div className={styles.container_intro_right_side}>
          <input type="text" placeholder="Search by Name" />
          <img src={search} alt="search" />
        </div>
      </div>
      <div className={styles.container_billing_info}>
        <h1>Plan and billing</h1>
        <p>Payment method</p>
      </div>
      <div className={styles.container_billing_card}>
        <div className={styles.container_billing_card_intro}>
          <img
            src={billingCard}
            alt="billingCard"
            className={styles.container_billing_card_intro_first_image}
          />
          <img
            src={downArrow}
            alt="downArrow"
            className={styles.container_billing_card_intro_second_image}
          />
        </div>
        <div className={styles.container_billing_card_input}>
          <input type="text" placeholder="**** **** **** 6832" />
        </div>
      </div>
      <div className={styles.container_billing_card_horizontal_line}>
        <img src={horizontalLine} alt="horizontalLine" />
      </div>
      <div className={styles.container_billing_card_email_info}>
        <p>Billing email</p>
        <input type="text" placeholder="contact@xyz.com" />
      </div>
      <div className={styles.container_billing_card_horizontal_line}>
        <img src={horizontalLine} alt="horizontalLine" />
      </div>
      <div className={styles.container_billing_card_table_heading}>
        <h1>Billing history</h1>
      </div>
      <div className={styles.container_billing_card_table}>
        <div className={styles.overflow}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Paid</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apr 6,2023</td>
                <td>$40.00</td>
                <td>$40.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.container_billing_card_btns}>
        <div className={styles.container_billing_card_btns_btn1}>
          <button>Cancel</button>
        </div>
        <div className={styles.container_billing_card_btns_btn2}>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionUpdate;
