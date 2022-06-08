import {legacy_createStore} from "redux"
import { reducer } from "../Redux/reducer"
let initialState={todos:[]}
export const store=legacy_createStore(reducer,initialState)