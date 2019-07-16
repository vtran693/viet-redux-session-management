import { combineReducers } from "redux";
import userSessionReducer from "./userSession";
import mainMenuReducer from "./mainMenu";

const rootReducer = combineReducers(userSessionReducer, mainMenuReducer);

export default rootReducer;