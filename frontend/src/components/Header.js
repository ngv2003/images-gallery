import React from 'react';
import {Navbar} from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
          <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        </Navbar>
    )
};

export default Header;