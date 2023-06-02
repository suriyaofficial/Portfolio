import React from 'react'
import { useState } from 'react'
import { Drawer, List, ListItemButton, ListItemText, ListItemIcon, IconButton } from '@mui/material'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';


const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);


    return (
        <>
            <Drawer open={openDrawer}
                sx={{ background: "#062925" }}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText href="#about" >TEMPLETE</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon >
                            <ListItemText  >ABOUT US</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                </List>
            </Drawer>

            <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>

        </>
    )
}

export default DrawerComp
