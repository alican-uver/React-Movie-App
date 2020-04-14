import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../elements/img/icon.png';

const Navi = () => {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand> <Link to="/"> <img src={`${logo}`} alt="logo" /> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/favourites">Favori Filmler</Nav.Link>
                        <Nav.Link as={Link} to="/PopPeoples">Popüler Oyuncular</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
}

export default Navi;
