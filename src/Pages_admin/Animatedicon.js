// Animatedicon.js
import * as React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Breadcrumbs, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Link } from "react-router-dom";
import Dailodbox from './Dailodbox'; // Assuming you have a dialog box component for updating icons
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Animatedicon = () => {
    const [rows, setRows] = React.useState([]);
    
    const token = localStorage.getItem('token');
    
    const updateCountIcons = () => {
        axios.put('http://localhost:3001/count/update/65dedf5b5068fc31410f2da5',{},{
            headers: {
                admintoken: token
            }
        })
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    React.useEffect(() => {
        fetchIcons();
    }, []);

    const fetchIcons = () => {
        axios.get('http://localhost:3001/animated/find')
            .then((res) => {
                console.log(res.data.data);
                setRows(res.data.data);
                updateCountIcons()
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };


    const removeIcon = (id) => {
        axios.delete(`http://localhost:3001/animated/delete/${id}`, {
            headers: {
                admintoken: token
            }
        })
            .then((res) => {
                console.log(res.data.data);
                fetchIcons(); // Refresh icons after removing
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    return (
        <Box>
            <Typography variant="h5">
                Animated Icon
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link className="Breadcrumb" style={{ color: "#899bbd", fontSize: "14px", textDecoration: "none" }} to="/">
                    Home
                </Link>
                <Typography color="#899bbd" fontSize="14px">Icons</Typography>
                <Typography color="#273246" fontSize="14px">Animated Icon</Typography>
            </Breadcrumbs>

            <Box className="add">
                <Dailodbox refreshCategories={fetchIcons} targetFile="Animatedicon" /> {/* Pass targetFile prop */}
            </Box>

            <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            // aria-controls={`panel-${index}-content`}
                            // id={`panel-${index}-header`}
                        >
                            <Typography>Demo</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Box}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Icon</TableCell>
                                            <TableCell align="right">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                            <TableRow>
                                                <TableCell>Demo</TableCell>
                                                <TableCell align="right">
                                                    <Button>Delete</Button>
                                                    <Button>Delete</Button>
                                                    {/* <Dailogicon refreshCategories={getCategories} icon={icon} /> */}
                                                </TableCell>
                                            </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
            </div>


            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Tags</TableCell>
                            <TableCell align="right">Change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.image}</TableCell>
                                <TableCell align="right">{row.tag}</TableCell>
                                <TableCell align="right" sx={{ display: 'flex' }}>
                                    <Dailodbox refreshCategories={fetchIcons} icon={row} targetFile="Animatedicon" />
                                    <Box sx={{ marginLeft: '5px' }}><Button onClick={() => removeIcon(row._id)}>Delete</Button></Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
        </Box>
    );
};

export default Animatedicon;
