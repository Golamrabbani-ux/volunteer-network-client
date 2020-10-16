import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className='home-section'>
            <div className="container">
                <Header />
                <div className='content'>
                    <div>
                    <h2 className='home-title mb-5'>I Grow By Helkping People in need</h2>
                    </div>
                    <form className='d-flex justify-content-center'>
                        <input type="text" name="name" className="search-input form-control col-8" placeholder="Search"/>
                        <button type='submit' className='search-btn btn btn-primary px-4'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;