import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectsInfo from '../../assets/ProjectsInfo';
import Container from "../Container";

function ProjectDetail(props){
    const [project, setProject] = useState({});
    const {name}=useParams();

    useEffect(() => {
        const getProject = ProjectsInfo.find(item => item.name === name);
        setProject(getProject);
      }, [])
    

    return (
        <Container>
            <section className='home-section'></section>
        <h1 className='big-erotique'>{project.title}</h1>
        </Container>
    );
};

export default ProjectDetail;