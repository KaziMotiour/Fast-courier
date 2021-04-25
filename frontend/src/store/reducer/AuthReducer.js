import React from 'react'

import {AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_LOGIN_FAIL, LOGGED_IN_USER_INFO, NEW_ORDER_COUNT, LIST_OF_MERCHANT} from '../actions/ActionType'


const initialState = ({
    access_token : localStorage.getItem('access_token'),
    loading:false,
    login_error:null,
    loggedinUserInfo:null,
    NotificationCount:null,
    merchentList:null,
})

const authStart = (state, action) =>({
    ...state,
    loading:true
})
const authSuccess = (state, action) =>({
    ...state,
    access_token:action.access,
    loading:false,
   
})
const authFail = (state, action) =>({
    ...state,
    login_error:action.error,
    loading:false

})
const authLogout = (state, action) =>({
    ...state,
    access_token:null
})
const loggedinUserInfo = (state, action) =>({
    ...state,
    loggedinUserInfo:action.loggedinUserInfo
})
const notification = (state, action) =>({
    ...state,
    NotificationCount: action.notificationCount
})

const merchentList = (state, action) =>({
    ...state,
    merchentList: action.merchentList
})



const AuthReducer = (state = initialState, action) =>{
    switch(action.type){

        case AUTH_START: return authStart(state, action)
        case AUTH_SUCCESS: return authSuccess(state, action)
        case AUTH_LOGIN_FAIL: return authFail(state, action)
        case AUTH_LOGOUT: return authLogout(state, action)
        case LOGGED_IN_USER_INFO: return loggedinUserInfo(state, action)
        case NEW_ORDER_COUNT: return notification(state, action)
        case LIST_OF_MERCHANT: return merchentList(state, action)
        default: return state

    }

}

export default AuthReducer;