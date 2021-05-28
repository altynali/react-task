import axios from 'axios'
import {ActionTypes} from './actionTypes'

export const fetchItems = () => {
    return async dispatch => {
        await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')   
        .then(response =>{
            dispatch(fetchItemsSuccess(response.data))
        })
        .catch(error =>{
            dispatch(fetchItemsFail(error))
        })
    }
}

export const fetchItemsSuccess = (items) => {
    return{
        type: ActionTypes.FETCH_ITEMS_SUCCESS,
        items
    }
}

export const fetchItemsFail = (error) => {
    return{
        type: ActionTypes.FETCH_ITEMS_FAIL,
        error
    }
}