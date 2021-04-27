import React, {useState, useEffect} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import './style.css'
import ProjectsInfo from '../assets/ProjectsInfo'
import ProjectSquare from '../components/ProjectSquare'

function Portfolio() {

    //logic goes here
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <section className='home-section container d-flex flex-column align-items-center'>
            <h1 className='medium-headline'>My work</h1>
            <Container>
                    <Row>
                        {ProjectsInfo.map((project,index)=>(
                            <Col size='sm-4'>
                                <ProjectSquare 
                                name={project.name}
                                title={project.title}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
        </section>
        
    );
}

export default Portfolio;