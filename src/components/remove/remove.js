import React from 'react';
import { Button } from 'react-bootstrap';

function Remove(props) {
    return (
        <Button variant="warning" onClick={props.handleRemove}>-</Button>
    )
}

export default Remove;