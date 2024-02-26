// Dailogicon.js
import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, TextField, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

function Dailogicon({ refreshCategories }) {

    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [suggestedCategories, setSuggestedCategories] = useState([]);

    useEffect(() => {
        fetchSuggestedCategories();
    }, []);

    const fetchSuggestedCategories = () => {
        axios.get('http://localhost:3001/category/find')
            .then((res) => {
                const categories = res.data.data.map(category => ({ label: category.name, id: category._id }));
                setSuggestedCategories(categories);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!category || !name) {
            console.log('Please select a category and enter a name');
            return;
        }

        const formData = new FormData();
        formData.append('category', category.label); // Pass category id instead of label
        formData.append('name', name);
        formData.append('icon', file);

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:3001/icon/create', formData, {
                headers: {
                    admintoken: token
                }
            });

            console.log('Response:', response.data.data);
            refreshCategories(); // Refresh categories after successful submission
        } catch (error) {
            console.error('Error:', error);
        }

        handleClose();
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                ADD ICON
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Add Icons
                    <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500], }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <Box className="details">
                            <Box className="selector">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={suggestedCategories}
                                    value={category}
                                    onChange={(event, newValue) => setCategory(newValue)}
                                    getOptionLabel={(option) => option.label}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Categories" />}
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="name">Name :</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="myfile">Tag :</label>
                                <input type="text" />
                            </Box>
                            <Box className="name">
                                <label htmlFor="icon">Icon:</label>
                                <input type="file" onChange={(event) => setFile(event.target.files[0])} />
                            </Box>
                        </Box>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default Dailogicon;