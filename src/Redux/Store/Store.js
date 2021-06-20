import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import ToDoReducers from "../Reducers/ToDoReducers";
const Store=createStore(ToDoReducers,composeWithDevTools(applyMiddleware(logger)))
export default Store