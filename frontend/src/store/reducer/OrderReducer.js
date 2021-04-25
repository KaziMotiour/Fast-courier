import React from 'react'

import {MARCHENT_ORDER_LIST, ADMIN_ORDER_LISR, PLACE_ORDER_SUCCESS, REMOVE_SUCCESS_PLACED} from '../actions/ActionType'


const initialState = ({
    merchentOrderList : null,
    AdminOrderList:null,
    orderCreateSuccess:false,
    
})


const merchentOrderList = (state, action) =>({
    ...state,
    merchentOrderList: action.order_list
})
const adminOrderList = (state, action) =>({
    ...state,
    AdminOrderList: action.order_list
})

const oderPlacedSuccess = (state, action) =>({
    ...state,
    orderCreateSuccess: true
})
const removePlacedSuccess = (state, action) =>({
    ...state,
    orderCreateSuccess: false
})




const OrderReducer = (state = initialState, action) =>{
    switch(action.type){

        case MARCHENT_ORDER_LIST: return merchentOrderList(state, action)
        case ADMIN_ORDER_LISR: return adminOrderList(state, action)
        case PLACE_ORDER_SUCCESS: return oderPlacedSuccess(state, action)
        case REMOVE_SUCCESS_PLACED: return removePlacedSuccess(state, action)
        default: return state

    }

}

export default OrderReducer;