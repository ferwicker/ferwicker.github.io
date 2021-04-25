import React, {useState, useEffect} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import './style.css'
import cone from '../assets/images/contact-img.png'

function Contact() {

    //logic goes here

    return (
        <section className='container home-section'>
            <Row>
                <Col size='md-6'>
                    <h1 className='medium-headline'>Contact me</h1>
                    <h2 className='sub-heading'>Let's make some magic!</h2>
                    <p>Email: <a href='mailto:fern@thegrounded.studio'>fern@thegrounded.studio</a></p>
                    <p>Call: <a href='tel:61426404077'>+61 426 404 077</a></p>
                    <p>Get social:</p>
                    <div>
                        <a aria-hidden="true" class="fas fa-file-download fa-2x social-contact" title="Download" href="" target="_blank"><span class="sr-only">Resume Download</span></a>
                        <a aria-hidden="true" class="fab fa-github fa-2x social-contact" title="Github" href="https://github.com/ferwicker" target="_blank"><span class="sr-only">Github profile</span></a>
                        <a aria-hidden="true" class="fab fa-linkedin-in fa-2x social-contact" title="Linkedin" href="https://www.linkedin.com/in/ferwicker/" target="_blank"><span class="sr-only">Linkedin profile</span></a>
                        <a aria-hidden="true" class="fab fa-instagram fa-2x social-contact" title="Instagram" href="https://www.instagram.com/fer.wicker/" target="_blank"><span class="sr-only">Instagram profile</span></a>
                    </div>
                </Col>
                <Col size='md-6'>
                    <div>
                        <img src={cone} alt='' className='contact-img'></img>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Contact;