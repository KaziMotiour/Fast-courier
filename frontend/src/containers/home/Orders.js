import React, {useEffect, useState} from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory, withRouter, NavLink } from "react-router-dom";
import {MerchentOrder, AdminOrder} from '../../store/actions/Order'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileInfo:{
        width:'80%',
        height:220,
        backgroundColor:'rgb(227, 229, 232)',
        margin:'auto',
    },
    text:{
        fontSize:40,
        borderBottom:'1px solid black',
        
    },
    table: {
        minWidth: 650,
      },
    orders:{
        width:'90%',
        margin:'auto'
    },

    info:{
        
    }
    

    }))


console.log(parseInt("sdf6"), 'parsint' );
function Orders({userInfo}) {
    
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [isMerchant, setIsMerchant] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const merchentOrderLists = useSelector(state => state.order.merchentOrderList)
    const AdminOrderList = useSelector(state => state.order.AdminOrderList)
    console.log(AdminOrderList,'list');
    const config = { headers: { 
        'Content-Type':'application/json',
        'Authorization': "Bearer " + localStorage.getItem('access_token')
      }}

    useEffect(() => {
        {userInfo && userInfo.is_superuser && dispatch(AdminOrder(config))}
        {userInfo && !userInfo.is_superuser &&  dispatch(MerchentOrder(config))}


    }, [userInfo])
    



    return (
        <div>
            <div className={classes.profileInfo}>
                
                <div style={{paddingTop:'2%', paddingRight:'75%'}}>
                    <img style={{width:100, height:100,}} src="https://icon-library.com/images/man-icon/man-icon-6.jpg" />
                    {userInfo && userInfo.is_superuser ? 
                    <p style={{fontSize:30, marginTop:5, marginBottom:0,}}>
                        {userInfo.username} <span>(Admin)</span></p> :
                    <p style={{fontSize:30, marginTop:5, marginBottom:0,}}>
                    {userInfo &&  userInfo.username} <span>(Merchant)</span></p>
                
                    }
                    
                </div>
            
            </div>
            <p className={classes.text}>All the orders</p>

            {/* list of order */}
            <div className={classes.orders}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                    <TableCell>Date</TableCell>
                      <TableCell>Percel Name</TableCell>
                      <TableCell>Percel Type</TableCell>
                      <TableCell align="center">Location</TableCell>
                      <TableCell align="center">marchant Infor</TableCell>
                      <TableCell align="center">Invoice ID</TableCell>
                      <TableCell align="center">weight</TableCell>
                      <TableCell align="center">cost</TableCell>
                      <TableCell align="center">COD charge</TableCell>
                     
                      <TableCell align="center">Total Cost</TableCell>

                      <span style={{borderLeft:'1px solid black'}}>
                      <TableCell align="center">Return Cost Will be</TableCell>
                      </span>
                    </TableRow>
                  </TableHead>

                {/* for merchant */}
                  {userInfo && !userInfo.is_superuser &&
                  <TableBody>
                      
                    { merchentOrderLists && merchentOrderLists.map((row) => (
                       <TableRow key={row.id}>
                           <TableCell component="th" scope="row">
                           {row.timestamp.substr(0,16)}
                       </TableCell>
                       <TableCell component="th" scope="row">
                         {row.percel_name}
                       </TableCell>
                       <TableCell component="th" scope="row">
                         {row.percel_type}
                       </TableCell>
                       <TableCell align="center">{row.Location}</TableCell>
                       <TableCell align="center">{row.marchant.first_name} {row.marchant.last_name}</TableCell>
                       <TableCell align="center">{row.newInvoiceID}</TableCell>
                       <TableCell align="center">{row.weight}</TableCell>
                       <TableCell align="center">{row.cost}</TableCell>
                       <TableCell align="center">{row.cod_charge}</TableCell>
                      
                       <TableCell align="center">{row.total_cost} Tk</TableCell>
                       <span >
                       <TableCell align="center">{row.return_charge} ->  {row.return_cost && row.return_cost+ 'Tk'} </TableCell>
                       </span>

                       
                     </TableRow>
                    ))}
                  </TableBody>}


                        {/* For Admin */}
                  {userInfo && userInfo.is_superuser &&
                  <TableBody>
                      
                    { AdminOrderList && AdminOrderList.map((row) => (
                        
                      <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                         {row.timestamp.substr(0,16)}
                       </TableCell>
                        <TableCell component="th" scope="row">
                          {row.percel_name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.percel_type}
                        </TableCell>
                        <TableCell align="center">{row.Location}</TableCell>
                        <TableCell align="center">{row.marchant.first_name} {row.marchant.last_name}</TableCell>
                        <TableCell align="center">{row.newInvoiceID}</TableCell>
                        <TableCell align="center">{row.weight}</TableCell>
                        <TableCell align="center">{row.cost}</TableCell>
                        <TableCell align="center">{row.cod_charge}</TableCell>
                       
                        <TableCell align="center">{row.total_cost} Tk</TableCell>
                        <span >
                        <TableCell align="center">{row.return_charge} -> {row.return_cost && row.return_cost+ 'Tk'} </TableCell>
                        </span>

                        
                      </TableRow>
                      
                    ))}                    
                  </TableBody>}







                </Table>
            </TableContainer>
            </div>
            
        </div>
    )
}

export default Orders
