import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import ShowSingleVolunTeer from './ShowSingleVolunTeer';
import './ShowYourVolunTeers.css';

const ShowYourVolunTeers = () => {
    const [volunteersMember, setVolunteersMember] = useState([]);
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    useEffect(()=> {
        fetch('https://volunteer-network-server-gr.herokuapp.com/volunteersMember?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('idToken')}`
            }
        })
        .then(res => res.json())
        .then(member =>{
            setVolunteersMember(member);
        })
    },[])

    return (
        <div className='single-volunters-sec'>
            <div className='container'>
                <Header />
                    <div className='row'>
                        {
                            volunteersMember.map((volunteer, idx) => <ShowSingleVolunTeer volunteer={volunteer} key={idx} />)
                        }
                    </div>
            </div>
        </div>
    );
};

export default ShowYourVolunTeers;