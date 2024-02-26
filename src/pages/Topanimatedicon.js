import {React,useState }from 'react'
import { Box, Container, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import { FaAccusoft, FaAmbulance, FaImage } from "react-icons/fa";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FullScreenDialog from './FullScreenDialog';
function Topanimatedicon() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);  
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <Box>
      <Box sx={{ padding: '100px 20px 0px 20px' }}>
        <Box sx={{fontSize:{xs:'34px',sm:'50px',md:'72px'}, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Top animated
        </Box>
        <Box sx={{ fontSize:{xs:'34px',sm:'50px',md:'72px'}, marginTop:{ xs:'-30px',sm:'-48px',md:'-65px'}, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
          Icon 
        </Box>
      </Box>
      <Grid container paddingTop={'10px'}>
        <Grid container paddingTop={'35px'} xs={12} className='center'>

          <Grid lg={1} sx={{ padding: '15px' }}  >
            <Box onClick={handleOpenDialog} className="card4" id="card4">
              <Box className="content4">
                <FaAccusoft fontSize={'60px'} />
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}  >
            <Box className="card4" id="card4">
              <Box className="content4">
                <FaAccusoft fontSize={'60px'} />
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
                <FaAmbulance fontSize={'60px'} />
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
        
       
          <Grid lg={1} sx={{ padding: '15px' }}  >
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}  >
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}  >
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}  >
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}  >
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}  >
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <Grid lg={1} sx={{ padding: '15px' }}>
            <Box className="card4" id="card4">
              <Box className="content4">
              </Box>
            </Box>
          </Grid>
          <FullScreenDialog open={isDialogOpen} onClose={handleCloseDialog} />

        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center',padding:'40px 0px' }}>
              <Stack spacing={2}>
                <Pagination
                  count={10}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </Box>
    </Box>
  )
}

export default Topanimatedicon