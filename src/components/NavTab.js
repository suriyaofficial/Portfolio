import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import Drawer from './Drawer'
import Grid from '@mui/material/Grid';
import { HashLink } from 'react-router-hash-link';




function NavTab() {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} >
                    <AppBar position="fixed" sx={{ background: "#062925" }}>
                        <Toolbar>

                            {
                                isMatch ?
                                    (
                                        <>
                                            <Drawer />
                                        </>
                                    ) : (<>
                                        <Tabs
                                            sx={{ marginLeft: "auto" }}
                                            textColor="#3A9188"
                                            value={value}
                                            onChange={(e, value) => setValue(value)}
                                            indicatorColor="">


                                            <Tab label="HOME" href='#home' />
                                            <Tab label="EXPERIENCE" href='#experience' />
                                            <Tab label="PROJECT" href='#project' />
                                            <Tab label="CONTACT_US" href='#contact' />
                                            <Tab label="ABOUT_ME" href='#about' />
                                            <Tab />


                                        </Tabs>
                                    </>

                                    )
                            }

                        </Toolbar>

                    </AppBar>

                </Grid>
            </Grid>



        </>)
}

export default NavTab;