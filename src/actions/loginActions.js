import { ActionTypes } from "./actionTypes";

export const login = (user, password) => {
    
    if(user === 'Admin' && password === '12345'){
        return{
            type: ActionTypes.LOGGED_IN_SUCCESS
        } 
    }
    else{
        return{
            type: ActionTypes.ERROR_LOGIN
        }
    }
}

export const logout = () => {
    return{
        type: ActionTypes.LOGOUT
    }   
}