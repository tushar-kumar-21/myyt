import { combineReducers } from "redux";
import { authReducer } from "../slices/auth";
import { commonReducer } from "../slices/commonSlices";

const rootReducer = combineReducers({
   authReducer,
   commonReducer
});

export default rootReducer;