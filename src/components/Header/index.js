import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props)
{
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <section key="Header">
            <Navbar className="nav container-fluid" expand="lg" sticky="top">
                <Navbar.Brand className="ms-1" bsPrefix="nav-brand">Nathan Pfau</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    {tabs.map(tab => (
                        <Nav.Link key={tab} href={'#' + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)} 
                            active={ props.currentPage === tab} >{tab}</Nav.Link>
                    ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
}

export default Header;