import React from 'react'
import './style.css';
import logo from "../asset/Hacker-pana (1).png"
import mail from "../asset/icons8-gmail-100.png"
import github from "../asset/icons8-github-100.png"
import linkedin from "../asset/icons8-linkedin-100.png"
import behance from "../asset/icons8-behance-100.png"

import { Container, Row, Col } from 'react-bootstrap';

function Header() {
    return (
        <div id="header">
            <Container>
                <Row>
                    <Col lg={6} className="d-flex flex-column justify-center text-center align-center  ">
                        <h1 className="header-text" >SURIYA</h1>
                        <h4 className="header-sub-text">Web Developer</h4>
                        <Col>
                            <span> <a href='https://mail.google.com/mail/?view=cm&to=suriyaboss1@gmail.com&su=support_mail&body=hey%20suriya' target='_blank' ><img className='social-logo' src={mail} /></a> </span>
                            <span> <a href='https://www.linkedin.com/in/suriyaofficial' target='_blank' ><img className='social-logo' src={linkedin} /></a></span>
                            <span> <a href='https://github.com/suriyaofficial' target='_blank' ><img className='social-logo' src={github} /></a></span>
                            <span> <a href='https://www.behance.net/suriyaofficial' target='_blank' ><img className='social-logo' src={behance} /></a></span>
                        </Col>

                    </Col>
                    <Col lg={6}><img className="img" src={logo}></img></Col>
                </Row>

            </Container>

        </div>
    )
}

export default Header