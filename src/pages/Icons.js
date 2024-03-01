import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import backgroundImg from './brands/app-preview-dark.jpg'
import banner from './coronavirus-5.png'
import Cardicon from './Cardicon';
import business from './brands/budinesss.png'
import food from './brands/food.png'
import hospital from './brands/hospital.png'
import animal from './brands/animal.png'
import language from './brands/language.png'
import alert from './brands/alert.png'
import indian from './brands/indian brands.png'
import Education from './brands/Education.png'

function Icons() {

  return (
    <Box sx={{ paddingBottom: '150px' }}>
      <Grid container paddingTop={'18px'}>
        <Grid xs={12} >
          <Box className="background" sx={{ flexDirection: { xs: 'column', md: 'row' }, backgroundColor: '#00000021', alignItems: 'center', display: 'flex' }}>
            <Grid md={6} xs={12} sx={{ padding: '20px', maxWidth: '100%' }}>

              <Box sx={{ fontSize: { xs: '15px', sm: '28px', md: '27px', lg: '32px' }, fontWeight: '700', padding: { xs: '50px 0px 0px 0px', sm: '50px 0px 0px 20px' }, color: '#272727' }}>
                Explore a diverse collection of over 14.2 million PNG icons available for free access.
              </Box>
              <Box sx={{ fontSize: { xs: '10px', sm: '18px', md: '19px', lg: '21px' }, padding: { xs: '10px 0px 0px 0px', sm: '10px 0px 0px 20px' } }}>
                Discover the extensive repository of vector icons for download, encompassing SVG, EPS, PSD, and BASE 64 formats, making it the most comprehensive database available.
              </Box>
              <Link to="/most-downloads">
                <Box sx={{ padding: { xs: '10px 0px 0px 0px', sm: '10px 0px 0px 20px', lg: '30px 0px 50px 20px' } }}>
                  <Box sx={{ fontSize: { xs: '12px', sm: '18px', md: '13px', lg: '21px' }, border: '1px solid #FFBC06', backgroundColor: '#FFBC06', borderRadius: '10px', padding: '10px 15px', display: 'inline-block', cursor: 'pointer' }}>
                    See Trending Icon
                  </Box>
                </Box>
              </Link>


            </Grid>
            <Grid md={6} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>

              <img src={backgroundImg} width={'100%'} alt="" srcset="" />

            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ padding: '50px 20px 0px 20px' }}>
        <Box sx={{ fontSize: { xs: '22px', sm: '50px', md: '72px' }, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Premium
        </Box>
        <Box sx={{ fontSize: { xs: '19px', sm: '50px', md: '72px' }, marginTop: { xs: '-23px', sm: '-48px', md: '-65px' }, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
          Icon Packs
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
      </Box>

      <Box sx={{ padding: { xs: '20px 20px', md: '50px 20px 50px 20px' } }}>
        <Box sx={{ fontSize: { xs: '22px', sm: '50px', md: '72px' }, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Poular
        </Box>
        <Box sx={{ fontSize: { xs: '19px', sm: '50px', md: '72px' }, marginTop: { xs: '-23px', sm: '-48px', md: '-65px' }, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
          Icon Styles
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#272727', padding: '0px 30px' }}>
        <Grid container sx={{ padding: '70px 0px', justifyContent: 'center' }}>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Indian Brands </p>
                <p class="text-body">Iconic Indian brands cover diverse sectors across various industries</p>
              </Box>
            </Box>
          </Grid>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Link to="/back-fill">
              <Box class="card">
                <Box class="card-img"></Box>
                <Box class="card-info">
                  <p class="text-title">Color Fill </p>
                  <p class="text-body">The "color fill" icon applies solid colors in graphic design software.</p>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Out Line</p>
                <p class="text-body">Outline emphasizes visual design edges.</p>
              </Box>
            </Box>
          </Grid>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Black Fill </p>
                <p class="text-body">
                  Black fill enriches design, adding depth and visual contrast.</p>
              </Box>
            </Box>
          </Grid>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Character </p>
                <p class="text-body">Icon symbolizes identity, individuality, personality.</p>
              </Box>
            </Box>
          </Grid>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Show</p>
                <p class="text-body">Product description and details</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: { xs: '20px', md: '50px 20px' } }}>
        <Box sx={{ fontSize: { xs: '22px', sm: '50px', md: '72px' }, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Top Icon
        </Box>
        <Box sx={{ fontSize: { xs: '19px', sm: '50px', md: '72px' }, marginTop: { xs: '-23px', sm: '-48px', md: '-65px' }, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
          Search
        </Box>
      </Box>

      <Box>
        <Container maxWidth="lg">
          <Grid container>
            <div class="tags foot-tags hide-foot-tags">
              <a href="" title="" class="text-capitalize">Education</a>
              <a href="" title="" class="text-capitalize">Technology</a>
              <a href="" title="" class="text-capitalize">User</a>
              <a href="" title="" class="text-capitalize">People</a>
              <a href="" title="" class="text-capitalize">Business</a>
              <a href="" title="" class="text-capitalize">Food</a>
              <a href="" title="" class="text-capitalize">Computer</a>
              <a href="" title="" class="text-capitalize">Marketing</a>
              <a href="" title="" class="text-capitalize">Document</a>
              <a href="" title="" class="text-capitalize">Man</a>
              <a href="" title=" " class="text-capitalize">Message</a>
              <a href="" title="" class="text-capitalize">Building</a>
              <a href="" title="" class="text-capitalize">Time</a>
              <a href="" title="" class="text-capitalize">Arrow</a>
              <a href="" title="" class="text-capitalize">Home</a>
              <a href="" title="" class="text-capitalize">House</a>
              <a href="" title="" class="text-capitalize">Music</a>
              <a href="" title="" class="text-capitalize">Chat</a>
              <a href="" title="" class="text-capitalize">Cloud</a>
              <a href="" title="" class="text-capitalize">Book</a>
            </div>
          </Grid>
        </Container>
      </Box>
    </Box>

  )
}

export default Icons