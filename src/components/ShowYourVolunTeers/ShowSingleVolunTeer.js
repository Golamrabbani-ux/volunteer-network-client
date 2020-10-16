import React, { useState } from 'react';
import { useEffect } from 'react';

const ShowSingleVolunTeer = ({volunteer}) => {
    const [allVolunTeers, setAllVolunTeers] = useState([]);
    const [displayShow, setDisplayShow] = useState(false);
    
    useEffect(() =>{
        fetch('http://localhost:4000/allVolunteers')
        .then(res => res.json())
        .then(volunteers => {
            setAllVolunTeers(volunteers);
        })
    },[])

    const handleCancel =(id) =>{
        fetch(`http://localhost:4000/deleteVolunteerMember/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            alert('Item Deleted');
            setDisplayShow(true);
        })
    }

    const finderVolunTeer = allVolunTeers.find(vol => vol.title === volunteer.title);

    return (
            <div className="col-md-6">
                <div className={displayShow ? 'card-hide': 'single-card shadow'}>
                    <div className="row">
                        <div className="col-5 px-0">
                            {
                                finderVolunTeer &&
                                <img className='single-left-img' src={finderVolunTeer.pic} alt=""/>
                            }
                        </div>
                        <div className="col-7 content-area">
                            <h2 className='single-title'>{volunteer.title}</h2>
                            <h5>{volunteer.date}</h5>
                            <button onClick={()=> handleCancel(volunteer._id)} className='button-cancel'>cancel</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ShowSingleVolunTeer;