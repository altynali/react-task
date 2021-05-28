import axios from 'axios'
import {ActionTypes} from './actionTypes'

export const fetchProfile = () => {
    return async dispatch => {
        await axios.get('https://jsonplaceholder.typicode.com/users/1')   
        .then(response =>{
            dispatch(fetchProfileSuccess(response.data))
        })
        .catch(error =>{
            dispatch(fetchProfileFail(error))
            console.log(error);
        })
    }
}

export const fetchProfileSuccess = (profile) => {
    return{
        type: ActionTypes.FETCH_PROFILE_SUCCESS,
        profile
    }
}

export const fetchProfileFail = (error) => {
    return{
        type: ActionTypes.FETCH_PROFILE_FAIL,
        error
    }
}