
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Admin.css';
import VolunTeerItem from './VolunTeerItem';

const Admin = () => {
    const [allVolunTeerMembers, setAllVolunTeerMembers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allVolunteersMembers')
        .then(res => res.json())
        .then(volunteerMembers => setAllVolunTeerMembers(volunteerMembers))
    },[])

    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Date</th>
                    <th scope="col">Volunteer List</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                
                    {
                        allVolunTeerMembers.map(volunteerMember =><VolunTeerItem volunteerMember={volunteerMember} />)
                    }
            </tbody>
        </table>
    );
};

export default Admin;