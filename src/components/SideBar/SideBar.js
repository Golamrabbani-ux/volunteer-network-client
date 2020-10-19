import React from 'react';
import './SideBar.css';
import headerlogo from '../../images/logos/Group 1329.png'
import Admin from '../Admin/Admin';
import { Link } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    const [registerPage, setRegisterPage] = useState(true);

    return (
        <div className='side-sec container-fluid'>
            <div className='top-bar'>
                <Link to='/'>
                    <img className='header-logo' src={headerlogo} alt=""/>
                </Link>
                {
                    registerPage ? <h3>volunteers registeers list</h3>:<h3>Add Event</h3>
                }
            </div>
            <div className="container-fluid mx-0">
                <div className="row">
                    <div className="side-bar col-2">
                        <div className="vertical-menu">
                            <span onClick={()=> setRegisterPage(true)} className={registerPage ? 'active' : ''}>
                                <FontAwesomeIcon className='' icon={faUserFriends} />
                                Volunteer register list
                            </span>
                            <span onClick={()=> setRegisterPage(false)} className={registerPage ? '' : 'active'}>
                                <FontAwesomeIcon className='mr-1' icon={faPlus} />
                                Add event
                            </span>
                        </div>
                    </div>
                    <div className="col-9 volunteers-content">
                        <div className="container-fluid all-volunteers">
                            {
                                registerPage ? <Admin />
                                : <AddEvent />
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;