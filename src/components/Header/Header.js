import React, { useContext } from 'react';
import './Header.css';
import headerlogo from '../../images/logos/Group 1329.png'
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleRouteChanges = (route) =>{
        history.push(route);
    }

    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand>
                <img onClick={()=> handleRouteChanges('/')} src={headerlogo} className="header-logo d-inline-block align-top" alt="React Bootstrap logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link onClick={()=>handleRouteChanges('/')} className='nav-link active'>
                        Home
                    </Nav.Link>
                    <Nav.Link onClick={()=>handleRouteChanges('/registerpage')} className="nav-link">
                        Register List
                    </Nav.Link>
                    <Nav.Link onClick={() =>handleRouteChanges('/showvolunteers')} className='nav-link'>
                        show Your Events
                    </Nav.Link>
                    {
                        loggedInUser.name ?
                        <>
                            <Nav.Link>
                                <strong>{loggedInUser.name}</strong>
                            </Nav.Link>
                            <Nav.Link>
                                <Button onClick={()=>setLoggedInUser({})}>Log Out</Button>
                            </Nav.Link>
                        </>
                        :
                        <>
                         <Nav.Link>
                            <Button onClick={()=>handleRouteChanges('/login')} className="button">Register</Button>
                        </Nav.Link>
                        <Nav.Link>
                                <Button onClick={()=>handleRouteChanges('/login')} className='px-4' variant='dark'>Admin</Button>
                        </Nav.Link>
                        </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;