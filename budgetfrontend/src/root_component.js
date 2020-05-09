import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './views/containers/login';
import Home from './views/components/home';
import Register from './views/containers/register';
import Navbar from './views/containers/navbar';
import Budgets from './views/containers/budgets';


export default class RootComponent extends Component{
    render(){
        return(
            <Router>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register} />
                <Route path="/budgets" component={Budgets} />
            </Router>
        )
    }
}