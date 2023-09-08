import { DashboardConstants } from "../constants/dashboard.constant";

const initialState = {
  totalSubscriptions: 0,
  totalUsers: 0,
  allUsers: [],
  usersPieChart: {
    unsubscribed: 0,
    starter: 0,
    professional: 0,
    enterprise: 0,
    company: 0,
    smallBusiness: 0,
  },
  percentages: {
    unsubscribed: 0,
    starter: 0,
    professional: 0,
    enterprise: 0,
    company: 0,
    smallBusiness: 0,
  },
  monthlyData: {
    September: 12,
  },
  loading: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DashboardConstants.getDashboardData.request:
      return {
        ...state,
        ...initialState,
        loading: true,
      };
    case DashboardConstants.getDashboardData.success:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case DashboardConstants.getDashboardData.error:
      return {
        ...state,
        ...initialState,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default dashboardReducer;
