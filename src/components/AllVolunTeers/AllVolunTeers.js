import React from 'react';
import './AllVolunTeers.css';
import SingleVolunTeer from '../SingleVolunTeer/SingleVolunTeer';
import { useState } from 'react';
import { useEffect } from 'react';



const AllVolunTerrs = () => {
    const [allVolunTeers, setAllVolunTeers] = useState([]);
    const bgColors = [ '#FFBD3E', '#FF7044', '#3F90FC', '#421FCF' ];
    let index = 0;
    const handleColorIndex = ()=> index > 2 ? index = 0 : index = index + 1;
    // console.log(bgColors[customBgColor])
    
    useEffect(() =>{
        fetch('https://volunteer-network-server-gr.herokuapp.com/allVolunteersData')
        .then(res => res.json())
        .then(volunteers => {
            setAllVolunTeers(volunteers);
        })
    },[])

    return (
        <div className="container">
            <div className='row'>
            {
                allVolunTeers.map(volunteer => <SingleVolunTeer 
                    key={volunteer._id} 
                    volunteer={volunteer} 
                    bgColors={bgColors}
                    handleColorIndex= {handleColorIndex}
                />)
            }
            </div>
        </div>
    );
};

export default AllVolunTerrs;