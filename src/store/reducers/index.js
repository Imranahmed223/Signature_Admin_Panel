import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth.reducer";
import dashboardReducer from "./dashboard.reducer";
import supportRequestReducer from "./SupportRequests.reducer";
import subscriptionReducer from "./subscription.reducer";
import manageEmployeeReducer from "./manageEmployee.reducer";
import globalReducer from "./global.reducer";

const persistConfig = {
  key: "loginInfo",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  authReducer: persistedAuthReducer,
  dashboardReducer,
  supportRequestReducer,
  subscriptionReducer,
  manageEmployeeReducer,
  globalReducer,
});

export default rootReducer;
