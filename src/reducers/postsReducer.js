import {ActionTypes} from '../actions/actionTypes'

const initialState = {
    posts: [],
    errorMessage: '',
    error: ''
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                errorMessage: ''
            }
        
        case ActionTypes.ERROR_LOGIN:
            return {
                ...state,
                errorMessage : 'Не удалось загрузить список',
                error: action.error
            }
        default:
        return state
    }
}

export default homeReducer