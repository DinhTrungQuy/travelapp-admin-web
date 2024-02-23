import { combineReducers } from "redux";
import authSlice from "./slice/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  blacklist: ["loading", "error"],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
});
