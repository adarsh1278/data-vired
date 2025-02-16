import { combineReducers } from "@reduxjs/toolkit";
import videoModalReducer from "./features/videoModalSlice";

const rootReducer = combineReducers({
  videoModal: videoModalReducer,
});

export default rootReducer;