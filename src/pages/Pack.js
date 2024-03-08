// Pack.js
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FullScreenDialog from './FullScreenDialog';
import Container from '@mui/material/Container';

export default function Pack() {

    const [isDialogOpen, setDialogOpen] = useState(false);
    const [icons, setIcons] = useState([]);
    const [selectedIconId, setSelectedIconId] = useState(null);
    const [categoryName, setCategoryName] = useState('');

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.categoryName) {
            setCategoryName(location.state.categoryName);
            getIcons(location.state.categoryName);
        }
    }, [location]);


    const handleOpenDialog = (iconId) => {
        setDialogOpen(true);
        setSelectedIconId(iconId);
    };

    const handleCloseDialog = async (iconId) => {
        setDialogOpen(false);
        updateIcons(iconId)
    };

    const updateIcons = async (iconId) => {
        await axios.put(`http://localhost:3001/editIcon/update/${iconId}/000000/icon`)
            .then((res) => {
                console.log("update Icon color :- ", res.data.data);
                getIcons(categoryName);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }


    const getIcons = (categoryName) => {
        axios.get(`http://localhost:3001/icon/findOne/${categoryName}`)
            .then((res) => {
                console.log(res.data.data);
                setIcons(res.data.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Box
                component="main"
                sx={{ flexGrow: 1, }}
            >
                <Toolbar />
                <Box className="center" sx={{ fontSize: '30px', color: '#272727', fontWeight: 600, paddingTop: '50px' }}>
                    Icon Pack: {categoryName}
                </Box>
                <Box className="center" paddingBottom={'30px'}>
                    {icons.length} icons
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container maxWidth="lg">
                        <Grid xs={12} container >

                            {
                                icons.map((el, index) => {
                                    return <Grid key={index} xs={6} sm={4} md={2}>
                                        <Box onClick={() => handleOpenDialog(el._id)}>
                                            <Box className="card3 wallet">
                                                <Box className="overlay"></Box>
                                                <Box className="circle" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="60" height="60" dangerouslySetInnerHTML={{ __html: el.regular }}></svg>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                })
                            }

                            <Grid xs={12}>
                                <Box className="center" sx={{ fontSize: "18px", padding: '10px' }}>
                                    <Box sx={{ border: '1px solid #FFBC06', padding: '7px 20px', borderRadius: '5px', backgroundColor: '#FFBC06' }}>
                                        <Link to="/most-downloads">
                                            See All Icon
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <FullScreenDialog open={isDialogOpen} onClose={() => handleCloseDialog(selectedIconId)} iconId={selectedIconId} entityType="icon" />
                        </Grid>
                    </Container>
                </Box>

            </Box>

        </Box>
    );
}
