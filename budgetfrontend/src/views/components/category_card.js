import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {makeObject} from '../functions/functions.js';
import {path} from '../../helpers.js';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AddMoneyForm from './addMoney.js';
import AddTransactionForm from './addTransaction'


class CategoryCard extends Component {
  constructor(){
    super()
    this.state = {
      showAddMoney: false,
      showAddTransaction: false,
      transaction: '',
      amount: 0
    }
  }
  
  handleTransactionClick = () => {
      this.setState({showAddTransaction: true})
  }

  handleTranactionClose = () => {
      this.setState({showAddTransaction: false})
  }
  handleAddMoneyClick = () => {
       this.setState({showAddMoney: true})
  }

  handleAddMoneyClose = () => {
      this.setState({showAddMoney: false})
  }
  render(){
    return(<Card>
      {this.props.signed_in? null: <Redirect to="/" />}
        <Card.Body>
        <Card.Title>{this.props.category.name}</Card.Title>
        <Card.Subtitle>{this.props.category.available}</Card.Subtitle>
        {this.state.showAddMoney ? <AddMoneyForm handleAddMoneyClose={this.handleAddMoneyClose}/>:<Button onClick={this.handleAddMoneyClick}>Add Money</Button>}
        {this.state.showAddTransaction? 
            <AddTransactionForm handleTranactionClose={this.handleTransactionClose} /> : <Button onClick={this.handleTransactionClick}>Add Transaction</Button>}
        </Card.Body>
    </Card>)    
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.auth_token,
    userId: state.user.userId,
    signed_in: state.user.signed_in
  }
}
export default connect(mapStateToProps)(CategoryCard)