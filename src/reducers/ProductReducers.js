
import {ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_REQUEST,
    CLEAR_ERROR,
PRODUCTS_DETAILS_FAIL,
PRODUCTS_DETAILS_SUCCESS,
PRODUCTS_DETAILS_REQUEST ,NEW_REVIEW_FAIL
,NEW_REVIEW_REQUEST,
NEW_REVIEW_SUCCESS,NEW_REVIEW_RESET} from '../constants/productConstatnts'
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



export const productDetailsReducer=(state= {product: {} },action)=>{

        switch(action.type){
            case PRODUCTS_DETAILS_REQUEST:
            return{
                ...state,
                loading:true
            }
            case PRODUCTS_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
            case PRODUCTS_DETAILS_FAIL:
            return{
                ...state,
               error:action.payload
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



export const NewReviewReducer=(state= {},action)=>{

    switch(action.type){
        case NEW_REVIEW_REQUEST:
        return{
            ...state,
            loading:true
        }
        case NEW_REVIEW_SUCCESS:
        return{
            loading:false,
            success:action.payload
        }
        case NEW_REVIEW_FAIL:
        return{
            ...state,
           error:action.payload
        }

        case NEW_REVIEW_RESET:
            return{
                ...state,
                success:false
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