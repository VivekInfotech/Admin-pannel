import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { FaAccusoft, FaAmbulance } from "react-icons/fa";
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FullScreenDialog from './FullScreenDialog';
import Container from '@mui/material/Container';

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
                sx={{ flexGrow: 1, }}
            >
                <Toolbar />
                <Box className="center" sx={{fontSize:'30px',color:'#272727',fontWeight:600,paddingTop:'50px'}}>
                    Icon Pack : XYZ 
                </Box>
                <Box className="center" paddingBottom={'30px'}>
                50 icons
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

        </Box>
    );
}