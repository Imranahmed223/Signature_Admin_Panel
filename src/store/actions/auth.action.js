import { authConstant } from "./../constants";
import axios from "axios";

export const Login = (admin) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.ADMIN_LOGIN_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      const result = await axios.post(
        `${process.env.REACT_APP_ROOT}/api/auth/admin/login`,
        admin,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      sessionStorage.setItem("adminToken", data.tokens.access.token);
      sessionStorage.setItem("adminRefreshToken", data.tokens.refresh.token);
      sessionStorage.setItem("admin", JSON.stringify(data.user));
      dispatch({
        type: authConstant.ADMIN_LOGIN_SUCCESS,
        payload: "Login Successfully",
      });
    } catch (error) {
      dispatch({
        type: authConstant.ADMIN_LOGIN_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: authConstant.ADMIN_LOGOUT_REQUEST });
    try {
      sessionStorage.clear();
      dispatch({
        type: authConstant.ADMIN_LOGOUT_SUCCESS,
        payload: "Logout Successfully",
      });
    } catch (error) {
      dispatch({
        type: authConstant.ADMIN_LOGOUT_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_ERRORS });
};

// Clearing Messages
export const clearMessages = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_MESSAGES });
};
