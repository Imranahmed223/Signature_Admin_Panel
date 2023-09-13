import { GlobalConstants } from "../constants";

export const setGlobalLoadingAction = (payload) => ({
  type: GlobalConstants.SET_GLOBAL_LOADING,
  payload,
});
