import React, { useState } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VolunTeerItem = ({volunteerMember}) => {
    const [displayShow, setDisplayShow] = useState(false);
    const handleMemberDelete = id =>{
        fetch(`https://volunteer-network-server-gr.herokuapp.com/deleteVolunteerMember/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            setDisplayShow(true);
        })
    } 
    return (
        <tr className={displayShow ? 'hide-item' : 'show-item'}> 
                                <td>{volunteerMember.fullname}</td>
                                <td>{volunteerMember.email}</td>
                                <td>{volunteerMember.date}</td>
                                <td>{volunteerMember.title}</td>
                                <td className='text-center'>
                                    <button onClick={()=>handleMemberDelete(volunteerMember._id)} className="btn btn-danger px-1 py-0"><FontAwesomeIcon icon={faTrashAlt} /></button>    
                                </td> 
                            </tr>
    );
};

export default VolunTeerItem;