import React from 'react';
import './AllVolunTeers.css';
import SingleVolunTeer from '../SingleVolunTeer/SingleVolunTeer';
import { useState } from 'react';
import { useEffect } from 'react';



const AllVolunTerrs = () => {
    const [allVolunTeers, setAllVolunTeers] = useState([]);
    
    useEffect(() =>{
        fetch('https://volunteer-network-server-gr.herokuapp.com/allVolunteersData')
        .then(res => res.json())
        .then(volunteers => {
            setAllVolunTeers(volunteers);
        })
    },[])

    return (
        <div className="container">
            <div className='row justify-content-center'>
            {
                allVolunTeers.map(volunteer => <SingleVolunTeer key={volunteer._id} volunteer={volunteer} />)
            }
            </div>
        </div>
    );
};

export default AllVolunTerrs;