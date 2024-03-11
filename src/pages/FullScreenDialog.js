// FullScreenDialog.js
import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { FaCopy } from "react-icons/fa";
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
  const [iconName, setIconName] = useState('');
  const [pngName, setPngName] = useState('regular');
  // const [png, setPng] = useState('');
  const [png, setPng] = useState({ pngIcon: { regular: '', bold: '', thin: '', solid: '', straight: '', rounded: '' } });



  const handleColorChange = async (event) => {
    const newColor = event.target.value;
    const cleanedColor = newColor.replace(/#/g, '');
    setSelectedColor(cleanedColor);
    console.log(cleanedColor);
  };

  const handleColorPickerClose = async () => {
    await updateColor(selectedColor);
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
        setIconName(res.data.data.name)
        setSelectedIconUrl(res.data.data.regular);
        getPngIcon(res.data.data._id)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const getPngIcon = async (pngIconId) => {
    axios.put(`http://localhost:3001/pngIcon/update/${pngIconId}/${entityType}`)
      .then((res) => {
        console.log("update Png Icon :- ", res.data.data);
        setPng(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const selectedIcon = (icon, iconName) => {
    if (data) {
      let selectedUrl = icon ? icon : data.regular;
      setSelectedIconUrl(selectedUrl);
      setPngName(iconName)
    }
  };

  const link = () => {
    if (selectedIconUrl) {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="65" height="65">${selectedIconUrl}</svg>`;
    }
    return '';
  }

  const svg_Link = async () => {
    await updateColor(selectedColor);
    if (png && png.pngIcon) {
      let pngData = png.pngIcon[0][pngName];
      await navigator.clipboard.writeText(pngData)
        .then(() => {
          console.log('Link copied to clipboard:', pngData);
        })
        .catch((error) => {
          console.error('Failed to copy link:', error);
        });
    }
  };



  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const copy = () => {
    const linkContent = link();
    if (linkContent) {
      navigator.clipboard.writeText(linkContent)
        .then(() => {
          console.log('Link copied to clipboard:', linkContent);
        })
        .catch((error) => {
          console.error('Failed to copy link:', error);
        });
    }
  };

  const download = () => {
    const linkContent = link();
    if (linkContent) {
      const blob = new Blob([linkContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${iconName} ${pngName}.svg;` // Set the desired filename here
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };


  return (
    <React.Fragment>
      <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', backgroundColor: '#FFBC06' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" color={'#272727'} fontWeight={'600'} component="Box">
              {iconName}
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
                      onBlur={handleColorPickerClose}
                    />
                  </Box>
                </Box>
                <Box className='center sizesvg' sx={{ paddingY: '50px', border: '1px solid #dadada', borderRadius: '9px', margin: '10px 25px' }}>
                  {selectedIconUrl && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" dangerouslySetInnerHTML={{ __html: selectedIconUrl }}></svg>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', padding: '10px 21px', justifyContent: 'space-between', fontWeight: '600', fontSize: '24px' }}>
                  IconGrid
                </Box>
                <Box sx={{ display: 'flex', padding: '12px 0px', justifyContent: 'space-around', overflow: 'hidden' }}>
                  <Box className='type' onClick={() => selectedIcon(data.regular, "regular")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" dangerouslySetInnerHTML={{ __html: data.regular }}></svg>
                  </Box>
                  <Box className='type' onClick={() => selectedIcon(data.bold, "bold")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" dangerouslySetInnerHTML={{ __html: data.bold }}></svg>
                  </Box>
                  <Box className='type' onClick={() => selectedIcon(data.solid, "solid")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" dangerouslySetInnerHTML={{ __html: data.solid }}></svg>
                  </Box>
                  <Box className='type' onClick={() => selectedIcon(data.thin, "thin")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" dangerouslySetInnerHTML={{ __html: data.thin }}></svg>
                  </Box>
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='type' onClick={() => selectedIcon(data.rounded, "rounded")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" dangerouslySetInnerHTML={{ __html: data.rounded }}></svg>
                  </Box>
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='type' onClick={() => selectedIcon(data.straight, "straight")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" dangerouslySetInnerHTML={{ __html: data.straight }}></svg>
                  </Box>
                </Box>
                <Box className='center' sx={{ height: '175px', margin: '12px 25px' }}>
                  <Box className="code-editor">
                    <Box className="header">
                      <span className="title">HTML</span>
                      <span className="title"><FaCopy onClick={copy} /></span>
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
                  <Grid sm={4} marginRight={'10px'}>
                    <Box className='center' sx={{ borderRadius: '7px', cursor: 'pointer', fontWeight: '600', backgroundColor: '#ffbc06', color: '#272727', padding: '10px 30px' }}
                      onClick={() => svg_Link()}
                    >
                      <Box sx={{ paddingRight: '7px', display: 'flex', alignItems: 'center' }}><IoMdImages fontSize={'20px'} /></Box>
                      <Tooltip title="Copy PNG to clipboard">Copy PNG</Tooltip>
                    </Box>

                  </Grid>
                  <Grid sm={4} marginRight={'10px'}>
                    <Box className='center' sx={{ borderRadius: '7px', cursor: 'pointer', fontWeight: '600', backgroundColor: '#198754', color: '#fff', padding: '10px 30px' }}>
                      <Box sx={{ paddingRight: '7px', display: 'flex', alignItems: 'center' }}><IoIosDownload fontSize={'20px'} />
                      </Box>

                      <Tooltip title="Download Pack">Pack</Tooltip>
                    </Box>
                  </Grid>
                  <Grid sm={4}>
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
                    <Box onClick={download} className='center' sx={{ borderRadius: '7px', backgroundColor: '#f5f5f5', fontWeight: '600', padding: '10px 30px' }}>
                      Android
                    </Box>
                  </Grid>
                  <Grid onClick={download} xs={3} >
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
