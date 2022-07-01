import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterReducer";
import { todosReducer } from "./TodosReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todosReducer,
});

let store; //export 'default' (imported as 'store') was not found in './state/Store' (possible exports: store)
export default store = createStore(rootReducer);
