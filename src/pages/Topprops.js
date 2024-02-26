import React from 'react'
import { Box } from '@mui/material'
import house from './house.png'
import Grid from '@mui/material/Grid';

function Topprops(props) {

    return (
        <Box className='iconss' onClick={props.onClick} >
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                <Grid sx={{ display: 'flex', width: '100px', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={props.image} alt="" />
                    <Box sx={{ paddingTop: '20px' }}>
                        {props.tag}
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}

export default Topprops