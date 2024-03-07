// FullScreenDialog.js
import React, { useEffect, useState } from 'react';
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
import { IoMdImages, IoIosShareAlt, IoIosDownload, IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import { Menu } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, onClose, iconId, entityType }) {
  const [data, setData] = useState();
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedIconUrl, setSelectedIconUrl] = useState(null);


  const handleColorChange = async (event) => {
    const newColor = event.target.value;
    const cleanedColor = newColor.replace(/#/g, '');
    setSelectedColor(cleanedColor);
    console.log(cleanedColor);
  };

  const handleColorPickerClose = async () => {
    // await updateColor(selectedColor);
  };

  const updateColor = async (cleanedColor) => {
    await axios.put(`http://localhost:3001/editIcon/update/${iconId}/${cleanedColor}/${entityType}`)
      .then((res) => {
        console.log("update Icon color :- ", res.data.data);
        getIcon(iconId)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  useEffect(() => {
    if (iconId) {
      getIcon(iconId);
    }
  }, [iconId]);

  const getIcon = (iconId) => {
    axios.get(`http://localhost:3001/${entityType}/findById/${iconId}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        setSelectedIconUrl(res.data.data.regular);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const selectedIcon = (icon) => {
    if (data) {
      let selectedUrl = icon ? icon : data.regular;
      setSelectedIconUrl(selectedUrl);
    }
  };

  const link = () => {
    if (selectedIconUrl) {
      return `<img src=${selectedIconUrl} alt=${data.name} title=${data.name} width='100px' height='auto' />`;
    }
    return '';
  }

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', backgroundColor: '#FFBC06' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" color={'#272727'} fontWeight={'600'} component="Box">
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
        <Box sx={{}}> 
          {data && (
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', padding: '10px 25px', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <Box sx={{ border: '1px solid', borderRadius: '7px', fontWeight: '600', padding: '7px 20px' }}>
                    Save
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: '600' }}>
                  <input
                      type="color"
                      id="color1"
                      value={selectedColor}
                      onChange={handleColorChange}
                      onBlur={handleColorPickerClose} // Add onBlur event to handle color picker close
                    />
                  </Box>
                </Box>
                <Box className='center' sx={{ paddingY: '50px', border: '2px solid #888888', borderRadius: '9px', margin: '10px 25px' }}>
                  {selectedIconUrl && (
                    <img src={selectedIconUrl} alt={data.name} title={data.name} width='300px' height='auto' />
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', padding: '10px 21px', justifyContent: 'space-between', fontWeight: '600', fontSize: '24px' }}>
                  IconGrid
                </Box>
                <Box sx={{ display: 'flex', padding: '12px 0px', justifyContent: 'space-around' }}>
                  <Box className='type' onClick={() => selectedIcon(data.regular)}><img src={data.regular} alt={data.name} title={data.name} width="40px" height="auto" /></Box>
                  <Box className='type' onClick={() => selectedIcon(data.bold)}><img src={data.bold} alt={data.name} title={data.name} width="40px" height="auto" /></Box>
                  <Box className='type' onClick={() => selectedIcon(data.solid)}><img src={data.solid} alt={data.name} title={data.name} width="40px" height="auto" /></Box>
                  <Box className='type' onClick={() => selectedIcon(data.thin)}><img src={data.thin} alt={data.name} title={data.name} width="40px" height="auto" /></Box>
                  <Box className='type' onClick={() => selectedIcon(data.rounded)}><img src={data.rounded} alt={data.name} title={data.name} width="40px" height="auto" /></Box>
                  <Box className='type' onClick={() => selectedIcon(data.straight)}><img src={data.straight} alt={data.name} title={data.name} width="40px" height="auto" /></Box>
                </Box>
                <Box className='center' sx={{ margin: '12px 25px' }}>
                  <Box className="code-editor">
                    <Box className="header">
                      <span className="title">HTML</span>
                    </Box>
                    <Box className="editor-content">
                      <code className="code">
                        <p><span className="color-0"> </span> <span></span></p>
                        <p className="property">
                          <span className="color-2">{link()}</span>
                        </p>
                        <span></span>
                      </code>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', margin: '24px 25px' }}>
                  <Grid xs={4} marginRight={'10px'}>
                    <Box className='center' sx={{ borderRadius: '7px', cursor: 'pointer', fontWeight: '600', backgroundColor: '#ffbc06', color: '#272727', padding: '10px 30px' }}>
                      <Box sx={{ paddingRight: '7px', display: 'flex', alignItems: 'center' }}><IoMdImages fontSize={'20px'} /></Box>
                      <Tooltip title="Copy PNG to clipboard">Copy PNG</Tooltip>
                    </Box>

                  </Grid>
                  <Grid xs={4} marginRight={'10px'}>
                    <Box className='center' sx={{ borderRadius: '7px', cursor: 'pointer', fontWeight: '600', backgroundColor: '#198754', color: '#fff', padding: '10px 30px' }}>
                      <Box sx={{ paddingRight: '7px', display: 'flex', alignItems: 'center' }}><IoIosDownload fontSize={'20px'} />
                      </Box>

                      <Tooltip title="Download Pack">Pack</Tooltip>
                    </Box>
                  </Grid>
                  <Grid xs={4}>
                    <Box className='center' sx={{ borderRadius: '7px', cursor: 'pointer', fontWeight: '600', backgroundColor: '#272727', color: '#fff', padding: '10px 30px' }}>
                      <Box sx={{ paddingRight: '7px', display: 'flex', alignItems: 'center' }}><IoIosShareAlt fontSize={'20px'} />
                      </Box>

                      <Tooltip title="Share">Share</Tooltip>
                    </Box>
                  </Grid>
                </Box>
                <Box sx={{ display: 'flex', margin: '24px 25px' }}>
                  <Grid xs={3} marginRight={'10px'}>
                    <Box sx={{ position: 'relative' }}>
                      <Box
                        className='center'
                        sx={{
                          borderRadius: '7px',
                          backgroundColor: '#f5f5f5',
                          fontWeight: '600',
                          padding: '10px 10px',
                          cursor: 'pointer',
                        }}
                      // onClick={handleClick}
                      >
                        <Box>
                          PNG <IoIosArrowDown onClick={handleClick} />
                        </Box>
                      </Box>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                      >
                        <MenuItem onClick={handleClose}>512px</MenuItem>
                        <MenuItem onClick={handleClose}>256px</MenuItem>
                        <MenuItem onClick={handleClose}>128px</MenuItem>
                        <MenuItem onClick={handleClose}>64px</MenuItem>
                        <MenuItem onClick={handleClose}>32px</MenuItem>
                        <MenuItem onClick={handleClose}>24px</MenuItem>
                        <MenuItem onClick={handleClose}>16px</MenuItem>
                      </Menu>
                    </Box>
                  </Grid>
                  <Grid xs={3} marginRight={'10px'}>
                    <Box className='center' sx={{ borderRadius: '7px', backgroundColor: '#f5f5f5', fontWeight: '600', padding: '10px 30px' }}>
                      SVG
                    </Box>
                  </Grid>
                  <Grid xs={3} marginRight={'10px'}>
                    <Box className='center' sx={{ borderRadius: '7px', backgroundColor: '#f5f5f5', fontWeight: '600', padding: '10px 30px' }}>
                      Android
                    </Box>
                  </Grid>
                  <Grid xs={3} >
                    <Box className='center' sx={{ borderRadius: '7px', backgroundColor: '#f5f5f5', fontWeight: '600', padding: '10px 30px' }}>
                      iOS
                    </Box>
                  </Grid>
                </Box>

                <Box className='center' sx={{ paddingTop: '20px' }}>
                  Begin incorporating this icon into your designs.
                </Box>
              </Grid>

              <Grid xs={12}>
                <Box paddingBottom={'60px'} justifyContent={'center'} display={'flex'}>
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
