import React from 'react';

function Remove(props) {
    return (
        <div className="Button" onClick={props.handleRemove}>-</div>
    )
}

export default Remove;