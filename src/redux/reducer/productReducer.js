import { ActionType } from "../contants/actionType";

const InitialState = {
    products:[],
}

export const productReducer = (state = InitialState , {type,payload}) =>{
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {...state,products:payload}
        default:
            return state
    }
}