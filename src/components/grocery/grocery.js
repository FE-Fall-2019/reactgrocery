import React, { Component } from 'react';
import Add from '../add/add';
import Remove from '../remove/remove';
import { Button } from 'react-bootstrap';

export default class Grocery extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.props.item.count = (this.props.item.count * 1) + 1
        this.setState({ count: this.props.item.count });
    }

    handleRemove = () => {
        if (this.props.item.count > 0) {
            this.props.item.count = this.props.item.count * 1 - 1;
            this.setState({ count: this.props.item.count });
        }
    }

    removeItem = () => {
        this.props.removeItem(this.props.item.id);
    }

    render() {
        return (
            <div className="container">
                {this.props.item.item} : {this.props.item.count}
                <div>
                    <Add handleClick={this.handleClick}></Add>
                    {this.props.item.count > 0 ?
                    <Remove handleRemove={this.handleRemove}></Remove>

                    : ""}
                </div>
                <Button variant="danger" onClick={this.removeItem} style={{marginTop: 10}}>Remove Item</Button>
            </div>
        )
    }
}