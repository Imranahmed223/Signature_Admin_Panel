import { asyncAction } from "../../utils";
import { DashboardConstants } from "../constants/dashboard.constant";
import axios from "axios";

export const getDashboardData = (payload, onSuccess, onError) => {
  return asyncAction(
    async (headers) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_ROOT}/api/auth/admin/app-dashboard`,
        headers
      );
      return data;
    },
    DashboardConstants.getDashboardData,
    onSuccess,
    onError
  );
};
