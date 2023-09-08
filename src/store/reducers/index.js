import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth.reducer";
import dashboardReducer from "./dashboard.reducer";

const persistConfig = {
  key: "loginInfo",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  authReducer: persistedAuthReducer,
  dashboardReducer,
});

export default rootReducer;
