import { createStore } from "redux";
import { chatReducer } from "./reducers/globalReducers";

const store = createStore(chatReducer);

export default store;
