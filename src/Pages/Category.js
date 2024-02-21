import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Breadcrumbs, Link } from '@mui/material';
import Addcategory from './Addcategory';
import axios from 'axios';

function Category() {
    const [data, setData] = useState([]);

    const getCategory = () => {
        axios.get('http://localhost:3001/category/find')
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    const remove = (id) => {
        axios.delete(`http://localhost:3001/category/delete/${id}`)
            .then((res) => {
                console.log(res.data.data);
                getCategory();
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    const addCategory = (category) => {
        setData([...data, category]);
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <Box>
            <Typography variant="h5">
                Category
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link className="Breadcrumb" style={{ color: "#899bbd", fontSize: "14px", textDecoration: "none" }} to="/">
                    Home
                </Link>
                <Typography color="#273246" fontSize="14px">Category</Typography>
            </Breadcrumbs>
            <Box className="add">
                <Addcategory addCategory={addCategory} />
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" sx={{display:'flex'}}>
                                    <Box sx={{marginLeft:'5px'}}><button onClick={() => remove(row._id)}>Delete</button></Box>
                                    <Box><button onClick={() => remove(row._id)}>Update</button></Box>
                                </TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Category;
