import React,{useEffect} from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NavBar from '../../component/NavBar'
import Orders from './Orders'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory, withRouter, NavLink } from "react-router-dom";
import {LoggedUserInfo, NewOrderCount} from '../../store/actions/Auth'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      nav:{
            width:'100%',
            height:60,
            
      },
      orders:{
          width:'100%',
      }

    }))

function Home() {

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const userInfo = useSelector(state => state.auth.loggedinUserInfo)
    
    const config = { headers: { 
        'Content-Type':'application/json',
        'Authorization': "Bearer " + localStorage.getItem('access_token')
      }}
    useEffect(() => {
        dispatch(LoggedUserInfo(config))
        
    }, [])

    return (
        <div>
            <div className={classes.nav}>
                <NavBar userInfo={userInfo} />
            </div>
            <div classes = {classes.orders}>
                <Orders userInfo={userInfo} />
            </div>
        </div>
    )
}

export default Home
