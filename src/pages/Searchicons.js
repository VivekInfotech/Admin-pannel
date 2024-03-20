import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiCssBaseline from '@mui/material/CssBaseline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BsGem } from 'react-icons/bs';
import { BiSolidAdjust, BiSolidAdjustAlt } from 'react-icons/bi';
import { PiApertureBold } from 'react-icons/pi';
import { TbBrandThingiverse } from 'react-icons/tb';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FaRegBuilding, FaBookmark, FaBuffer } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Topprops from './Topprops';
import FullScreenDialog from './FullScreenDialog';

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
})(({ theme, open }) => ({
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
    })
);

const Components = [
    {
        path: '',
        icon: <BiSolidAdjust />,
        page: 'Regular',
    },
    {
        path: '',
        icon: <PiApertureBold />,
        page: 'Bold',
    },
    {
        path: '',
        icon: <BiSolidAdjustAlt />,
        page: 'Solid',
    },
    {
        path: '',
        icon: <TbBrandThingiverse />,
        page: 'Thin',
    },
];
const corner = [
    {
        path: '',
        icon: <FaBookmark />,
        page: 'Rounded',
    },
    {
        path: '',
        icon: <FaRegBuilding />,
        page: 'straight',
    },
];
const category = [
    {
        path: '',
        icon: <FaBuffer />,
        page: 'Alert',
    },
    {
        path: '',
        icon: <FaBuffer />,
        page: 'Indian brands',
    },
    {
        path: '',
        icon: <FaBuffer />,
        page: 'Cars',
    },
    {
        path: '',
        icon: <FaBuffer />,
        page: 'Institute',
    },
    {
        path: '',
        icon: <FaBuffer />,
        page: 'Business',
    },
    {
        path: '',
        icon: <FaBuffer />,
        page: 'Food',
    },
    {
        path: '',
        icon: <FaBuffer />,
        page: 'Animal',
    },
    {
        path: '',
        icon: <FaBuffer />,
        page: 'Design',
    },
    {
        path: '',
        icon: <FaBuffer />,
        page: 'Art',
    },
];

