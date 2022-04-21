import React, { useState } from "react";
import Search from './Search'
import styledComponents from "styled-components";
import styled from "styled-components";



const StyledApod = styled.div`
    background-color: #483D8B;
    color: white;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    text-shadow: 1px 1px 2px black;
    



    img {
        height: 60vh;

    }
`;


const Apod = (props) => {
    const { title, hdurl, explanation, copyright, date } = props


    return(
        <StyledApod className='container'>
            <h1>{title} {date}</h1>
            <h2>By: {copyright}</h2>
            <img src={hdurl} alt='photo of the day' className='image' />
            <p>{explanation}</p>
            <Search />
        </StyledApod>
    )
}

export default Apod