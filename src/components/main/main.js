import React, { Component } from 'react';
import Grocery from '../grocery/grocery';

export default class Main extends Component {
    constructor() {
        super()

        this.state = {
            items: [
                {
                    id: 0,
                    item: "item 0"
                }
            ]
        }
    }

    handleClick = () => {
        let items = this.state.items
        let newItem = {
            id: items.length,
            item: "item " + (items.length + 1)
        }
        items.push(newItem)
        this.setState({ items: items })
    }

    removeItem = (id) => {
        let items = this.state.items.filter(i => i.id !== id);
        this.setState({ items: items})
    }

    render() {
        return (
            <div>
                <div>
                    Grocery App
                </div>
                <div className="Button" onClick={this.handleClick}>
                    Add New Item
                </div>
                {this.state.items.map(i => (
                    <Grocery item={i} removeItem={this.removeItem}></Grocery>
                ))}
            </div>
            
        )
    }
}