const Searchicons = () => {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedIconType, setSelectedIconType] = useState('Regular'); // Initial state is Regular
    const [searchValue, setSearchValue] = useState('');
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const theme = useTheme();
    let history = useHistory();

    // const handleSearchChange = (event) => {
    //     setSearchValue(event.target.value);
    //     // getSearchIcons(event.target.value);
    // };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit(event); // Pass the event object to handleSearchSubmit
            setSearch(searchValue)
        }
    };


    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const inputValue = event.target.value; // Get the value of the input field
        setSearchValue(inputValue); // Update the searchValue state
        getSearchIcons(inputValue); // Call the function to fetch search results
    };




    const location = useLocation();
    useEffect(() => {
        if (location.state) {
            setSearchValue(location.state.searchValue);
            getSearchIcons(location.state.searchValue);
            getSuggestTagName()
        }
    }, [location.state]);


    const getSearchIcons = (searchValue) => {
        if (searchValue) {
            setLoading(true);
            axios.get(`http://localhost:3001/tag/findByName/${searchValue}`)
                .then((res) => {
                    setData(res.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setData([]);
                    setLoading(false);
                    console.log(error);
                });
        }
    };

    const getSuggestTagName = () => {
        axios.get(`http://localhost:3001/tag/find`)
            .then((res) => {
                const allTags = res.data.data;
                // Filter suggestions based on the search input
                const filteredSuggestions = allTags.filter(tag => tag.includes(searchValue));
                // setSuggestions(filteredSuggestions);
                console.log("filteredSuggestions :- ", filteredSuggestions);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <MuiCssBaseline />

            <Drawer variant="permanent" open={open}>
                <List sx={{ paddingTop: '10px' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        sx={{
                            margin: 0,
                            padding: '15px 14px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton sx={{ display: open ? 'block' : 'none', padding: '15px 14px' }} onClick={() => setOpen(false)}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                    <ListItem sx={{ padding: '15px 14px' }}>
                        <ListItemIcon sx={{ minWidth: '30px', color: '#fff', fontSize: '18px' }}>
                            <BsGem />
                        </ListItemIcon>
                        <Typography className="style" sx={{ color: '#fff', textTransform: 'uppercase', fontSize: '18px', opacity: open ? 1 : 0 }}>
                            {' '}
                            Style
                        </Typography>
                    </ListItem>
                    {Components.map((component) => (
                        <ListItem key={component.page} disablePadding onClick={() => setSelectedIconType(component.page)}>
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
                    <ListItem sx={{ padding: '15px 14px' }}>
                        <ListItemIcon sx={{ minWidth: '30px', color: '#fff', fontSize: '18px' }}>
                            <BsGem />
                        </ListItemIcon>
                        <Typography sx={{ color: '#fff', textTransform: 'uppercase', fontSize: '18px', opacity: open ? 1 : 0 }}>Corner</Typography>
                    </ListItem>
                    {corner.map((component) => (
                        <ListItem key={component.page} disablePadding onClick={() => setSelectedIconType(component.page)}>
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
                    <ListItem sx={{ padding: '15px 14px' }}>
                        <ListItemIcon sx={{ minWidth: '30px', color: '#fff', fontSize: '18px' }}>
                            <BsGem />
                        </ListItemIcon>
                        <Typography sx={{ color: '#fff', textTransform: 'uppercase', fontSize: '18px', opacity: open ? 1 : 0 }}>Category</Typography>
                    </ListItem>

                    {category.map((component) => (
                        <ListItem key={component.page} disablePadding onClick={() => history.push(component.path)}>
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

                {/* Search box */}
                <div>
                    <form className="search-bar" onSubmit={(e) => handleSearchSubmit(e)}>
                        <select className="settt" value={searchValue}>
                            <option value="">All icons</option>
                            <option value="option1">Interface icons</option>
                            <option value="option2">Animated icons</option>
                        </select>
                        <input
                            type="text"
                            name="searchInput"
                            placeholder="Search…"
                            aria-label="search"
                            value={searchValue}
                            onChange={handleSearchChange}
                            onKeyPress={handleKeyPress}
                        />
                        <button type="submit">
                            Search
                        </button>
                    </form>


                </div>

                <DrawerHeader />

                <Container maxWidth="xl">
                    {isLoading ? ( // If data is being fetched, display loader message
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                            <Typography variant="h5">Loading...</Typography>
                        </Box>
                    ) : (
                        <>
                            <Box sx={{ fontSize: { xs: '23px', sm: '50px', md: '72px' }, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
                                Search
                            </Box>
                            <Box sx={{ fontSize: { xs: '19px', sm: '50px', md: '72px' }, marginTop: { xs: '-23px', sm: '-48px', md: '-65px' }, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
                                Icons
                            </Box>
                            <Box sx={{ fontSize: { xs: '10px', sm: '', md: '16px' }, margin: { xs: '0px', md: 'auto' }, width: { xs: '100%', md: '50%' }, textAlign: 'center', marginTop: '10px', paddingBottom: '10px', color: '#888888' }}>
                                {data.length} {search} Icons
                            </Box>
                            <Box className="search" sx={{ paddingTop: '40px' }}>
                                <Grid container spacing={4} justifyContent="center"> {/* Add justifyContent="center" to center the items */}
                                    {data.length > 0 ? (
                                        <>
                                            {data.map((el, index) => (
                                                <Grid key={index} item lg={2} md={4}> {/* Move display and justifyContent props to the Grid item */}
                                                    <Topprops image={el[selectedIconType.toLowerCase()]} onClick={() => setDialogOpen(true)} />
                                                </Grid>
                                            ))}
                                            <FullScreenDialog open={isDialogOpen} onClose={() => setDialogOpen(false)} />
                                        </>
                                    ) : (
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <h1>Sorry, we couldn’t find any matches for <span style={{ color: '#ffbc06' }}>{search}</span> icons</h1>
                                        </Grid>
                                    )}
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

                        </>
                    )}
                </Container>
            </Box>
        </Box>
    );
}

export default Searchicons;
