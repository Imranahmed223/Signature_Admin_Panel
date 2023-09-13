import axios from "axios";
import { asyncAction } from "../../utils";
import { SubscriptionsConstants } from "../constants";

export const getAllSubscriptions = ({ page, search }, onSuccess, onError) => {
  return asyncAction(
    async (headers) => {
      const { data } = await axios.get(
        `${
          process.env.REACT_APP_ROOT
        }/api/subscription/allSubscriptions?limit=10&page=${page}${
          search ? `&search=${search}` : ""
        }`,
        headers
      );
      return data;
    },
    SubscriptionsConstants.getAllSubscriptions,
    onSuccess,
    onError
  );
};
