import React, { useEffect } from 'react'
import './style.css';
import logo from "../asset/Hacker-pana (1).png"
import mail from "../asset/icons8-gmail-100.png"
import github from "../asset/icons8-github-100.png"
import linkedin from "../asset/icons8-linkedin-100.png"
import behance from "../asset/icons8-behance-100.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Typewriter from 'typewriter-effect';

import { Container, Row, Col } from 'react-bootstrap';


function Header() {
    // const { text } = useTypewriter({
    //     words: ['UI DESIGNER', 'WEB DEVELOPER', 'hai'],
    //     loop: {},
    // });
    // const [state] = useEffect({
    //     title: "UI DESIGNER",
    //     titleTwo:"WEB DEVELOPER"
    // });
    return (

        <div id="home">




            <Container>
                <Row>
                    <Col xs={12} lg={6} className="d-flex flex-column justify-center text-center align-center  ">
                        <h1 className="header-text" >SURIYA</h1>
                        <h4 className="header-sub-text">im a<Cursor /></h4>
                        <Typewriter options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            string: ['UI DESIGNER', 'WEB DEVELOPER', 'hai']
                        }} />

                        <Col xs={12}>
                            <span> <a href='https://mail.google.com/mail/?view=cm&to=suriyaboss1@gmail.com&su=support_mail&body=hey%20suriya' target='_blank' ><img className='social-logo' src={mail} /></a> </span>
                            <span> <a href='https://www.linkedin.com/in/suriyaofficial' target='_blank' ><img className='social-logo' src={linkedin} /></a></span>
                            <span> <a href='https://github.com/suriyaofficial' target='_blank' ><img className='social-logo' src={github} /></a></span>
                            <span> <a href='https://www.behance.net/suriyaofficial' target='_blank' ><img className='social-logo' src={behance} /></a></span>
                        </Col>

                    </Col>
                    <Col xs={12} lg={6}><img className="header-img" src={logo}></img></Col>
                </Row>

            </Container>

        </div>
    )
}
export default Header