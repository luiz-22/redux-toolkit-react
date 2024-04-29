import { combineReducers } from "redux";
import walletSlice from "./walletSlice"
import toDoListSlice from "./toDoListSlice"
import apiSlice from "./apiSlice"

const reducers = {
    wallet: walletSlice,
    toDoList: toDoListSlice,
    api: apiSlice
}

const reducer = combineReducers(reducers)

export default reducer
