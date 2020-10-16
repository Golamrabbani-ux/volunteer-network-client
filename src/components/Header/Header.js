import React, { useContext } from 'react';
import './Header.css';
import headerlogo from '../../images/logos/Group 1329.png'
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const handleRouteChanges = (route) =>{
        history.push(route)
    }

    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand>
                <img onClick={()=> handleRouteChanges('/')} src={headerlogo} className="header-logo d-inline-block align-top" alt="React Bootstrap logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link className="nav-link active">Home</Nav.Link>
                    <Nav.Link className="nav-link">Donation</Nav.Link>
                    <Nav.Link className="nav-link">Events</Nav.Link>
                    <Nav.Link onClick={() =>handleRouteChanges('/showvolunteers')} className="nav-link">Blog</Nav.Link>
                    <Nav.Link>
                        <Button className="button">Register</Button>
                    </Nav.Link>
                    <Nav.Link>
                            <Button className='px-4' variant='dark'>Admin</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;