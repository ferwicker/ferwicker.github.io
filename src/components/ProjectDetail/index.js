import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectsInfo from '../../assets/ProjectsInfo';
import Container from "../Container";
import Row from "../Row"
import Col from "../Col"
import './style.css'


function ProjectDetail(props){
    const [project, setProject] = useState({});
    //const [technologies, setTechnologies] = useState([]);
    const {name}=useParams();

    useEffect(() => {
        const getProject = ProjectsInfo.find(item => item.name === name);
        setProject(getProject);
      }, []);
      
    const techs = project.technologies;

    return (
        <Container>
            <section className='home-section d-flex flex-column justify-content-center'>
                <h1 className='big-erotique'>{project.title}</h1>
                <p className='project-intro'>{project.shortIntro}</p>
                <div className='d-flex'>
                    <a href={project.deployed} target='_blank' rel='noreferrer' className='main-btn'>Deployed project</a>
                    <div className='spacer-20'></div>
                    <div className='spacer-20'></div>
                    <a href={project.repo} target='_blank' rel='noreferrer' className='main-btn'>github repo</a>
                </div>
            </section>
            <section className='home-section'>
                <h2 className='medium-headline'>technologies</h2>
                <div>
                    {//used ternary expression to fix issue with techs being undefined due to timing
                        techs ?
                        techs.map((tech, index)=>(
                            <span key={index} className='technology-name'>{tech} </span>
                        ))
                        : ''
                    }
                </div>
                <img className='main-screenshot' src={`/project-assets/${project.screenshot}`} alt={`${project.title} screenshot`}></img>
                <p className='project-highlight'>{project.intro}</p>
                    <Row>
                        <Col size='md-8'>
                            <div className='project-description'>{project.description}</div>
                        </Col>
                        <Col size='md-4'>
                            <img className='secondary-screenshot' src={`/project-assets/${project.screenshot2}`} alt={`${project.title} screenshot`}></img>
                        </Col>
                    </Row>
            </section>
        </Container>
    );
};

export default ProjectDetail;