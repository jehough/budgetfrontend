import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


 const AddMoneyForm = props => (<div className="form">
      <form onSubmit={props.handleSubmit}>

        <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" name="amount" placeholder="Enter Amount" />
        </Form.Group>

        <Button onClick = {props.handleAddMoneyClose} variant="info" type="submit">Log In</Button>

      </form>

    </div>)
export default AddMoneyForm