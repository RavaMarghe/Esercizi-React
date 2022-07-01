import { createStore } from "redux";
import { counterReducer } from "./CounterReducer";

let store //export 'default' (imported as 'store') was not found in './state/Store' (possible exports: store)
export default store = createStore(counterReducer);
