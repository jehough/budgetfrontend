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
import BudgetShow from './views/containers/budget_show';


export default class RootComponent extends Component{
    render(){
        return(
            <Router>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register} />
                <Switch>
                <Route exact path="/budgets" component={Budgets} />
                <Route path="/budgets/:id" component={BudgetShow} />
                </Switch>
            </Router>
        )
    }
}