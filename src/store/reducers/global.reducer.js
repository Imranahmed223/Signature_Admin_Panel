import { GlobalConstants } from "../constants";

const initialState = {
  globalLoading: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalConstants.SET_GLOBAL_LOADING:
      return {
        ...state,
        globalLoading: action.payload ?? false,
      };
    default:
      return { ...state };
  }
};

export default globalReducer;
