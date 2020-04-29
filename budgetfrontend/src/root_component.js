import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './views/containers/login';
import Home from './views/components/home'


export default class RootComponent extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register} />
            </Router>
        )
    }
}