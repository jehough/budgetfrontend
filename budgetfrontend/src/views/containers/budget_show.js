import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DisplayTitle from '../components/title.js';
import Form from 'react-bootstrap/Form';
import {makeObject} from '../functions/functions.js';
import {path} from '../../helpers.js';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class BudgetShow extends Component {
  constructor(){
    super()
    this.state = {
      budget: {},
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
      name: form.name.value}
    const object = makeObject("POST", formData)
    const url = path + `/budgets/${this.props.location.state.id}/categories`
    fetch(url, object)
      .then(resp => resp.json())
      .then(json => console.log(json))
  }


  componentDidMount(){
    let id = this.props.location.state.id
    console.log(id)
    const url = path + `/users/${this.props.userId}/budgets/${id}`
   fetch(url)
     .then(resp=> resp.json())
     .then(json =>
       this.setState({budget: json})
     )

    }
  render(){
    return(<div>
      {this.props.signed_in? null: <Redirect to="/" />}
      <DisplayTitle title={this.state.budget.name} />
      <p> This is where the budget will go when I am done with this!</p>
      <Button onClick={this.handleShow}>Add a New Category</Button>
      <Modal show = {this.state.showForm} onHide= {this.handleClose}>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Category Name: </Form.Label>
              <Form.Control 
                  type="text" 
                  name="name" 
                  placeholder="Type a Category Name Here" />
            </Form.Group>
           <Button type="submit">Create Category</Button>
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
export default connect(mapStateToProps)(BudgetShow)