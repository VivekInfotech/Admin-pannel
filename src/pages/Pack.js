import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { FaChessKing, FaShare } from "react-icons/fa6";
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FaAccusoft, FaAmbulance } from "react-icons/fa";
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FullScreenDialog from './FullScreenDialog';
import Container from '@mui/material/Container';
const drawerWidth = 450;

export default function Pack() {

    const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);  
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Box>
                    Icon Pack : XYZ | 50 icons
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container maxWidth="lg">
                        <Grid xs={12} container >
                            <Grid xs={6} sm={4} md={2}>
                                <Box onClick={handleOpenDialog}>
                                    <Box class="card3 wallet">
                                        <Box class="overlay"></Box>
                                        <Box class="circle" >
                                            <FaAccusoft fontSize={'60px'} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                            <Box onClick={handleOpenDialog}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">
                                        <FaAmbulance fontSize={'60px'} />
                                    </Box>

                                </Box>
                            </Box>
                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                            <Box onClick={handleOpenDialog}>
                                    <Box class="card3 wallet">
                                        <Box class="overlay"></Box>
                                        <Box class="circle" >
                                            <FaAccusoft fontSize={'60px'} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={6} sm={4} md={2}>
                                <Box class="card3 wallet">
                                    <Box class="overlay"></Box>
                                    <Box class="circle">

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid xs={12}>
                                <Box className="center" sx={{ fontSize: "18px", padding: '10px' }}>
                                    <Box sx={{ border: '1px solid #FFBC06', padding: '7px 20px', borderRadius: '5px', backgroundColor: '#FFBC06' }}>
                                        <Link to="/most-downloads">See All Icon</Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <FullScreenDialog open={isDialogOpen} onClose={handleCloseDialog} />
                        </Grid>
                    </Container>
                </Box>

            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <Box paddingTop={'64px'}>
                    <Box padding={'15px'}>
                        Premium IconGrid iocns
                        <Box paddingTop={'5px'} color={'#888888'} fontSize={'14px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptate alias recusandae magnam repudiandae quae!</Box><hr />
                        <Box>
                            Download Format
                            <Box paddingTop={'5px'} color={'#888888'} fontSize={'14px'}>Obtain a vector icon in SVG and EPS formats, as well as a PNG version.</Box><hr />
                        </Box>
                        <Box sx={{ paddingTop: '50px' }}>
                            <Box sx={{ backgroundColor: '#FFBC06', overflow: 'hidden', borderRadius: '7px', display: 'inline-block', padding: '7px 50px' }}>
                                <FaChessKing />Download
                            </Box>
                            <Box sx={{ marginLeft: '10px', backgroundColor: '#FFBC06', overflow: 'hidden', borderRadius: '7px', display: 'inline-block', padding: '7px 20px' }}>
                                <FaShare />
                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Drawer>
        </Box>
    );
}