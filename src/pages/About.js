import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import selfie from '../assets/images/van-working.png';
import './style.css';

function About() {

    //logic goes here
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <Container>
            <Row>
                <Col size='md-6'>
                    <div className='about-content justify-content-middle'>
                        <h1 className='medium-headline'>
                            About me
                        </h1>
                        <p>
                            My name is Fer Wicker and I am a graphic and web designer 
                            and full stack developer from Sydney, Australia.
                        </p>
                        <p>
                            I have over 8 years’ experience in graphic design and I am 
                            about to complete a 6 month bootcamp in full stack web development!
                        </p>
                        <p>
                            I currently work in Marketing and freelance web and graphic design.
                        </p>
                        <p>
                            I love yoga, books, wine and my puppy Fish, and I am excited to continue learning 
                            and working on new challenges.
                        </p>
                        <div className='spacer-20'></div>
                        <Link to='/portfolio' role='button' className='main-btn'>
                            See my work
                        </Link>
                    </div>
                </Col>
                <Col size='md-6'>
                    <img src={selfie} alt='about me selfie' className='about-img'></img>
                </Col>
            </Row>
        </Container>
    );
}

export default About;