import React from 'react';
import './AllVolunTeers.css';
import SingleVolunTeer from '../SingleVolunTeer/SingleVolunTeer';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';
import { useContext } from 'react';
import { SearchContext } from '../../App';



const AllVolunTerrs = () => {
    const [allVolunTeers, setAllVolunTeers] = useState([]);
    const [searchData, setSearchData] = useContext(SearchContext)
    const bgColors = [ '#FFBD3E', '#FF7044', '#3F90FC', '#421FCF' ];
    let index = 0;
    const handleColorIndex = ()=> index > 2 ? index = 0 : index = index + 1;
    
    useEffect(() =>{
        fetch('https://volunteer-network-server-gr.herokuapp.com/allVolunteersData')
        .then(res => res.json())
        .then(volunteers => {
            setAllVolunTeers(volunteers);
        })
    },[])



    return (
        <div className="container">
            {
                allVolunTeers.length > 0 || searchData.length > 0?
                <div className="row">
                    {
                        searchData.length > 0 ?
                            searchData.map(volunteer => <SingleVolunTeer 
                                key={volunteer._id} 
                                volunteer={volunteer} 
                                bgColors={bgColors}
                                handleColorIndex= {handleColorIndex}
                            />)
                        :
                            allVolunTeers.map(volunteer => <SingleVolunTeer 
                                    key={volunteer._id} 
                                    volunteer={volunteer} 
                                    bgColors={bgColors}
                                    handleColorIndex= {handleColorIndex}
                                />)
                    }
                </div>
                :
                <div className="d-flex justify-content-center">
                    <Loading />
                </div>
            }            
        </div>
    );
};

export default AllVolunTerrs;