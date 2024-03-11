// Dailogicon.js
import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, TextField, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

function PopularDailog({ addCategory, icon }) {
    const [open, setOpen] = useState(false);
    const [card, setCard] = useState(null);
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');
    const [suggestedCategories, setSuggestedCategories] = useState([]);

    useEffect(() => {
        fetchSuggestedCategories();
    }, []);

    useEffect(() => {
        if (icon) {
            setCard({ label: icon.card, id: icon.cardId });
            setName(icon.name);
            setTag(icon.tag);
            setDescription(icon.description);
        }
    }, [icon]);

    const fetchSuggestedCategories = () => {
        axios.get('http://localhost:3001/popCategory/find')
            .then((res) => {
                const categories = res.data.data.map(card => ({ label: card.name, id: card._id }));
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

        if (!card || !name || !tag || !description) {
            console.log('Please select a card, enter a name, enter a tag, and description');
            return;
        }

        const value = { card: card.label, name, tag, description };

        const token = localStorage.getItem('token');

        try {
            let response;
            if (icon) {
                response = await axios.put(`http://localhost:3001/popCategory/update/${icon._id}`, value, {
                    headers: {
                        admintoken: token
                    }
                });
            } else {
                response = await axios.post('http://localhost:3001/popCategory/create', value, {
                    headers: {
                        admintoken: token
                    }
                });
            }

            console.log('Response:', response.data.data);
            addCategory();
            setCard(null);
            setName("");
            setTag("");
            setDescription("");
            handleClose();
        } catch (error) {
            console.error('Error:', error.response.data.message);
        }
    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event); // Pass the event object to handleSubmit
        }
    };


    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                {icon ? 'Update' : 'Add Popular Category'}
            </Button>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {icon ? 'Update Icon' : 'Add Category'}
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
                                    value={card}
                                    onChange={(event, newValue) => setCard(newValue)}
                                    getOptionLabel={(option) => option.label}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Card" />}
                                />
                            </Box>

                            <Box className="name">
                                <label htmlFor="name">Name :</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="tag">Tag :</label>
                                <input
                                    type="text"
                                    id="tag"
                                    value={tag}
                                    onChange={(event) => setTag(event.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="description">Description :</label>
                                <input
                                    type="text"
                                    id="description"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                            </Box>

                        </Box>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit}>
                        {icon ? 'Update' : 'Submit'}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default PopularDailog;
