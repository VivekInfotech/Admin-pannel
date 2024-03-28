// PopularCategory.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Breadcrumbs, Link, Button } from '@mui/material';
import Addcategory from './Addcategory';
import axios from 'axios';
import PopularDailog from './PopularDailog';

function PopularCategory() {    
    const [data, setData] = useState([]);

    const token = localStorage.getItem('token');

    const updateCountIcons = () => {
        axios.put('https://api-elbg.onrender.com/count/update/65e41862f553d71c874fabc5',{},{
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

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        axios.get('https://api-elbg.onrender.com/popCategory/find')
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data);
                updateCountIcons()
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };


    const remove = (id) => {
        axios.delete(`https://api-elbg.onrender.com/popCategory/delete/${id}`,{
            headers: {
                admintoken: token
            }
        })
            .then((res) => {
                getCategory();
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

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
                <Box><PopularDailog addCategory={getCategory} /></Box>
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
                                <TableCell align="right" sx={{ display: 'flex' }}>
                                    <PopularDailog addCategory={getCategory} icon={row} />
                                    <Box sx={{ marginLeft: '5px' }}><Button onClick={() => remove(row._id)}>Delete</Button></Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default PopularCategory;
