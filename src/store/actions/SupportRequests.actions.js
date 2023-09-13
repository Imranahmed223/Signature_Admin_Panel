import axios from "axios";
import { asyncAction } from "../../utils";
import { SupportRequestsConstants } from "../constants";
import toast from "react-hot-toast";

export const getAllSupportRequests = ({ page, search }, onSuccess, onError) => {
  return asyncAction(
    async (headers) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_ROOT}/api/support?limit=10&page=${page}${
          search ? `&search=${search}` : ""
        }`,
        headers
      );
      return data;
    },
    SupportRequestsConstants.getAllSupportRequests,
    onSuccess,
    onError
  );
};

export const deleteSupportRequest = (
  { page, search, _id },
  onSuccess,
  onError
) => {
  return asyncAction(
    async (headers, dispatch) => {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_ROOT}/api/support/delete/${_id}`,
        headers
      );

      dispatch(
        getAllSupportRequests({ page, search }, () => {
          toast.success("Deleted successfully!");
        })
      );

      return data;
    },
    SupportRequestsConstants.deleteSupportRequest,
    onSuccess,
    onError
  );
};

export const replyToSupportRequest = (
  { page, search, body, _id },
  onSuccess,
  onError
) => {
  return asyncAction(
    async (headers, dispatch) => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_ROOT}/api/support/reply/${_id}`,
        body,
        headers
      );

      dispatch(
        getAllSupportRequests({ page, search }, () => {
          toast.success("Replied successfully!");
        })
      );

      return data;
    },
    SupportRequestsConstants.deleteSupportRequest,
    onSuccess,
    onError
  );
};
