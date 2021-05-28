import { combineReducers } from "redux";
import loginReducer from "./loginReducer"
import homeReducer from "./homeReducer"
import postsReducer from "./postsReducer"
import profileReducer from "./profileReducer"


const rootReducer = combineReducers({
    loginReducer,
    homeReducer,
    postsReducer,
    profileReducer
})

export default rootReducer