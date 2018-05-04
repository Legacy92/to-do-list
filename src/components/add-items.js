import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            details: ''
        };
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(event) {
        event.preventDefault();
        console.log('Item', this.state);
        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }

    render() {
        const { title, details } = this.state;
        return (
            <form onSubmit={this.handleAddItem.bind(this)}>
                <div className="row">
                    <div className="col s12 m8 offset-m2 pulse">
                        <a className="btn-floating btn-large cyan pulse"><i className="material-icons">NOW!</i></a>
                        <input type="text" value={title} onChange={(event) => { this.setState({ title: event.target.value }) }} placeholder="Title" />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m8 offset-m2 pulse">
                        <input type="text" value={details} onChange={event => this.setState({ details: event.target.value })} placeholder="Title" />
                    </div>
                </div>
                <div className="row">
                    <div className="right-align col s12 m8 offset-m2">
                        <button className="btn purple darken-2">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddItem;