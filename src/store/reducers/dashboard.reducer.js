import { authConstant, dashboardConstant } from "../constants";

const initialState = {
  data: {},
  errors: [],
  loading: false,
  message: "",
  sessionExpireError: "",
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case dashboardConstant.GET_DASHBOARD_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case dashboardConstant.GET_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case dashboardConstant.GET_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.err,
      };
    case authConstant.SESSION_EXPIRE:
      return {
        ...state,
        loading: false,
        sessionExpireError: action.payload.err,
      };
    case authConstant.CLEAR_MESSAGES:
      return {
        ...state,
        loading: false,
        message: "",
      };
    case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: [],
        sessionExpireError: "",
      };
    default:
      return state;
  }
};

export default dashboardReducer;
