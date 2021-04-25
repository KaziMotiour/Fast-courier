import React,{useEffect} from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {auth_logout} from '../store/actions/Auth'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory, withRouter, NavLink } from "react-router-dom";
import {LoggedUserInfo, NewOrderCount} from '../store/actions/Auth'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      nav:{
            width:'100%',
            height:60,
            backgroundColor:'rgb(31, 135, 191)',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
      },
      logo:{
          paddingLeft:100,
          fontSize:30,
          cursor:'pointer'        
      },
      button:{
          paddingRight:50,
      },
      order:{
        fontSize:25,
        marginLeft:20,
        cursor:'pointer',
        '&:hover':{
            borderBottom:'.5px solid black'
        },

      },
      button:{
        marginLeft:40,
        marginRight:30,
        cursor:'pointer',
      }

    }))

function NavBar({userInfo}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const NotificationCount = useSelector(state => state.auth.NotificationCount)
    console.log(NotificationCount);
    const config = { headers: { 
        'Content-Type':'application/json',
        'Authorization': "Bearer " + localStorage.getItem('access_token')
      }}

    useEffect(() => {
        {userInfo && !userInfo.is_superuser && dispatch(NewOrderCount(config)) }
       
    }, [userInfo])


    const HandleLogout = ()=>{
    
        dispatch(auth_logout())
        goToLogin()
    }
    const goToPlaceOrder = () =>{
        history.push('/placeorder')
    }
    const goToHome = () =>{
        history.push('/')
    }

    
    
    async function goToLogin (){
        await new Promise((resolve) => setTimeout(() => { 
            const access_token = localStorage.getItem('access_token') 
            if(!access_token){
                history.push('/login')
            }
          
        }, 1000))
      }

    return (
        <div className={classes.nav}>
            
            <div onClick={goToHome} className={classes.logo} >
                FAST COURIER
            </div>

            <div className={classes.button} >
            {userInfo && !userInfo.is_superuser  ? 
            <Badge color="secondary"  badgeContent={NotificationCount && NotificationCount.new_notification}>
                <Typography className={classes.order}>Orders</Typography>
            </Badge>
            :
            <Badge color="secondary" >
                <Typography onClick={goToPlaceOrder} className={classes.order}>Place NewOrders</Typography>
            </Badge>
            }
            <Button onClick={HandleLogout} className={classes.button} variant="outlined" color="default">
                Logout
            </Button>
            </div>
        </div>
    )
}

export default NavBar
