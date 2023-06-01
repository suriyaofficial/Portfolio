import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { HashLink } from 'react-router-hash-link';

function NavTab() {
    const [value, setValue] = useState();

    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} >
                    <AppBar position="float" sx={{ background: "#044A42" }}>
                        <Toolbar>


                            {/* <img className='img' src={logo} alt='' /> */}

                            <Tabs
                                sx={{ marginLeft: "auto" }}
                                textColor="#3A9188"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                                indicatorColor="#3A9188">
                                <Tab component={Link} to={"home"} label="Home" ><HashLink smooth to="#header" /></Tab>
                                <Tab component={Link} to={"Experience"} label="Experience"> <HashLink smooth to="#experience" /> </Tab>
                                <Tab component={Link} to={"Project"} label="Project"> <HashLink smooth to="#project" /></Tab>
                                <Tab component={Link} to={"Contact_us"} label="Contact us"> <HashLink smooth to="#contactus" /></Tab>
                                <Tab component={Link} to={"about"} label="About" />

                            </Tabs>





                        </Toolbar>

                    </AppBar>

                </Grid>
            </Grid>


        </>
    );
}

export default NavTab;