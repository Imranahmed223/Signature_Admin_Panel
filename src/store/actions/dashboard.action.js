import { authConstant, dashboardConstant } from "./../constants";
import axios from "axios";

export const DashboardData = () => {
  return async (dispatch) => {
    dispatch({
      type: dashboardConstant.GET_DASHBOARD_DATA_REQUEST,
    });
    try {
      const token = localStorage.getItem("adminToken");
      const result = await axios.get(
        `${process.env.REACT_APP_ROOT}/api/auth/admin/app-dashboard`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      dispatch({
        type: dashboardConstant.GET_DASHBOARD_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        localStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: "Session has been expired" },
        });
      } else {
        dispatch({
          type: dashboardConstant.GET_DASHBOARD_DATA_FAILURE,
          payload: { err: error.response.data.message },
        });
      }
    }
  };
};
