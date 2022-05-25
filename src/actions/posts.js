import {CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_BY_SEARCH} from '../constants/actionTypes'
import * as api from '../api/index.js'
//Action Creators

export const getPosts=(page)=> async (dispatch)=>{
    
    try {
        const {data}= await api.fetchPosts(page)
        dispatch({type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message)
    }
    
    // const action={type: 'FETCH_ALL', payload:[]}

    // dispatch(action);
}

export const getPostsBySearch=(searchQuery)=> async (dispatch)=>{
    try {
        const {data: { data }} = await api.fetchPostsBySearch(searchQuery)
        dispatch({type: FETCH_BY_SEARCH, payload: data });
// console.log(data)
    } catch (error) {
        console.log(error)
    }
}


export const createPost=(post) => async (dispatch)=>{
    
    try {
        const {data}= await api.createPost(post)
        dispatch({type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message)
    }
    
 
}

export const updatePost=(id, post) => async (dispatch)=>{
    
    try {
        const {data}= await api.updatePost(id,post)
        dispatch({type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message)
        // console.log(error) ye krne se zada info mil jati error k bare me

    }
    
 
}

export const deletePost=(id) => async (dispatch)=>{
    
    try {
    await api.deletePost(id)
        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error)
        // console.log(error) ye krne se zada info mil jati error k bare me

    }
    
 
}

export const likePost=(id) => async (dispatch)=>{
    
    try {
        const {data}= await api.likePost(id)
        dispatch({type: UPDATE, payload: data });
    } catch (error) {
        console.log(error)
        // console.log(error) ye krne se zada info mil jati error k bare me

    }
    
 
}