import React, { useState } from 'react'
import Cardicon from './Cardicon'
import { Box, Grid, Link } from '@mui/material'
import FullScreenDialog from './FullScreenDialog';

function BlackFill() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [data, setData] = useState([])


    const handleOpenDialog = () => {
        setDialogOpen(true);

    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    return (
        <Box sx={{ paddingBottom: '150px' }}>

            <Box sx={{ padding: '50px 20px 0px 20px' }}>
                <Box sx={{ fontSize: { xs: '22px', sm: '50px', md: '72px' }, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
                    Black Fill
                </Box>
                <Grid container sx={{ paddingTop: '50px' }}>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowyellow" bannerimg={''} heading={'Business'} description="Business icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowblue" bannerimg={''} heading={'Food'} description="Food icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowyellow" bannerimg={''} heading={'Hospital'} description="Hospital icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowblue" bannerimg={''} heading={'Animal'} description="Animal icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowyellow" bannerimg={''} heading={'Language'} description="Language icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowblue" bannerimg={''} heading={'Alert'} description="Alert icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowyellow" bannerimg={''} heading={'Indian Brands'} description="Indian icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowblue" bannerimg={''} heading={'Education'} description="Education icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowyellow" bannerimg={''} heading={'Business'} description="Business icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowblue" bannerimg={''} heading={'Business'} description="Business icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowyellow" bannerimg={''} heading={'Business'} description="Business icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowblue" bannerimg={''} heading={'Business'} description="Business icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowyellow" bannerimg={''} heading={'Business'} description="Business icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowblue" bannerimg={''} heading={'Business'} description="Business icon set more than 200+" />
                        </Link>
                    </Grid>
                    <Grid lg={3} md={4} sm={6} xs={12} className='setcontant'>
                        <Link to="/pack">
                            <Cardicon name="boxshadowyellow" bannerimg={''} heading={'Business'} description="Business icon set more than 200+" />
                        </Link>
                    </Grid>


                </Grid>
                <Grid container paddingTop={{ xs: '20px', md: '45px' }} xs={12} className='center'>

                    {
                        data.map((el, index) => {
                            return <Grid key={index} xs={6} sm={4} md={2} lg={1} sx={{ padding: '15px' }}  >
                                <Box onClick={handleOpenDialog} className="card4" id="card4">
                                    <Box className="content4">
                                        <img src={el.regular} alt={el.name} title={el.name} width="50px" height="auto" />
                                    </Box>
                                </Box>
                            </Grid>

                        })
                    }

                    <FullScreenDialog open={isDialogOpen} onClose={handleCloseDialog} />

                </Grid>
            </Box>
        </Box>
    )
}

export default BlackFill