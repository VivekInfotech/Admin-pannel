import { Box } from '@mui/material'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from 'react'
import line from './Line 9.png'

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Icons', path: '/icons' },
    { name: 'Interface icons', path: '/interface-icons' },
    { name: 'Animated icons', path: '/animated-icons' },
];

const Help = [
    { name: 'Support', path: '' },
    { name: 'FAQs', path: '' },
    { name: 'Icon styles', path: '' },
    { name: 'IconGrid collections', path: '' },
    { name: 'Follow', path: '' },
];
const Tools = [
    { name: 'API', path: '' },
    { name: 'Google Workspace', path: '' }
];
const Company = [
    { name: 'About', path: '' },
    { name: 'Contact us', path: '' },
    { name: 'License', path: '' },

    { name: 'Pricing', path: '' },
    { name: 'Add icons', path: '' },
];
function Footer() {
    const history = useHistory();
    const handlePageClick = (path) => {
        history.push(path);

    };

    return (
        <Box>
            <Box sx={{ width: '100%', backgroundColor: '#272727', borderRadius: '230px 0px 0px 0px', paddingTop: '70px' }}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid xs={9} sx={{ color: '#fff', display: 'flex', justifyContent: 'space-around' }}>
                            <Grid xs={2}>
                                <Box sx={{ fontSize: '24px', fontWeight: '600' }}>
                                    Content
                                </Box>
                                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    {pages.map((page, i) => (
                                        <Button
                                            key={i}
                                            onClick={() => handlePageClick(page.path)}
                                            sx={{ my: 1, color: 'white', display: 'flex', justifyContent: 'flex-start', textTransform: 'capitalize', padding: '0' }}
                                        >
                                            {page.name}
                                        </Button>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                                <Box sx={{ fontSize: '24px', fontWeight: '600' }}>
                                    Tools
                                </Box>
                                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    {Tools.map((page, i) => (
                                        <Button
                                            key={i}
                                            onClick={() => handlePageClick(page.path)}
                                            sx={{ my: 1, color: 'white', display: 'flex', justifyContent: 'flex-start', textTransform: 'capitalize', padding: '0' }}
                                        >
                                            {page.name}
                                        </Button>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid xs={2}>
                                <Box sx={{ fontSize: '24px', fontWeight: '600' }}>
                                    Help
                                </Box>
                                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    {Help.map((page, i) => (
                                        <Button
                                            key={i}
                                            onClick={() => handlePageClick(page.path)}
                                            sx={{ my: 1, color: 'white', display: 'flex', justifyContent: 'flex-start', textTransform: 'capitalize', padding: '0' }}
                                        >
                                            {page.name}
                                        </Button>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid xs={3}>
                                <Box sx={{ fontSize: '24px', fontWeight: '600' }}>
                                    Company
                                </Box>
                                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    {Company.map((page, i) => (
                                        <Button
                                            key={i}
                                            onClick={() => handlePageClick(page.path)}
                                            sx={{ my: 1, color: 'white', display: 'flex', justifyContent: 'flex-start', textTransform: 'capitalize', padding: '0' }}
                                        >
                                            {page.name}
                                        </Button>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid xs={3} sx={{ color: '#fff' }}>
                            <Box sx={{width:'100%', fontSize: '24px', fontWeight: '600',display:'flex',justifyContent:'center' }}>
                                Socials
                            </Box>
                            <Box sx={{fontSize:'35px',display:'flex',justifyContent:'space-around',paddingTop:'10px' }}>
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                                
                            </Box>
                                      
                        
                        </Grid>
                        
                    </Grid>
                    
                    <Box sx={{padding:'30px 0px 20px 0px'}}>
                    <img width={'100%'} src={line} alt="" />   
                     </Box>
                    <Box sx={{textAlign:'center',color:'white',paddingBottom:'20px'}}>
                    Copyright © 2024 IconGrid Company S.L. All rights reserved
                    </Box>                            
                </Container>
            </Box>
        </Box>
    )
}

export default Footer