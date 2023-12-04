import { createStore } from "redux";

import itemReducer from "./Reducer";

const store = createStore(itemReducer);

export default store;