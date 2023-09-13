import { SubscriptionsConstants } from "../constants";

const initialState = {
  results: [],
  page: 1,
  limit: 0,
  totalPages: 1,
  totalResults: 1,
  loading: false,
};

const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SubscriptionsConstants.getAllSubscriptions.request:
      return {
        ...state,
        loading: true,
      };
    case SubscriptionsConstants.getAllSubscriptions.success:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case SubscriptionsConstants.getAllSubscriptions.error:
      return {
        ...state,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default subscriptionReducer;
