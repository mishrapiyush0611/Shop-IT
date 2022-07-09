import axios from "axios";
import {ALL_PRODUCTS_FAIL,ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_REQUEST,CLEAR_ERROR,PRODUCTS_DETAILS_FAIL,PRODUCTS_DETAILS_REQUEST,PRODUCTS_DETAILS_SUCCESS,
    NEW_REVIEW_FAIL
    ,NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,NEW_REVIEW_RESET } from '../constants/productConstatnts'

export const getProducts=(keyword='')=>async(dispatch)=>{
    try{
        dispatch({
            type:ALL_PRODUCTS_REQUEST
        })
       const {data}=await axios.get('http://localhost:4000/api/v1/products?keyword='+keyword)
       console.log(data)
        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload:error.response.data.message
        })
    }
}
export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:PRODUCTS_DETAILS_REQUEST
        })
       const {data}=await axios.get(`/api/v1/product/${id}`)
       console.log(data.product)
        dispatch({
            type:PRODUCTS_DETAILS_SUCCESS,
            payload:data.product
        })
    }
    catch(error){
        dispatch({
            type:PRODUCTS_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}
export const newReview=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:NEW_REVIEW_REQUEST
        })
        const config={
            headers:{
                'Content-type':"application/json"
            }
        }
       const {data}=await axios.put(`/api/v1/review`,config)
       console.log(data.product)
        dispatch({
            type:NEW_REVIEW_SUCCESS,
            payload:data.product
        })
    }
    catch(error){
        dispatch({
            type:NEW_REVIEW_FAIL,
            payload:error.response.data.message
        })
    }
}
export const clearErrors=() => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERROR
    })
}