import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function NoMatch() {

    //logic goes here

    return (
        <section className='home-section container d-flex flex-column justify-content-middle align-items-center '>
            <h1 className='h1-404'>404</h1>
            <p className='p-404'>Whoops! Looks like the page you are looking for is not here!</p>
            <Link to='/' role='button' className='main-btn'>
                Return to homepage
            </Link>
        </section>
    );
}

export default NoMatch;