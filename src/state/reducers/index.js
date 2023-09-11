import { combineReducers } from "redux";
import reducer from "./sliderReducer";

const reducers = combineReducers({
    sliderValue: reducer
})

export default reducers