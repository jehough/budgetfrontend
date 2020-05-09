import React, {Component} from 'react';
import BudgetList from '../components/budget_list.js';
import DisplayTitle from '../components/title.js';
import {path} from '../../helpers.js';


class Budgets extends Component {
  constructor(){
    super()
    this.state = {
      budgetsList: []
    }
  }




  componentDidMount(){
    const url = path + '/budgets'
   fetch(url)
     .then(resp=> resp.json())
     .then(json =>
       this.console.log(json)
     )

    }
  render(){
    return(<div>
      <DisplayTitle title={"My Budgets"} />
      <BudgetList list={this.state.fishList} input={this.state.input}/>
      </div>)
  }
}
export default Budgets