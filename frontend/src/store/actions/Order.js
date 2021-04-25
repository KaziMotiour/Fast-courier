import React from 'react'
import axios from 'axios'
import {MARCHENT_ORDER_LIST, ADMIN_ORDER_LISR, REMOVE_SUCCESS_PLACED, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL} from '../actions/ActionType'




export const marchent_order = (data) =>(
    {
    type: MARCHENT_ORDER_LIST,
    order_list: data
  
  })
  
  export const Admin_order_list = (data) =>(
    {
    type: ADMIN_ORDER_LISR,
    order_list: data
  
  })


export const MerchentOrder = (config) => async dispatch =>{
    console.log(config,'logged configgggg');
    try{
            await axios.get('http://127.0.0.1:8000/merchantOrders', config).then(res =>{
            // console.log(res.data,'orderlist');
            dispatch(marchent_order(res.data))
        
          })
    }catch(err){   
      console.log(err,'err');
    }
  }

export const AdminOrder = (config) => async dispatch =>{
    console.log(config,'logged configgggg');
    try{
            await axios.get('http://127.0.0.1:8000/orderList', config).then(res =>{
            console.log(res.data,'orderlist');
            dispatch(Admin_order_list(res.data))
        
          })
    }catch(err){   
      console.log(err,'err');
    }
  }


  export const PlaceNewOrder = (formData, config) => async dispatch =>{
    console.log(config,'logged configgggg');
    try{
            await axios.post('http://127.0.0.1:8000/createOrder/', formData, config).then(res =>{
            
            dispatch({
                type:PLACE_ORDER_SUCCESS
            })
        
          })
    }catch(err){   
      console.log(err,'err');
    }
  }
