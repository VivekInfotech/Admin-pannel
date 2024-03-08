import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import faq from './brands/FAQs-bro.png'
function Faqs() {
  return (
    <Box>
        <Box sx={{ margin: '100px 20px',borderRadius:'40px', backgroundColor: '#FDF0CE' }}>
                <Container maxWidth="xl" sx={{}}>
                    <Grid container xs={12}>
                        <Grid xs={6} sx={{  }}>
                            <Box>

                            </Box>
                        </Grid>
                        <Grid xs={6} sx={{}}>
                            <Box>
                                <img width={'100%'} src={faq} alt="" srcset="" />
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
    </Box>
  )
}

export default Faqs