import React, {useState, useEffect} from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
import ProjectDetail from "../components/ProjectDetail"
import './style.css'

function Project() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div>
            <ProjectDetail />
        </div>
    );
}

export default Project;