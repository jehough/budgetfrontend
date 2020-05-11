import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom'
import {makeObject} from '../functions/functions.js'
import {login} from '../../ducks/users/actions.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      newuser: false
    }
  }

  handleClick = () => {
    this.setState({newuser: true})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = {
                      email: form.email.value,
                      password: form.password.value}
    const object = makeObject("POST", formData)
    this.props.login(object)
  }
  render(){
    return(<div>
      {this.props.signed_in ? <Redirect to="/budgets" />:null}
      {this.state.newuser? <Redirect to="/register"/>:null}
      <DisplayTitle title="Login Page" />
      <h4>You must login to view your cart.</h4>
      {this.props.message === '' ? null:<p>{this.props.message}</p>}
      <LoginForm handleSubmit={this.handleSubmit}/>
      <Button variant="info" onClick={this.handleClick}>Create New User</Button>
    </div>)
  }
}


const mapStateToProps = state => {
  return {
    signed_in: state.user.signed_in,
    message: state.user.message
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)