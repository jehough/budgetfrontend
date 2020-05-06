import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


 const LoginForm = props => (<div className="form">
      <form onSubmit={props.handleSubmit}>
        <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="email@example.com" />
        </Form.Group>

        <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Enter Password" />
        </Form.Group>

        {this.props.register ?
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Coontrol type="password" name="confirmPassword" placeholder="Confirm Password" />
        </Form.Group>: null }
        
        <Button variant="info" type="submit">Log In</Button>

      </form>

    </div>)
export default LoginForm