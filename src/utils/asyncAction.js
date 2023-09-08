import { toast } from "react-hot-toast";
import { logoutUser } from "../store/actions/auth.action";

export const asyncAction = (cb, actionNames, onSuccess, onError) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionNames.request });
      const accessToken = getState().authReducer?.tokens?.access?.token ?? "";
      const headers = {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
      const payload = await cb(headers, dispatch, getState);
      dispatch({ type: actionNames.success, payload });
      onSuccess && onSuccess(payload);
    } catch (error) {
      dispatch({ type: actionNames.error });
      if (error?.response?.status === 401) {
        toast.error("Session has been expired. Please log in again!");
        dispatch(logoutUser());
        return;
      }
      onError
        ? onError(error)
        : toast.error(error?.response?.data?.message ?? error?.message);
      console.log(error);
    }
  };
};

export default asyncAction;
