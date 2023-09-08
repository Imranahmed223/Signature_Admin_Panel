import { asyncAction } from "../../utils";
import { authConstant } from "./../constants";
import axios from "axios";

// export const Login = (admin) => {
//   return async (dispatch) => {
//     dispatch({ type: authConstant.ADMIN_LOGIN_REQUEST });
//     try {
//       const token = localStorage.getItem("adminToken");
//       const result = await axios.post(
//         `${process.env.REACT_APP_ROOT}/api/auth/admin/login`,
//         admin,
//         {
//           headers: {
//             Authorization: token ? `Bearer ${token}` : "",
//           },
//         }
//       );
//       const { data } = result;
//       localStorage.setItem("adminToken", data.tokens.access.token);
//       localStorage.setItem("adminRefreshToken", data.tokens.refresh.token);
//       localStorage.setItem("admin", JSON.stringify(data.user));
//       dispatch({
//         type: authConstant.ADMIN_LOGIN_SUCCESS,
//         payload: "Login Successfully",
//       });
//     } catch (error) {
//       dispatch({
//         type: authConstant.ADMIN_LOGIN_FAILURE,
//         payload: { err: error.response.data.message },
//       });
//     }
//   };
// };

// export const logOut = () => {
//   return async (dispatch) => {
//     dispatch({ type: authConstant.ADMIN_LOGOUT_REQUEST });
//     try {
//       localStorage.clear();
//       dispatch({
//         type: authConstant.ADMIN_LOGOUT_SUCCESS,
//         payload: "Logout Successfully",
//       });
//     } catch (error) {
//       dispatch({
//         type: authConstant.ADMIN_LOGOUT_FAILURE,
//         payload: { err: error.response.data.message },
//       });
//     }
//   };
// };

// // Clearing Errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: authConstant.CLEAR_ERRORS });
// };

// // Clearing Messages
// export const clearMessages = () => async (dispatch) => {
//   dispatch({ type: authConstant.CLEAR_MESSAGES });
// };

export const loginUser = ({ body }, onSuccess, onError) => {
  return asyncAction(
    async () => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_ROOT}/api/auth/admin/login`,
        body
      );
      return data;
    },
    authConstant.loginUser,
    onSuccess,
    onError
  );
};

export const logoutUser = () => ({
  type: authConstant.logoutUser,
});
