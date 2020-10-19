
import React, { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import './Admin.css';
import VolunTeerItem from './VolunTeerItem';

const Admin = () => {
    const [allVolunTeerMembers, setAllVolunTeerMembers] = useState([]);

    useEffect(() => {
        fetch('https://volunteer-network-server-gr.herokuapp.com/allVolunteersMembers')
        .then(res => res.json())
        .then(volunteerMembers => setAllVolunTeerMembers(volunteerMembers))
    },[])

    return (
        <>
            {
                allVolunTeerMembers.length > 0 ?
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
                :
                <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                    <Loading />
                </div>
            }
        </>
    );
};

export default Admin;