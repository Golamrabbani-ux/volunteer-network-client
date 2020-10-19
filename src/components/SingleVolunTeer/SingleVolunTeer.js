import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleVolunTeer.css';


const SingleVolunTeer = ({volunteer, bgColors, handleColorIndex}) => {
    return (
        <div className='col-sm-6 col-md-4 col-lg-3'>
            <Link to={`/registervolunteer/${volunteer.title}`} style={{textDecoration: 'none'}}>
                <center>
                <Card className="custom_card">
                    <Card.Img className="card_img" variant="top" src={volunteer.pic} />
                    <Card.Body style={{ backgroundColor: bgColors[handleColorIndex()],minHeight:"6rem", color:'white'}}>
                        <Card.Title>{volunteer.title}</Card.Title>
                    </Card.Body>
                </Card>
                </center>
            </Link>
        </div>
    );
};

export default SingleVolunTeer;