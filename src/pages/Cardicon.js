import React from 'react'
import { Box, Grid } from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Cardicon(props) {


    const [data, setData] = useState([])

    console.log(props.categoryName);
    useEffect(() => {
        getIcons(props.categoryName)
    }, [])

    const getIcons = (categoryName) => {
        axios.get(`http://localhost:3001/icon/findOne/${categoryName}`)
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data)
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }

    return (
        <Box className={props.name} sx={{ border: '1px solid', borderRadius: '10px', overflow: 'hidden' }}>
            <Box sx={{ padding: '15px 10px' }}>
                <Grid container>

                    {
                        data.map((el, index) => {
                            if (index <= 7) {
                                return <Grid key={index} xs={3} className='center'>
                                    <Box sx={{ marginY: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px', display: 'inline-block', padding: '17px' }}>
                                        <img src={el.regular} alt={el.name} title={el.name} width="20px" height="auto" />
                                    </Box>
                                </Grid>
                            }
                        })
                    }
                </Grid>
            </Box>
            <Box className="info-area">
                <h3 className='m-0'>{props.heading}</h3>
                <p className='m-0'>{props.description}</p>
            </Box>
        </Box>
    )
}