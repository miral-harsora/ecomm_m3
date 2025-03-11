import axios from "axios"
import { ADD_TO_CART, ADD_TO_WISHLIST, GET_CATEGORIES, GET_CATEGORIZED_PRODUCTS, GET_PRODUCTS, GET_SINGLE_PRODUCT, REMOVE_FROM_CART, REMOVE_FROM_WL, SEARCH_PROD } from "./actionType"

export const getProducts = () => {
    return (dispatch) => {
        axios.request("https://dummyjson.com/products?limit=0")
            .then((res) => {
                dispatch(
                    ((data) => {
                        return {
                            type: GET_PRODUCTS,
                            payload: {
                                httpResponse: data
                            }
                        }
                    })(res.data)
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getCategories=()=>{
    return (dispatch) => {
        axios.request('https://dummyjson.com/products/category-list')
            .then((res) => {
                dispatch(
                    ((data) => {
                        return {
                            type: GET_CATEGORIES,
                            payload: {
                                httpResponse: data
                            }
                        }
                    })(res.data)
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getCategorizedProducts=(value)=>{
    return {
        type:GET_CATEGORIZED_PRODUCTS,
        payload:value
    }
}
export const getSingleProduct=(value)=>{
    return {
        type:GET_SINGLE_PRODUCT,
        payload:value
    }
}
export const addToCart=(value)=>{
    return {
        type:ADD_TO_CART,
        payload:value
    }
}
export const addToWishlist=(value)=>{
    return {
        type:ADD_TO_WISHLIST,
        payload:value
    }
}
export const searchProd=(value)=>{
    return {
        type:SEARCH_PROD,
        payload:value
    }
}
export const removeFromWL=(value)=>{
    return{
        type:REMOVE_FROM_WL,
        payload:value
    }
}
export const removeFromCart=(value)=>{
    return{
        type:REMOVE_FROM_CART,
        payload:value
    }
}