import {ActionTypes} from "../Constants/Action-Types"

export const allProducts=(products)=>{
    return{
        type: ActionTypes.ALL_PRODUCTS,
        payload:products
    }
}
export const selectedProducts=(products)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload:products
    }
}
export const removeSelectedProducts=(products)=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload:products
    }
}