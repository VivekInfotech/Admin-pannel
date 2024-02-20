import * as React from 'react';
import { Box, Typography, Grid, styled, Paper, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Button, Breadcrumbs } from '@mui/material';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dailodbox from './Dailodbox';
import Dailogicon from './Dailogicon';

  


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
function createData(name, image, tags) {
  return { name, image, tags };
}

const rows = [
  createData('car', 'https://mui.com/material-ui/react-table/#data-table', 'car'),
  createData('Home', 'https://mui.com/material-ui/react-table/#data-table', 'home'),
  createData('Nation', 'https://mui.com/material-ui/react-table/#data-table', 'nation'),
];



function AccordionPage() {
  return (
    <Box>
      <Typography variant="h5"  >
        Aimated Icon
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
        <Link className="Breadcrumb" style={{ color: "#899bbd", fontSize: "14px", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Typography color="#899bbd" fontSize="14px">Icons</Typography>
        <Typography color="#273246" fontSize="14px">Animated Icon</Typography>
      </Breadcrumbs>


      <Box className="add">
        <dailog><Dailodbox /></dailog>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Tags</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.image}</TableCell>
                <TableCell align="right">{row.tags}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


    </Box>
  )
}

export default AccordionPage;