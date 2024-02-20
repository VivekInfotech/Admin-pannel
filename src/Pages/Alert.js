import React from 'react'
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
    createData('Eclair'),
    createData('Eclair'),
    createData('Eclair'),
    createData('Eclair'),
    createData('Eclair'),
    createData('Eclair'),
    createData('Eclair'),
];

const AlertPage = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
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
                <dailog><Dailogicon /></dailog>
            </Box>


            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Car
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Calories</TableCell>
                                            <TableCell align="right">Change</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right"><button>Edit</button></TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Home</Typography>
                       
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Calories</TableCell>
                                            <TableCell align="right">Change</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right"><button>Edit</button></TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Advanced settings
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Filtering has been entirely disabled for whole web server
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </Box>
    )
}

export default AlertPage;