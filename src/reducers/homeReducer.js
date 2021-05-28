import {ActionTypes} from '../actions/actionTypes'

const initialState = {
    items: [],
    errorMessage: '',
    error: ''
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.items,
                errorMessage: ''
            }
        
        case ActionTypes.ERROR_LOGIN:
            return {
                ...state,
                error: action.error,
                errorMessage : 'Не удалось загрузить список'
            }
        default:
        return state
    }
}

export default homeReducer