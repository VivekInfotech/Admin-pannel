import React, { useEffect, useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import Popularaddicon from './Popularaddicon';

const PopularIcon = () => {
    const [categories, setCategories] = useState([]);
    const [iconData, setIconData] = useState({});
    const [card, setCard] = useState(["Hand drawn", "color fill", "Black outline", "Black Fill", "Lineal Color", "Flat"]);

    const token = localStorage.getItem('token');

    const updateCountIcons = () => {
        axios.put('http://localhost:3001/count/update/65e41862f553d71c874fabc5', {}, {
            headers: {
                admintoken: token
            }
        })
            .then((res) => {
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    useEffect(() => {
        fetchIcons()
        getCategories();
    }, []);

    const getCategories = () => {
        axios.get('http://localhost:3001/popCategory/find')
            .then((res) => {
                console.log(res.data.data.map(el => el.card));
                setCategories(res.data.data);
                getCategoryIcons(res.data.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    const fetchIcons = () => {
        axios.get('http://localhost:3001/popular/find')
            .then((res) => {
                setIconData(res.data.data);
                updateCountIcons()
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    const removeIcon = (id) => {
        axios.delete(`http://localhost:3001/popular/delete/${id}`, {
            headers: { admintoken: token }
        })
            .then((res) => {
                console.log(res.data.data);
                getCategories();
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    const getCategoryIcons = (categories) => {
        const iconPromises = categories.map(category => {
            console.log("category ghjjhj :- ", category.name);
            return axios.get(`http://localhost:3001/popular/findOne/${category.name}`)
                .then((res) => {
                    console.log([category.name]);
                    return { [category.name]: res.data.data };
                })
                .catch((error) => {
                    console.log(error.response.data);
                    return { [category.name]: [] };
                });
        });

        Promise.all(iconPromises)
            .then(iconDataArray => {
                const iconDataObject = iconDataArray.reduce((acc, curr) => {
                    return { ...acc, ...curr };
                }, {});
                setIconData(iconDataObject);
                console.log(iconDataObject);
            });
    };

    return (
        <Box>
            <Typography variant="h5" marginBottom="5px">
                PopularIcon
            </Typography>

            <Box className="add">
                <Box><Popularaddicon fetchIcons={getCategories} targetFile="icon" /></Box>
            </Box>

            <div>
                {categories && categories.map((category, categoryIndex) => {
                    return (
                        <Accordion key={categoryIndex}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel-${categoryIndex}-content`}
                                id={`panel-${categoryIndex}-header`}
                            >
                                <Typography>{category.name}</Typography>
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
                                            {iconData[category.name] && iconData[category.name].map((icon, iconIndex) => (
                                                <TableRow key={iconIndex}>
                                                    <TableCell>{icon.name}</TableCell>
                                                    <TableCell align="right">
                                                        <Button onClick={() => removeIcon(icon._id)}>Delete</Button>
                                                        <Popularaddicon fetchIcons={getCategories} icon={icon} />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>

        </Box>
    );

};

export default PopularIcon;
