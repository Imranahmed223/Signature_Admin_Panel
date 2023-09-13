import { manageEmployeeconstants } from "../constants";

const initialState = {
  results: [],
  page: 1,
  limit: 0,
  totalPages: 1,
  totalResults: 1,
  loading: false,
};

const manageEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case manageEmployeeconstants.inviteNewUser.request:
      return {
        ...state,
        loading: true,
      };
    case manageEmployeeconstants.inviteNewUser.success:
      return {
        ...state,
        loading: false,
      };
    case manageEmployeeconstants.inviteNewUser.error:
      return {
        ...state,
        loading: false,
      };

    case manageEmployeeconstants.getAllUsers.request:
      return {
        ...state,
        loading: true,
      };
    case manageEmployeeconstants.getAllUsers.success:
      return {
        ...state,
        loading: false,
        ...(action.payload ?? {}),
      };
    case manageEmployeeconstants.getAllUsers.error:
      return {
        ...state,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default manageEmployeeReducer;
