import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Home/img/icon.png';


class Navi extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand> <Link to="/"> <img src={`${logo}`} alt="logo" /> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/popTvShows">Popular Tv Shows</Nav.Link>
                        <Nav.Link as={Link} to="/PopPeoples">Populer People</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navi;


// Maybe I can make under Navi component SearchBar! 
// <Form
// inline >
// <FormControl
    // type="text"
    // placeholder="Film Adını Giriniz..."
    // className="mr-sm-2"
    // onChange={this.doSearch}
    // value={this.state.value}
// />
// </Form>