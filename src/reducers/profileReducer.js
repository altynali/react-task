import {ActionTypes} from '../actions/actionTypes'

const initialState = {
    profile: null,
    errorMessage: '',
    error: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile
            }
        
        case ActionTypes.FETCH_PROFILE_FAIL:
            return {
                ...state,
                errorMessage : 'Не удалось загрузить список',
                error: action.error
            }
        default:
        return state
    }
}

export default profileReducer