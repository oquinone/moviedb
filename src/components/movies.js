import React, { useState, useEffect } from 'react';
import { Search } from './search';
import { movieData } from '../api/getData';
import {ReactComponent as Logo} from '../images/blue_short.svg';

import { useSelector } from 'react-redux';
import '../styling/movies.scss';

export const Movies = () => {
    const { searchMe } = useSelector((state) => state.searching);
    const [data, setData] = useState("");

    const fetchData = async () =>{
        const info = await movieData(searchMe);
        if(info !== undefined) setData(info);
    }

    useEffect( () => {
        if(searchMe){ fetchData(); }
        // eslint-disable-next-line
    },[searchMe], [])
    
    return(
        <div className="main"
        style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data['backdrop_path']})`
        }}>
            <section className="search-bar-container">
                <Search className="search-bar"/>
            </section>
            <section className="movie">
                <div className="movie-poster">
                    {data === null ? null : (<img src={`https://image.tmdb.org/t/p/w500/${data['poster_path']}`} alt="poster"/>)}
                </div>
                <div className="movie-info">
                    <div className="info">
                        {data === null ? null : (<h1 className="title">{data['title']}</h1>)}
                        {data === null ? null : (<h1 className="overview">{data['overview']}</h1>)}
                    </div>
                    <div className="logo">
                        <Logo/>
                    </div>
                </div>
            </section>
        </div>
    );
}