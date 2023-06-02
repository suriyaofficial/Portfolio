import React, { useEffect } from 'react'
import './style.css';
import logo from "../asset/Hacker-pana (1).png"
import mail from "../asset/icons8-gmail-100.png"
import github from "../asset/icons8-github-100.png"
import linkedin from "../asset/icons8-linkedin-100.png"
import behance from "../asset/icons8-behance-100.png"
import Typewriter from 'typewriter-effect';

import Grid from '@mui/material/Grid';
function Header() {
    const word = ['UI DESIGNER', 'WEB DEVELOPER', 'hai']
    // const { text } = useTypewriter({
    //     words: ['UI DESIGNER', 'WEB DEVELOPER', 'hai'],
    // });
    // const [state] = useEffect({
    //     title: "UI DESIGNER",
    //     titleTwo:"WEB DEVELOPER"
    // });
    return (
        <div id="home">
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid sx={{ display: { xs: 'none', md: 'flex' } }} md={6}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid >
                        <h1 className="header-text" >SURIYA</h1>
                    </Grid>
                    <Grid>
                        <h4 className="header-sub-text">I'm a
                        </h4>
                    </Grid>
                    <Grid >
                        <h4 className="header-sub-text">
                            <Typewriter
                                options={{
                                    strings: ['UI DESIGNER', 'WEB DEVELOPER'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                        </h4>
                    </Grid>
                    <Grid >
                        <span> <a href='https://mail.google.com/mail/?view=cm&to=suriyaboss1@gmail.com&su=support_mail&body=hey%20suriya' target='_blank' ><img className='social-logo' src={mail} /></a> </span>
                        <span> <a href='https://www.linkedin.com/in/suriyaofficial' target='_blank' ><img className='social-logo' src={linkedin} /></a></span>
                        <span> <a href='https://github.com/suriyaofficial' target='_blank' ><img className='social-logo' src={github} /></a></span>
                        <span> <a href='https://www.behance.net/suriyaofficial' target='_blank' ><img className='social-logo' src={behance} /></a></span>
                    </Grid>
                </Grid>
                <Grid sx={{ display: { xs: 'none', md: 'flex' } }} md={6}>
                    <img className="header-img" src={logo}></img>
                </Grid>
            </Grid>


            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid sx={{ display: { xs: 'flex', md: 'none' } }} md={6}>
                    <img className="header-img-xs" src={logo}></img>
                </Grid>
                <Grid sx={{ display: { xs: 'flex', md: 'none' } }} md={6}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid >
                        <h1 className="header-text-xs" >SURIYA</h1>
                    </Grid>
                    <Grid>
                        <h4 className="header-sub-text-xs">I'm a
                        </h4>
                    </Grid>
                    <Grid >
                        <h4 className="header-sub-text-xs">
                            <Typewriter
                                options={{
                                    strings: ['UI DESIGNER', 'WEB DEVELOPER'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                        </h4>
                    </Grid>
                    <Grid >
                        <span> <a href='https://mail.google.com/mail/?view=cm&to=suriyaboss1@gmail.com&su=support_mail&body=hey%20suriya' target='_blank' ><img className='social-logo-xs' src={mail} /></a> </span>
                        <span> <a href='https://www.linkedin.com/in/suriyaofficial' target='_blank' ><img className='social-logo-xs' src={linkedin} /></a></span>
                        <span> <a href='https://github.com/suriyaofficial' target='_blank' ><img className='social-logo-xs' src={github} /></a></span>
                        <span> <a href='https://www.behance.net/suriyaofficial' target='_blank' ><img className='social-logo-xs' src={behance} /></a></span>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}
export default Header