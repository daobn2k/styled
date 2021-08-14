import { ActionType } from "../contants/actionType"

export const setProducts = (products) => {
    return {
        type:ActionType.SET_PRODUCTS,
        payload:products,
    }
}
export const selectedProduct = (products) => {
    return {
        type:ActionType.SELECTED_PRODUCT,
        payload:products,
    }
}
export const removeProduct = (products) => {
    return {
        type:ActionType.REMOVE_PRODUCT,
        payload:products,
    }
}