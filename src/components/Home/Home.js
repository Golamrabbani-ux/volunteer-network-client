import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SearchContext } from '../../App';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const [title, setTitle] = useState('');
    const [searchData, setSearchData] = useContext(SearchContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setTitle(data);


    useEffect(()=>{
        fetch(`https://volunteer-network-server-gr.herokuapp.com/search?title=${title.title}`)
        .then(res => res.json())
        .then(data => {
            setSearchData(data);
        })
    }, [title])

    return (
        <div className='home-section'>
            <div className="container">
                <Header />
                <div className='content'>
                    <div>
                    <h2 className='home-title mb-5'>I Grow By Helkping People in need</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='d-flex justify-content-center'>
                        <input type="text" name="title" ref={register} className="search-input form-control col-8" placeholder="Search"/>
                        <button type='submit' className='search-btn btn btn-primary px-4'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;