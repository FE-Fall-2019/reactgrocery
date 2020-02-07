import React, { Component } from 'react';
import Grocery from '../grocery/grocery';
import { Form, Button } from 'react-bootstrap';

export default class Main extends Component {
    constructor() {
        super()

        this.state = {
            item: "",
            count: 0,
            items: []
        }
    }

    removeItem = (id) => {
        let items = this.state.items.filter(i => i.id !== id);
        this.setState({ items: items })
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    submit = event => {
        event.preventDefault();

        let items = this.state.items;
        let match = items.find(i => i.item === this.state.item);
        if (match) {return}

        let newItem = {
            id: this.state.items.length,
            item: this.state.item,
            count: this.state.count
        }
        items.push(newItem);
        this.setState({ items: items, item: "" })
    }

    render() {
        return (
            <div className="container" style={{ width: "30%" }}>
                <div>
                    Grocery App
                </div>
                <div>
                    <Form onSubmit={this.submit}>
                        <Form.Group controlId="item">
                            <Form.Label>Please a enter new item:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Grocery"
                                onChange={this.handleChange}
                                value={this.state.item}
                            />
                        </Form.Group>
                        <Form.Group controlId="count">
                            <Form.Control
                                type="text"
                                placeholder="Count"
                                onChange={this.handleChange}
                                value={this.state.count}
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                        >Add New Item</Button>
                    </Form>
                </div>
                {this.state.items.map(i => (
                    <Grocery key={i.id} item={i} removeItem={this.removeItem}></Grocery>
                ))}
            </div>

        )
    }
}