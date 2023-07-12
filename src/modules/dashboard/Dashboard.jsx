import React from "react";
import styles from "./Dashboard.module.scss";
import Grid from "@mui/material/Grid";
import {
  heart,
  business,
  tableSearch,
  tableUserImage,
  graphMenu,
  blueImage,
  grayImage,
  darkBlueImage,
} from "./../../assets";
import {
  Chart as ChartJS,
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement,
  Title,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const data = {
  labels: [
    "Starter",
    "Professional",
    "Small business",
    "Comapny",
    "Enterprise",
  ],
  datasets: [
    {
      data: [3, 6, 7, 9, 11],
      backgroundColor: ["#8A8A8A", "#01CAFD", "#2B4465", "yellow", "green"],
    },
  ],
};

const Dashboard = () => {
  const lineGraphLabels = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const listArray = [
    {
      image: heart,
      number: 2761,
      type: "Starter",
      perc: "65%",
      desc: "Starter subscription plan",
    },
    {
      image: business,
      number: 580,
      type: "Small Business",
      perc: "45%",
      desc: "Small Business",
    },
    {
      image: heart,
      number: 2761,
      type: "Starter",
      perc: "65%",
      desc: "Starter subscription plan",
    },
    {
      image: business,
      number: 90,
      type: "Company",
      perc: "-8%",
      desc: "Company Users",
    },
    {
      image: heart,
      number: 2761,
      type: "Starter",
      perc: "65%",
      desc: "Starter subscription plan",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <h1>Dashboard</h1>
        <select>
          <option>Mar 2023</option>
          <option>Mar 2024</option>
          <option>Mar 2025</option>
        </select>
      </div>
      <Grid container spacing={2}>
        {listArray.map((data, ind) => {
          return (
            <Grid
              item
              xs={6}
              sm={6}
              md={2}
              lg={2}
              key={ind}
              className={styles.analysis_grid}
            >
              <div className={styles.container_analysis_card}>
                <div className={styles.container_analysis_card_image}>
                  <img src={data.image} alt="image" />
                </div>
                <div className={styles.container_analysis_card_info}>
                  <p>{data.number}</p>
                  <p>{data.type}</p>
                  <p>
                    <span>{data.perc}</span> {data.desc}
                  </p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <div className={styles.container_graph}>
            <div className={styles.container_graph_right}>
              <div className={styles.container_graph_right_intro}>
                <p>Total users data on monthly basis</p>
                <img src={graphMenu} alt="graphMenu" />
              </div>
              <Line
                data={{
                  labels: lineGraphLabels,
                  datasets: [
                    {
                      data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
                      type: "line",
                      order: 2,
                      borderColor: "#01CAFD",
                      backgroundColor: "#01CAFD",
                      pointBackgroundColor: "#2B4465",
                      tension: 0.4,
                      fill: true,
                    },
                  ],
                }}
                options={options}
              ></Line>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={styles.container_graph_left}>
            <div className={styles.container_graph_left_intro}>
              <p>Registered User</p>
              <img src={graphMenu} alt="graphMenu" />
            </div>
            <Pie data={data} options={options}></Pie>
            <div className={styles.container_graph_left_desc}>
              <div className={styles.container_graph_left_desc_info}>
                <img src={grayImage} alt="grayImage" />
                <p>Starter</p>
              </div>
              <div className={styles.container_graph_left_desc_info}>
                <img src={blueImage} alt="grayImage" />
                <p>Professional</p>
              </div>
              <div className={styles.container_graph_left_desc_info}>
                <img src={darkBlueImage} alt="grayImage" />
                <p>Small Business</p>
              </div>
              <div className={styles.container_graph_left_desc_info}>
                <img src={grayImage} alt="grayImage" />
                <p>Comapny</p>
              </div>
              <div className={styles.container_graph_left_desc_info}>
                <img src={blueImage} alt="grayImage" />
                <p>Enterprise</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.container_table}>
        <div className={styles.container_table_intro}>
          <p>All Registered users</p>
          {/* <div className={styles.container_table_search_box}>
            <input type="text" placeholder="Search by Name" />
            <img src={tableSearch} alt="search" />
          </div> */}
        </div>
        <div className={styles.container_table_content}>
          <table>
            <thead>
              <tr>
                {/* <th>Tracking no</th> */}
                <th>User Name</th>
                <th>Display Packege</th>
                <th>No of Signature</th>
                {/* <th>Total Payment</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td data-label="no">#876364</td> */}
                <td data-label="userName">
                  <img src={tableUserImage} alt="tableUserImage" />
                  <span>Jane doe</span>
                </td>
                <td data-label="price">$60.000</td>
                <td data-label="singantureNo">10</td>
                {/* <td data-label="payment">$6.000.000</td> */}
              </tr>
              <tr>
                {/* <td data-label="no">#876368</td> */}
                <td data-label="userName">
                  <img src={tableUserImage} alt="tableUserImage" />
                  <span>Sepatu Marrie</span>
                </td>
                <td data-label="price">$400.000</td>
                <td data-label="singantureNo">20</td>
                {/* <td data-label="payment">$8.000.000</td> */}
              </tr>
              <tr>
                {/* <td data-label="no">#876364</td> */}
                <td data-label="userName">
                  <img src={tableUserImage} alt="tableUserImage" />
                  <span>Jane doe</span>
                </td>
                <td data-label="price">$60.000</td>
                <td data-label="singantureNo">10</td>
                {/* <td data-label="payment">$6.000.000</td> */}
              </tr>
              <tr>
                {/* <td data-label="no">#876368</td> */}
                <td data-label="userName">
                  {" "}
                  <img src={tableUserImage} alt="tableUserImage" />
                  <span>Sepatu Marrie</span>
                </td>
                <td data-label="price">$400.000</td>
                <td data-label="singantureNo">20</td>
                {/* <td data-label="payment">$8.000.000</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
