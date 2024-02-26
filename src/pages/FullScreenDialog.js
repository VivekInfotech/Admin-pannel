import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import { IoIosColorPalette, IoMdImages, IoIosShareAlt, IoIosDownload, IoIosArrowDown } from "react-icons/io";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, onClose }) {
  const [selectedColor, setSelectedColor] = useState('#000000'); // Initial color, you can set it to any default color

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);

    // You can perform additional actions or call your check() function here if needed
    check(newColor);
  };
  const check = (color) => {
    // Your logic for checking or any other actions based on the color
    console.log(`Selected color: ${color}`);
  };
  

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#FFBC06' }}>
          <Toolbar>

            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="Box">
              Sound
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

          </Toolbar>
        </AppBar>

        <Box>
          <Grid container>
            <Grid xs={6}>
              <Box sx={{ display: 'flex', padding: '10px 25px', justifyContent: 'space-between', cursor: 'pointer' }}>
                <Box sx={{ border: '1px solid', borderRadius: '7px', fontWeight: '600', padding: '7px 20px' }}>
                  Save
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: '600' }}>
                  {/* <Box className='center' alignItems={'center'} fontSize={'20px'} paddingRight={'5px'}><IoIosColorPalette /></Box>
                  <Box>Edit Icon</Box>   */}
                  <input type="color"
                    id="color1"
                    value={selectedColor}
                    onChange={handleColorChange} />
                </Box>
              </Box>
              <Box className='center' sx={{ border: '2px solid #888888', borderRadius: '9px', margin: '10px 25px' }}>
                <IoIosColorPalette className='change' fontSize={'400px'} />
              </Box>

            </Grid>
            <Grid xs={6}>
              <Box sx={{ display: 'flex', padding: '10px 21px', justifyContent: 'space-between', fontWeight: '600', fontSize: '24px' }}>
                IconGrid
              </Box>
              <Box sx={{ display: 'flex', padding: '12px 0px', justifyContent: 'space-around' }}>
                <Box className='type'><IoIosColorPalette /></Box>
                <Box className='type'><IoIosColorPalette /></Box>
                <Box className='type'><IoIosColorPalette /></Box>
                <Box className='type'><IoIosColorPalette /></Box>
                <Box className='type'><IoIosColorPalette /></Box>
                <Box className='type'><IoIosColorPalette /></Box>
              </Box>
              <Box className='center' sx={{ margin: '12px 25px' }}>
                <Box class="code-editor">
                  <Box class="header">
                    <span class="title">HTML</span>
                  </Box>
                  <Box class="editor-content">
                    <code class="code">
                      <p><span class="color-0"> </span> <span></span></p>

                      <p class="property">
                        <span class="color-2">link
                        </span>
                      </p>

                      <span></span>
                    </code>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', margin: '24px 25px' }}>
                <Grid xs={4} marginRight={'10px'}>
                  <Box className='center' sx={{ borderRadius: '7px', cursor: 'pointer', fontWeight: '600', backgroundColor: '#198754', color: '#fff', padding: '10px 30px', border: '1px solid' }}>
                    <Box sx={{ paddingRight: '7px', display: 'flex', alignItems: 'center' }}><IoMdImages fontSize={'20px'} /></Box>
                    <Tooltip title="Copy PNG to clipboard">Copy PNG</Tooltip>
                  </Box>

                </Grid>
                <Grid xs={4} marginRight={'10px'}>
                  <Box className='center' sx={{ borderRadius: '7px', cursor: 'pointer', fontWeight: '600', backgroundColor: '#0DCAF0', color: '#fff', padding: '10px 30px', border: '1px solid' }}>
                    <Box sx={{ paddingRight: '7px', display: 'flex', alignItems: 'center' }}><IoIosDownload fontSize={'20px'} />
                    </Box>

                    <Tooltip title="Download Pack">Pack</Tooltip>
                  </Box>
                </Grid>
                <Grid xs={4}>
                  <Box className='center' sx={{ borderRadius: '7px', cursor: 'pointer', fontWeight: '600', backgroundColor: '#63E6BE', color: '#fff', padding: '10px 30px', border: '1px solid' }}>
                    <Box sx={{ paddingRight: '7px', display: 'flex', alignItems: 'center' }}><IoIosShareAlt fontSize={'20px'} />
                    </Box>

                    <Tooltip title="Share">Share</Tooltip>
                  </Box>
                </Grid>
              </Box>
              <Box sx={{ display: 'flex', margin: '24px 25px' }}>
                <Grid xs={3} marginRight={'10px'}>
                  <Box className='center' sx={{ borderRadius: '7px', backgroundColor: '#BDBDBD', fontWeight: '600', padding: '10px 10px', border: '1px solid' }}>

                    <Box>PNG <IoIosArrowDown /></Box>
                  </Box>

                </Grid>
                <Grid xs={3} marginRight={'10px'}>
                  <Box className='center' sx={{ borderRadius: '7px', backgroundColor: '#BDBDBD', fontWeight: '600', padding: '10px 30px', border: '1px solid' }}>
                    SVG
                  </Box>
                </Grid>
                <Grid xs={3} marginRight={'10px'}>
                  <Box className='center' sx={{ borderRadius: '7px', backgroundColor: '#BDBDBD', fontWeight: '600', padding: '10px 30px', border: '1px solid' }}>
                    Android
                  </Box>
                </Grid>
                <Grid xs={3} >
                  <Box className='center' sx={{ borderRadius: '7px', backgroundColor: '#BDBDBD', fontWeight: '600', padding: '10px 30px', border: '1px solid' }}>
                    iOS
                  </Box>
                </Grid>
              </Box>

              <Box className='center' sx={{ paddingTop: '20px' }}>
                Begin incorporating this icon into your designs.
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Dialog>
    </React.Fragment>
  );
}
