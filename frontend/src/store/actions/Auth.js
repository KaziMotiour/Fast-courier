import axios from 'axios'
import {AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_LOGIN_FAIL, LOGGED_IN_USER_INFO, NEW_ORDER_COUNT, LIST_OF_MERCHANT} from './ActionType'

export const auth_start = () =>({
    type:AUTH_START
})

export const auth_success = (token) =>({
type:AUTH_SUCCESS,
access:token
})

export const auth_login_fail = (errors) =>(
{
  type:AUTH_LOGIN_FAIL,
  error:errors
})

export const auth_logout = () =>(
localStorage.removeItem('access_token'),  
{
  type:AUTH_LOGOUT
}
)

export const loggedin_user_info = (data) =>(
  {
  type: LOGGED_IN_USER_INFO,
  loggedinUserInfo: data

})

export const new_order_count = (data) =>(
  {
  type: NEW_ORDER_COUNT,
  notificationCount: data

})

export const merchent_list = (data) =>(
  {
  type: LIST_OF_MERCHANT,
  merchentList: data

})




export const UserLogin = (username, password) => async dispatch =>{

    try{
      dispatch(auth_start())
        await axios.post('http://127.0.0.1:8000/api/token/',{username, password}).then(res =>{
          localStorage.setItem('access_token', res.data.access)
          dispatch(auth_success(res.data.access))
        }).catch(function (error) {
            // handle error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data.detail, 'res_data');
                const errors = error.response.data.detail
                dispatch(auth_login_fail(errors))
                // console.log(error);
                // console.log(error.response.status, 'res_status');
                // console.log(error.response.headers, 'res_haders');
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                // console.log(error.request,'req');
              } else {
                // Something happened in setting up the request that triggered an Error
                // console.log('Error', error.message,'msg');
              }
              // console.log(error.config);
            })
    }catch(err){
        // console.log(err,'err');
    }


}


export const LoggedUserInfo = (config) => async dispatch =>{
  console.log(config,'logged configgggg');
  try{
          await axios.get('http://127.0.0.1:8000/userProfile', config).then(res =>{
    
          dispatch(loggedin_user_info(res.data[0]))
      })
  }catch(err){
      
    console.log(err,'err');
  }


}

export const NewOrderCount = (config) => async dispatch =>{
  console.log(config,'logged configgggg');
  try{
          await axios.get('http://127.0.0.1:8000/notification/count', config).then(res =>{
          
          dispatch(new_order_count(res.data))
      
        })
  }catch(err){   
    console.log(err,'err');
  }
}

export const MerchentList = (config) => async dispatch =>{
  console.log(config,'logged configgggg');
  try{
          await axios.get('http://127.0.0.1:8000/merchentlist', config).then(res =>{
          // console.log(res.data, 'merchent list');
          dispatch(merchent_list(res.data))
      
        })
  }catch(err){   
    console.log(err,'err');
  }
}


