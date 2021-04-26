import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
//import round from '../../assets/images/project-round.png'

function ProjectSquare (props) {
    const projectLink = `/projects/${props.name}`
    return (
        <Link to={projectLink} key='props.name' className='project-link'>
            <div className='project-preview-sq d-flex justify-content-center align-items-center' >
                <h3 className='project-name'>{props.title}</h3>
            </div>
        </Link>
    );
};

export default ProjectSquare;