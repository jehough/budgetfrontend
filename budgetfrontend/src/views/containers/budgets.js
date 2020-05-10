import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import BudgetList from '../components/budget_list.js';
import DisplayTitle from '../components/title.js';
import Form from 'react-bootstrap/Form';
import {makeObject} from '../functions/functions.js';
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({showForm: false})
    const form = e.target
    const formData = {
      name: form.name.value,
      available: form.available.value}
    const object = makeObject("POST", formData)
    const url = path + '/users/5eb6321770f7b328cc958ca5/budgets'
    fetch(url, object)
      .then(resp => resp.json())
      .then(json => console.log(json))
  }

  setDisplay = (json) => {
    const budgetList = json.budgets
    this.setState({budgetsList: budgetList})
  }
  componentDidMount(){
    const url = path + '/users/5eb6321770f7b328cc958ca5/budgets'
   fetch(url)
     .then(resp=> resp.json())
     .then(json =>
       this.setDisplay(json)
     )

    }
  render(){
    return(<div>
      <DisplayTitle title={"My Budgets"} />
      <BudgetList list={this.state.budgetsList}/>
      <Button onClick={this.handleShow}>Add a New Budget</Button>
      {console.log(this.state.budgetsList)}
      <Modal show = {this.state.showForm} onHide= {this.handleClose}>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Budget Name: </Form.Label>
              <Form.Control 
                  type="text" 
                  name="name" 
                  placeholder="Type a Budget Name Here" />
            </Form.Group>

            <Form.Group controlId="amount">
              <Form.Label>Initial Amount Allotted:</Form.Label>
              <Form.Control type="input" name="available" placeholder="Enter a dollar amount here" />
            </Form.Group>
            <Button type="submit">Submit Budget</Button>
          </form>
        </Modal.Body>
      </Modal>
      </div>)    
  }
}
export default Budgets