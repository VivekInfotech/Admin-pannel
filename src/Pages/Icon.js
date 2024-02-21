import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid, styled, Paper, Alert, Stack, AlertTitle, Breadcrumbs } from '@mui/material';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dailodbox from './Dailodbox';
import Dailogicon from './Dailogicon';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

//Alert Types
const Severity = ["success", "info", "warning", "error"];
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt'),
    createData('Ice cream sandwich'),
    createData('brijesh'),
    createData('Eclair'),
    createData('Frozen yoghurt')
];

const Icon = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [icon, setIcon] = useState([]);
    const [category, setCategory] = useState([]);

    const getIcon = () => {
        axios.get('http://localhost:3001/icon/find')
            .then((res) => {
                console.log(res.data.data);
                setIcon(res.data.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    const getCategory = () => {
        axios.get('http://localhost:3001/category/find')
            .then((res) => {
                console.log(res.data.data);
                setCategory(res.data.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    useEffect(() => {
        getIcon()
        getCategory()
    }, [])

    let token = localStorage.getItem('token')

    const remove = (id) => {
        axios.delete(`http://localhost:3001/icon/delete/${id}`,{
            headers : { admintoken : token }
        })
            .then((res) => {
                console.log(res.data.data);
                getIcon();
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    return (
        <Box>
            <Typography variant="h5" marginBottom="5px">
                Icon
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link className="Breadcrumb" style={{ color: "#899bbd", fontSize: "14px", textDecoration: "none" }} to="/">
                    Home
                </Link>
                <Typography color="#899bbd" fontSize="14px">Icons</Typography>
                <Typography color="#273246" fontSize="14px">Icon</Typography>
            </Breadcrumbs>


            <Box className="add">
                <Box><Dailogicon /></Box>
            </Box>


            <div>
                {
                    category.map((row, index) => {
                        return <Accordion key={index} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {row.name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Icon</TableCell>
                                                    <TableCell align="right">Change</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {icon.map((row,index) => (
                                                    <TableRow key={index}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right" sx={{display:'flex'}}>
                                    <Box sx={{marginLeft:'5px'}}><button onClick={() => remove(row._id)}>Update</button></Box>
                                    <Box><button onClick={() => remove(row._id)}>Update</button></Box>
                                </TableCell>

                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    })
                }
            </div>

        </Box>
    )
}

export default Icon;