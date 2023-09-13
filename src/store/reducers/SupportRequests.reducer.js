import { SupportRequestsConstants } from "../constants";

const initialState = {
  results: [],
  page: 1,
  limit: 0,
  totalPages: 1,
  totalResults: 1,
  loading: false,
};

const supportRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case SupportRequestsConstants.getAllSupportRequests.request:
      return {
        ...state,
        loading: true,
      };
    case SupportRequestsConstants.getAllSupportRequests.success:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case SupportRequestsConstants.getAllSupportRequests.error:
      return {
        ...state,
        loading: false,
      };

    case SupportRequestsConstants.deleteSupportRequest.request:
      return {
        ...state,
        loading: true,
      };
    case SupportRequestsConstants.deleteSupportRequest.success:
      return {
        ...state,
        loading: true,
      };
    case SupportRequestsConstants.deleteSupportRequest.error:
      return {
        ...state,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default supportRequestReducer;
