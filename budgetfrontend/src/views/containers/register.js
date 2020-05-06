import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'
import {makeObject} from '../functions/functions.js'
import {newAccount} from '../../ducks/users/actions.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = {
                      email: form.email.value,
                      password: form.password.value}
    const object = makeObject("POST", formData)
    this.props.newAccount(object)
  }
  render(){
    return(<div className="form-container">
      {this.props.signed_in ? <Redirect to="/" />:null}
      <DisplayTitle title="New User" />
      {this.props.message === '' ? <p>{this.props.message}</p>:null}
      <LoginForm handleSubmit={this.handleSubmit} register={true}/>
    </div>)
  }
}


const mapStateToProps = state => {
  return {
    signed_in: state.user.signed_in,
    message: state.user.message
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({newAccount}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register)