import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import BudgetList from '../components/budget_list.js';
import DisplayTitle from '../components/title.js';
import {path} from '../../helpers.js';


class Budgets extends Component {
  constructor(){
    super()
    this.state = {
      budgetsList: [],
      showForm: false
    }
  }

  handleShow = () => {
    this.setState({showForm: true})
  }

  handleClose = () => {
    this.setState({showForm: false})
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
      <Button onClick={this.handleShow}>Add a New Budget</Button>
      
      <Modal show = {this.state.showForm} onClick={this.handleClose}>
        <Modal.Body>
          
        </Modal.Body>
      </Modal>
      </div>)    
  }
}
export default Budgets