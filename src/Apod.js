import React, { useState } from "react";
import Search from './Search'

const Apod = (props) => {
    const { title, hdurl, explanation, copyright, date } = props


    return(
        <div className='container'>
            <h1>{title} {date}</h1>
            <h2>By: {copyright}</h2>
            <img src={hdurl} alt='photo of the day' className='image' />
            <p>{explanation}</p>
            <Search />
        </div>
    )
}

export default Apod