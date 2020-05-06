import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from '../components/search_bar';
import NavButton from '../components/nav_button';
import {logout} from '../../ducks/user/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

 class Navigation extends Component {

  render(){
    return(<Navbar variant="light" expand="lg" sticky="top">
          <Navbar.Brand><Link to="/">Little Ocean Shop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/">Home</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/categories">Categories</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {this.props.signed_in? <NavButton onClick={this.props.logout} text="Logout"/>:<Link to="/login"><NavButton text="Login"/></Link>}
          </Navbar.Collapse>
        </Navbar>
  )
  }
}
const mapStateToProps = state => {
  return {
  items: state.cart.items,
  price: state.cart.price,
  signed_in: state.user.signed_in
}}
const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))