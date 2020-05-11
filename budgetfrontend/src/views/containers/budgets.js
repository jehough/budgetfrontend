import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import BudgetList from '../components/budget_list.js';
import DisplayTitle from '../components/title.js';
import Form from 'react-bootstrap/Form';
import {makeObject, makeGetObject} from '../functions/functions.js';
import {path} from '../../helpers.js';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


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
    const url = path + `/users/${this.props.userId}/budgets`
    fetch(url, object)
      .then(resp => resp.json())
      .then(json => console.log(json))
  }

  setDisplay = (json) => {
    const budgetList = json.budgets
    this.setState({budgetsList: budgetList})
  }
  componentDidMount(){
    
    const url = path + `/users/${this.props.userId}/budgets`
    const object = makeGetObject(this.props.token)
   fetch(url, object)
     .then(resp=> resp.json())
     .then(json =>
       this.setDisplay(json)
     )

    }
  render(){
    return(<div>
      {this.props.signed_in? null: <Redirect to="/" />}
      <DisplayTitle title={"My Budgets"} />
      <BudgetList list={this.state.budgetsList}/>
      <Button onClick={this.handleShow}>Add a New Budget</Button>
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

const mapStateToProps = state => {
  return {
    token: state.user.auth_token,
    userId: state.user.userId,
    signed_in: state.user.signed_in
  }
}
export default connect(mapStateToProps)(Budgets)