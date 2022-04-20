import React, { useState } from "react";


const Apod = (props) => {
    const { title, hdurl, explanation, copyright, date } = props

    return(
        <div className='container'>
            <h1>{title} {date}</h1>
            <h2>By: {copyright}</h2>
            <img src={hdurl} alt='photo of the day' />
            <p>{explanation}</p>
        </div>
    )
}

export default Apod