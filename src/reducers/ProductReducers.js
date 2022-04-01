
import {ALL_PRODUCTS_FAIL,ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_REQUEST,CLEAR_ERROR } from '../constants/productConstatnts'
export const productReducer=(state={products:[]},action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return {
                loading:true,
                products:[]
            }
            case ALL_PRODUCTS_SUCCESS:
                return {
                    loading:false,
                    products:action.payload.products,
                }
            case ALL_PRODUCTS_FAIL:
                return {
                    loading:false,
                    error:action.payload,  
                }
            case CLEAR_ERROR:
                return{
                    ...state,
                    error:null
                }
        default:
            return state;

    }
}