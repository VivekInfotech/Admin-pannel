import React from 'react'
import { Box } from '@mui/material'

function Cardicon(props) {
    return (
        <Box className={props.name} sx={{ border: '1px solid', borderRadius: '10px', overflow: 'hidden' }}>
            <img src={props.bannerimg} alt="" />
            <Box class="info-area">
                <h3 className='m-0'>{props.heading}</h3>
                <p className='m-0'>{props.description}</p>
            </Box>
        </Box>
    )
}

export default Cardicon