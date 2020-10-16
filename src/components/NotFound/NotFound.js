import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';


const NotFound = () => {   
    const history = useHistory();
    const rourteChanges = () =>{
        history.push('/')
    }
    return (
        <div className='not-found d-flex justify-content-center  align-items-center'>
            <div>
                <h1 className='not-found-big-title'>404!</h1>
                <h2 className='not-found-sm-title'>opps! page not found</h2>
                <p className='text-center'>sorry, the page you are looking for doesn't exist if you think <br/> something is broken report a problem</p>
                <div className="d-flex justify-content-center">
                    <button onClick={rourteChanges} className="btn return-home-btn mr-2 px-3">Return Home</button>
                    <button className="btn report-btn">Return Home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;