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
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    text-shadow: 1px 1px 2px black;

    .img-container {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .arrow {
            background-color: #483D8B;
            border: solid black;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
        }

        .right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
        }

        .left {
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
        }


    }

    img {
        height: 60vh;
        width: 85%;
        object-fit: contain

    }
    .explanation {
        border: 4px solid #8A473D;
        background-color: #3E818A;
        width: 80%;
        padding: 20px;
    }
`;


const Apod = (props) => {
    const { title, hdurl, explanation, date } = props


    return(
        <StyledApod className='container'>
            <h1>{title} {date}</h1>
            <div className='img-container'>
                <button className='arrow left'></button>
                <img src={hdurl} alt='photo of the day' className='image' />
                <button className='arrow right'></button>
            </div>
            <p className='explanation'>{explanation}</p>
            <Search />
        </StyledApod>
    )
}

export default Apod