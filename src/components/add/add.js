import React from 'react';
import { Button } from 'react-bootstrap';

function Add(props) {
    return (
        <Button variant="success" style={{marginRight: 10}} onClick={props.handleClick}>+</Button>
    )
}

export default Add;