import React, { Component } from 'react';

export class Form extends Component {


    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave({
            title: e.target.elements.title.value,
        });

        e.target.reset();
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input name="title" placeholder="title" />
                <button>Save</button>
            </form>
        );
    }
}

export default Form;

// Controlled input