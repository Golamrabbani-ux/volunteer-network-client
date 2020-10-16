import React from 'react';
import { Link } from 'react-router-dom';
import './SingleVolunTeer.css';


const SingleVolunTeer = ({volunteer}) => {
    // console.log(volunteer.pic)
    return (
        <div className='col-sm-6 col-md-4 col-lg-3 single-vounteer'>
            <Link to={`/registervolunteer/${volunteer.title}`}>
                <div className="card">
                    <img className="card-img-top" src={volunteer.pic} alt="Card image cap" />
                    <div className="card-body card-middle">
                        <h5 className="card-title text-white">{volunteer.title}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleVolunTeer;