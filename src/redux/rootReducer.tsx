import { combineReducers } from "@reduxjs/toolkit";
import videoModalReducer from "./features/videoModalSlice";
const rootReducer = combineReducers({
  videoModal: videoModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
