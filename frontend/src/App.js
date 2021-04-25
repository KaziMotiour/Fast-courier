import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
import Login from './containers/Login/Login'
import Home from './containers/home/Home'
import PlaceOrder from './containers/home/PlaceOrder'
import {AuthenticRoute, LogedInRoute} from './PrivateRoute'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
            <LogedInRoute exect path='/Login' component={Login}/>
            <AuthenticRoute exect path='/placeorder' component={PlaceOrder}/>
            <AuthenticRoute exect path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
