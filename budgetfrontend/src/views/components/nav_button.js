import React from 'react'
import Button from 'react-bootstrap/Button'

const NavButton = props => <Button variant="light" onClick={props.onClick}>{props.text}</Button>

export default NavButton