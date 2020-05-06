import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavButton from '../components/nav_button';
import {logout} from '../../ducks/users/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

 class Navigation extends Component {

  render(){
    return(<Navbar variant="light" expand="lg" sticky="top">
          <Navbar.Brand><Link to="/">MyBudget 2.0</Link></Navbar.Brand>
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
  signed_in: state.user.signed_in
}}
const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))