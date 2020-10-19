import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png'
import './RegisterVolunteer.css'



const RegisterVolunteer = () => {
    const {title} = useParams();
    const [showVolunteer, setShowVolunteer] = useState(false)
    const [loggedInUser, ] = useContext(UserContext);
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://volunteer-network-server-gr.herokuapp.com/addVolunteerMember', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => {
            setShowVolunteer(true)
        })
    };
    


    return (
        <div className='register-volunteers'>
            <Link to='/'><img className='logo' src={logo} alt="Website logo"/></Link>
            <div className='register-area'>
                {
                    showVolunteer ? 
                    <div className='d-flex justify-content-center align-items-center' style={{height: '300px'}}>
                        <Link to='/showvolunteers'>
                            <button className='btn btn-primary w-100'>Show Your Volun Teers</button>
                        </Link>
                    </div>
                    :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='register-title mb-4'>Register as a Volunteer</h3>
                        <input type="text" name='fullname' defaultValue={loggedInUser.name} ref={register({ required: true })} className='input' placeholder="Full Name"/>
                        {errors.fullname && <span>Full Name is required</span>}

                        <input type="text" name='email' defaultValue={loggedInUser.email} ref={register({ required: true })} className='input' placeholder="Username or Email"/>
                        {errors.email && <span>Username or Emailis required</span>}

                        <input type="date" name="date" ref={register({ required: true })} className='input'/>
                        {errors.date && <span>Date is required</span>}

                        <input type="text" name='description' ref={register} className='input' placeholder="Description"/>

                        <input type="text" name="title" ref={register({ required: true })} defaultValue={title} className='input'/>
                        {errors.title && <span>Organize Name is required</span>}
                        
                        <input type="submit" value="Registration" className='btn btn-primary w-100'/>
                    </form>
                }
            </div>
        </div>
    );
};

export default RegisterVolunteer;