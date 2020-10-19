import React from 'react';
import './AddEvent.css';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

const AddEvent = () => {
    const { register, errors, handleSubmit } = useForm();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        fetch('https://volunteer-network-server-gr.herokuapp.com/addVolunteer', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(result => {
            alert('Your Volunteer added')
            history.replace(from)
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-6">
                        <strong>Event Tittle</strong>
                        <input type="text" name='title' ref={register({ required: true })} className="form-control my-1" placeholder='Enter title'/>
                        {errors.title && <span>Event tittle is required</span>}
                    </div>
                    <div className="col-sm-6">
                         <strong>Event Date</strong>
                        <input type="date" name='date' ref={register({ required: true })} className="form-control my-1" placeholder='Enter Description'/>
                        {errors.date && <span>Event date is required</span>}
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-6">
                        <strong>Description</strong>
                        <textarea name='description' ref={register} className='form-control my-1' placeholder='Enter Description' style={{minHeight: '100px'}}></textarea>
                    </div>
                    <div className="col-sm-6">
                        <strong>Banner</strong>
                        <input type="text" name='pic' ref={register({ required: true })} className="form-control my-1" placeholder='Image Url'/>
                        {errors.pic && <span>Event image url is required</span>}
                    </div>
                </div>
                <input className='mt-4 px-3 btn btn-primary float-right' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default AddEvent;