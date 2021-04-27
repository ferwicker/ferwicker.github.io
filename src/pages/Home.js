import React, {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ProjectRound from "../components/ProjectRound";
import './style.css'
import wave from '../assets/images/hero-wave.png'
import cube from '../assets/images/cube-green.png'
import ProjectsInfo from '../assets/ProjectsInfo'

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div>
            <section className='container home-section'>
                <h1 className='hero-intro'>I am a graphic/web <br></br>
                 designer & developer.</h1>
                <p className='hero-sub'>I live in Sydney, Australia.</p>
                <div className='hero-img-container'>
                    <img className='hero-image' src={wave} alt=''></img>
                </div>
            </section>
            <section className='home-section'>
                <Container>
                    <Row>
                        <Col size='md-6'>
                            <img className='cube-img' src={cube} alt=''></img>
                        </Col>
                        <Col size='md-6'>
                            <div className='about-content'>
                                <h2 className='medium-headline'>About me</h2>
                                <p>
                                My name is Fer Wicker and I am a graphic and web designer 
                                and full stack developer from Sydney.
                                </p>
                                <p>
                                I have over 8 years’ experience in graphic design and I am 
                                about to complete a 6 month bootcamp in full stack web development.
                                </p>
                                <div className='spacer-20'></div>
                                <Link to='/about' role='button' className='main-btn'>
                                    Read more
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='home-section d-flex flex-column align-items-center justify-content-middle'>
                <h2 className='medium-headline'>My work</h2>
                <p>
                    My name is Fer Wicker and I am a graphic and web designer 
                    and full stack developer from Sydney.
                </p>
                <div className='spacer-20'></div>
                <Container>
                    <Row>
                        {ProjectsInfo.map((project,index)=>(
                            project.featured ?
                                <Col size='sm-4'>
                                    <ProjectRound 
                                    name={project.name}
                                    title={project.title}/>
                                </Col>
                            : ''
                        ))}
                    </Row>
                </Container>
                <div className='spacer-20'></div>
                <Link to='/portfolio' role='button' className='main-btn'>
                    See all
                </Link>
            </section>
        </div>
    );
}

export default Home;