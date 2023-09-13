import axios from "axios";
import { asyncAction } from "../../utils";
import { manageEmployeeconstants } from "../constants";

export const inviteNewUser = ({ body }, onSuccess, onError) => {
  return asyncAction(
    async (headers) => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_ROOT}/api/auth/admin/inviteEmployee`,
        body,
        headers
      );
      return data;
    },
    manageEmployeeconstants.inviteNewUser,
    onSuccess,
    onError
  );
};

export const getAllUsers = ({ page }, onSuccess, onError) => {
  return asyncAction(
    async (headers) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_ROOT}/api/auth/admin/queryAllEmployees?limit=10&page=${page}`,
        headers
      );
      return data;
    },
    manageEmployeeconstants.getAllUsers,
    onSuccess,
    onError
  );
};
