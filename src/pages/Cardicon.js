import React from 'react'
import { Box, Grid } from '@mui/material'

function Cardicon(props) {
    return (
        <Box className={props.name} sx={{ border: '1px solid',borderRadius:'10px', overflow: 'hidden' }}>
            <Box sx={{ padding: '15px 10px' }}>
                <Grid container>
                    <Grid xs={3} className='center'>
                        <Box sx={{ backgroundColor: '#F5F5F5',borderRadius:'10px', display: 'inline-block', padding: '17px' }}>px
                        <img width={'100%'} src={props.bannerimg} alt="" />

                        </Box>
                    </Grid>
                    <Grid xs={3} className='center'>
                        <Box sx={{ backgroundColor: '#F5F5F5',borderRadius:'10px', display: 'inline-block', padding: '17px' }}>px
                            <img width={'100%'} src={props.bannerimg} alt="" />
                        </Box>
                    </Grid>
                    <Grid xs={3} className='center'>
                        <Box sx={{ backgroundColor: '#F5F5F5',borderRadius:'10px', display: 'inline-block', padding: '17px' }}>px
                        <img width={'100%'} src={props.bannerimg} alt="" />

                        </Box>
                    </Grid>
                    <Grid xs={3} className='center'>
                        <Box sx={{ backgroundColor: '#F5F5F5',borderRadius:'10px', display: 'inline-block', padding: '17px' }}>px
                        <img width={'100%'} src={props.bannerimg} alt="" />

                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ padding: '15px 10px' }}>
                <Grid container>
                    <Grid xs={3} className='center'>
                        <Box sx={{ backgroundColor: '#F5F5F5',borderRadius:'10px', display: 'inline-block', padding: '17px' }}>px
                        <img width={'100%'} src={props.bannerimg} alt="" />

                        </Box>
                    </Grid>
                    <Grid xs={3} className='center'>
                        <Box sx={{ backgroundColor: '#F5F5F5',borderRadius:'10px', display: 'inline-block', padding: '17px' }}>px
                        <img width={'100%'} src={props.bannerimg} alt="" />

                        </Box>
                    </Grid>
                    <Grid xs={3} className='center'>
                        <Box sx={{ backgroundColor: '#F5F5F5',borderRadius:'10px', display: 'inline-block', padding: '17px' }}>px
                        <img width={'100%'} src={props.bannerimg} alt="" />

                        </Box>
                    </Grid>
                    <Grid xs={3} className='center'>
                        <Box sx={{ backgroundColor: '#F5F5F5',borderRadius:'10px', display: 'inline-block', padding: '17px' }}>px
                        <img width={'100%'} src={props.bannerimg} alt="" />

                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box class="info-area">
                <h3 className='m-0'>{props.heading}</h3>
                <p className='m-0'>{props.description}</p>
            </Box>
        </Box>
    )
}

export default Cardicon