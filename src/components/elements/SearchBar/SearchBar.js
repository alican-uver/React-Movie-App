import React, { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import './SearchBar.css'

class SearchBar extends Component {

    state = {
        value: ""
    }

    timeout = null; 

    getValue = event => {
        let value = event.target.value;
        this.setState({
            value
        });

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value);
        }, 500);
    }

    render() {

        return (
            <div className="mt-4">
                <Container>
                    <Form.Group>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Lütfen Aradığınız Filmin Adını Giriniz..."
                            onChange={this.getValue}
                        />
                    </Form.Group>
                </Container>
            </div>
        )
    }
}

export default SearchBar;