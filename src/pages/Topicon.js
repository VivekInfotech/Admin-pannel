import React from 'react'
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BsGem, } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FaRegBuilding, FaBookmark, FaBuffer } from "react-icons/fa";
import house from './brands/house.png'
import { BiSolidAdjustAlt } from "react-icons/bi";
import { PiApertureBold } from "react-icons/pi";
import { BiSolidAdjust } from "react-icons/bi";
import { TbBrandThingiverse } from "react-icons/tb";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Topprops from './Topprops';
import FullScreenDialog from './FullScreenDialog';
import { useEffect } from 'react';
import axios from 'axios';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})
  (({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Components = [
  {
    path: "",
    icon: <BiSolidAdjust />,
    page: "Regular"
  },
  {
    path: "",
    icon: <PiApertureBold />,
    page: "Bold"
  },
  {
    path: "",
    icon: <BiSolidAdjustAlt />,
    page: "Solid"
  },
  {
    path: "",
    icon: <TbBrandThingiverse />,
    page: "Thin"
  },
];
const corner = [
  {
    path: "",
    icon: <FaRegBuilding />,
    page: "straight"
  },
  {
    path: "",
    icon: <FaBookmark />,
    page: "Rounded"
  }
];
const category = [
  {
    path: "",
    icon: <FaBuffer />,
    page: "Alert"
  },
  {
    path: "",
    icon: <FaBuffer />,

    page: "Indian brands"
  },
  {
    path: "",
    icon: <FaBuffer />,

    page: "Cars"
  },
  {
    path: "",
    icon: <FaBuffer />,

    page: "Institude"
  },
  {
    path: "",
    icon: <FaBuffer />,

    page: "Bussiness"
  },
  {
    path: "",
    icon: <FaBuffer />,

    page: "Food"
  }
  ,
  {
    path: "",
    icon: <FaBuffer />,

    page: "Animal"
  },
  {
    path: "",
    icon: <FaBuffer />,

    page: "Design"
  },
  {
    path: "",
    icon: <FaBuffer />,

    page: "Art"
  }
];
const Topicon = () => {

  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(true);
  const [data, setData] = useState([])
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedIconId, setSelectedIconId] = useState(null);

  const theme = useTheme();
  let history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenDialog = (iconId) => {
    setSelectedIconId(iconId);
    setDialogOpen(true);
  };

  const handleCloseDialog = (iconId) => {
    setDialogOpen(false);
    updateIcons(iconId)
  };

  const updateIcons = async (iconId) => {
    await axios.put(`http://localhost:3001/editIcon/update/${iconId}/000000/interface`)
      .then((res) => {
        console.log("update Icon color :- ", res.data.data);
        getInterfaceIcon();
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  useEffect(() => {
    getInterfaceIcon()
  }, [])

  const getInterfaceIcon = () => {
    axios.get('http://localhost:3001/interface/find')
      .then((res) => {
        let regularIcon = res.data.data.map(icon => (icon))
        console.log("regularIcon :- ", regularIcon);
        setData(regularIcon)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>

        <List sx={{ paddingTop: '10px' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              margin: 0,
              padding: '15px 14px',
              ...(close && { display: 'block' }),
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton sx={{ ...(close && { display: 'none', }), ...(open && { display: 'block', }), padding: '15px 14px' }} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <ListItem sx={{ padding: "15px 14px" }}>
            <ListItemIcon sx={{ minWidth: "30px", color: '#fff', fontSize: '18px' }}>
              <BsGem />
            </ListItemIcon>
            <Typography className='style' sx={{ color: '#fff', textTransform: 'uppercase', fontSize: '18px', opacity: open ? 1 : 0 }} > Style</Typography>
          </ListItem>
          {Components.map((component) => (
            <ListItem key={component.page} disablePadding onClick={() => { history.push(component.path) }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    fontSize: '20px',
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {component.icon}
                </ListItemIcon>
                <ListItemText primary={component.page} sx={{ opacity: open ? 1 : 0, fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem sx={{ padding: "15px 14px" }}>
            <ListItemIcon sx={{ minWidth: "30px", color: '#fff', fontSize: '18px' }}>
              <BsGem />
            </ListItemIcon>
            <Typography sx={{ color: '#fff', textTransform: 'uppercase', fontSize: '18px', opacity: open ? 1 : 0 }} >Corner</Typography>
          </ListItem>
          {corner.map((component) => (
            <ListItem key={component.page} disablePadding onClick={() => { history.push(component.path) }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    fontSize: '20px',
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {component.icon}
                </ListItemIcon>
                <ListItemText primary={component.page} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem sx={{ padding: "15px 14px" }}>
            <ListItemIcon sx={{ minWidth: "30px", color: '#fff', fontSize: '18px' }}>
              <BsGem />
            </ListItemIcon>
            <Typography sx={{ color: '#fff', textTransform: 'uppercase', fontSize: '18px', opacity: open ? 1 : 0 }} >Category</Typography>
          </ListItem>

          {category.map((component) => (
            <ListItem key={component.page} disablePadding onClick={() => { history.push(component.path) }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    fontSize: '20px',
                    justifyContent: 'center',
                  }}
                >
                  {component.icon}
                </ListItemIcon>
                <ListItemText primary={component.page} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Container maxWidth="xl">
          <Box sx={{ fontSize: { xs: '23px', sm: '50px', md: '72px' }, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
            top
          </Box>
          <Box sx={{ fontSize: { xs: '19px', sm: '50px', md: '72px' }, marginTop: { xs: '-23px', sm: '-48px', md: '-65px' }, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
            Icons
          </Box>

          <Box sx={{ fontSize: { xs: '10px', sm: '', md: '16px' }, margin: { xs: '0px', md: 'auto' }, width: { xs: '100%', md: '50%' }, textAlign: 'center', marginTop: '10px', paddingBottom: '10px', color: '#888888' }}>
            Explore a vast collection of highly popular and freely available icon fonts, with thousands of downloads, offered in diverse formats such as PNG, SVG, iOS, and Android. Access a plethora of options to enhance your projects with visually appealing icons.
          </Box>
          <Box className="search" sx={{ paddingTop: '40px' }}>
            <Grid container spacing={4} >

              {
                data.map((el, index) => {
                  return <Grid key={index} lg={2} md={4} sx={{ display: 'flex', justifyContent: 'center'}}  >
                    {/* <Topprops image={el.regular} name={el.name} tag={el.name} onClick={() => handleOpenDialog(el._id)} /> */}
                    <Topprops image={el.regular} onClick={() => handleOpenDialog(el._id)} />
                  </Grid>
                })
              }

              <FullScreenDialog open={isDialogOpen} onClose={() => handleCloseDialog(selectedIconId)} iconId={selectedIconId} entityType="interface" />

            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px 0px' }}>
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
        </Container>
      </Box>
    </Box>
  );
}

export default Topicon
