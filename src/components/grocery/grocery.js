import React, { Component } from 'react';
import Add from '../add/add';
import Remove from '../remove/remove';

export default class Grocery extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleRemove = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1});
        }
    }

    removeItem = () => {
        this.props.removeItem(this.props.item.id);
    }

    render() {
        return (
            <div>
                {this.props.item.item} : {this.state.count}
                <Add handleClick={this.handleClick}></Add>
                {this.state.count > 0 ?
                <Remove handleRemove={this.handleRemove}></Remove>
                : ""}
                <div className="Button" onClick={this.removeItem}>Remove Item</div>
            </div>
        )
    }
}