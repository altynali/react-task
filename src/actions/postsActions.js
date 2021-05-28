import axios from 'axios'
import {ActionTypes} from './actionTypes'

export const fetchPosts = () => {
    return async dispatch => {
        await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')   
        .then(response =>{
            dispatch(fetchPostsSuccess(response.data))
        })
        .catch(error =>{
            dispatch(fetchItemsFail(error))
        })
    }
}

export const fetchPostsSuccess = (posts) => {
    return{
        type: ActionTypes.FETCH_POSTS_SUCCESS,
        posts
    }
}

export const fetchItemsFail = (error) => {
    return{
        type: ActionTypes.FETCH_POSTS_FAIL,
        error
    }
}