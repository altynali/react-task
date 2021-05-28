import {ActionTypes} from '../actions/actionTypes'

const initialState = {
    isLoggedIn: false,
    errorMessage: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGGED_IN_SUCCESS:
            return {
                isLoggedIn: true,
                errorMessage: ''
            }
        
        case ActionTypes.ERROR_LOGIN:
            return {
                isLoggedIn: false,
                errorMessage : 'Имя пользователя или пароль введены не верно'
            }

        case ActionTypes.LOGOUT:
            return{
                isLoggedIn: false,
                errorMessage: ''
            }
        default:
        return state
    }
}

export default loginReducer