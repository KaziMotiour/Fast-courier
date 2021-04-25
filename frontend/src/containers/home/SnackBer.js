import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter, NavLink } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from "@material-ui/core/SnackbarContent";
import {REMOVE_SUCCESS_PLACED} from '../../store/actions/ActionType'


function SnackBer(props) {
  console.log(props.orderPlacedSuccess, 'form snackber');
    const dispatch = useDispatch()
    const history = useHistory()
    const [state, setState] = React.useState({
        snackBerOpen: false,
        vertical: 'top',
        horizontal: 'center',
      });

      const info = props.success_info
      const {horizontal, vertical, snackBerOpen} = state;

      useEffect(()=>{
          setState({...state, snackBerOpen:props.open})
      },[])

      let confirmInfo = 'Order hasbeen placed successfully'
      closeDialog()
      
      const handleOpen = () =>{
        setState({ ...state, snackBerOpen: true });
      }

      async function closeDialog (dis){
        await new Promise((resolve) => setTimeout(() => { 
            setState({ ...state, snackBerOpen: false });  
            dispatch({
              type:REMOVE_SUCCESS_PLACED
            })
            history.push('/')
            
        }, 2000))
      }

  
    
    return (
        <div>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={snackBerOpen}
                    key={vertical + horizontal}>
                      
                      <SnackbarContent
                        aria-describedby="message-id2"
                        // className={classes.snackbarStyleViaNestedContent}

                        style={props.success_info === 'False' ? {backgroundColor:'rgb(71, 73, 82)'}: {backgroundColor:'green'}}
                        message={
                          <span id="message-id2">
                            <div>{confirmInfo}</div>
                          </span>
                      }
                      />
                    </Snackbar>
                
        </div>
    )
}

export default SnackBer
