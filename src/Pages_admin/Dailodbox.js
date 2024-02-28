import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

import { Box } from '@mui/material';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function Dailodbox({ refreshCategories, icon, targetFile }) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [category, setCategory] = useState(null);
    const [suggestedCategories, setSuggestedCategories] = useState([]);

    const [tag, setTag] = React.useState('');
    const [regularFile, setRegularFile] = React.useState(null);
    const [boldFile, setBoldFile] = React.useState(null);
    const [thinFile, setThinFile] = React.useState(null);
    const [solidFile, setSolidFile] = React.useState(null);
    const [straightFile, setStraightFile] = React.useState(null);
    const [roundedFile, setRoundedFile] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        if (icon) {
            setName(icon.name);
            setTag(icon.tag);
        }
    }, [icon]);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData();
        formData.append('name', name);
        formData.append('tag', tag);
        formData.append('regular', regularFile);
        formData.append('bold', boldFile);
        formData.append('thin', thinFile);
        formData.append('solid', solidFile);
        formData.append('straight', straightFile);
        formData.append('rounded', roundedFile);

        const token = localStorage.getItem('token');
        const endpoint = targetFile === 'Animatedicon' ? 'animated' : 'interface';
        
        try {
            let response;
            if (icon) {
                response = await axios.put(`http://localhost:3001/${endpoint}/update/${icon._id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        admintoken: token
                    }
                });
            } else {
                response = await axios.post(`http://localhost:3001/${endpoint}/create`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        admintoken: token
                    }
                });
                handleClose(); // Close the dialog
                // Reset form state variables
                setName('');
                setTag('');
                setRegularFile(null);
                setBoldFile(null);
                setThinFile(null);
                setSolidFile(null);
                setStraightFile(null);
                setRoundedFile(null);
            }

            console.log('Response:', response.data.data);
            refreshCategories()
        } catch (error) {
            console.error('Error:', error.response.data.message);
        }

        handleClose();
    };


    return (
        <React.Fragment>
            {icon ? (
                <Button variant="outlined" onClick={handleClickOpen}>
                    Update
                </Button>
            ) : (
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Icon
                </Button>
            )}
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {icon ? 'Update Icon' : 'Add Icon'}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
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
                                <label htmlFor="tag">Tag :</label>
                                <input
                                    type="text"
                                    id="tag"
                                    value={tag}
                                    onChange={(event) => setTag(event.target.value)}
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="regular">Regular:</label>
                                <input
                                    type="file"
                                    id="regular"
                                    name="regular"
                                    onChange={(e) => setRegularFile(e.target.files[0])}
                                    multiple
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="bold">Bold:</label>
                                <input
                                    type="file"
                                    id="bold"
                                    name="bold"
                                    onChange={(e) => setBoldFile(e.target.files[0])}
                                    multiple
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="thin">Thin:</label>
                                <input
                                    type="file"
                                    id="thin"
                                    name="thin"
                                    onChange={(e) => setThinFile(e.target.files[0])}
                                    multiple
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="solid">Solid:</label>
                                <input
                                    type="file"
                                    id="solid"
                                    name="solid"
                                    onChange={(e) => setSolidFile(e.target.files[0])}
                                    multiple
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="straight">Straight:</label>
                                <input
                                    type="file"
                                    id="straight"
                                    name="straight"
                                    onChange={(e) => setStraightFile(e.target.files[0])}
                                    multiple
                                />
                            </Box>
                            <Box className="name">
                                <label htmlFor="rounded">Rounded:</label>
                                <input
                                    type="file"
                                    id="rounded"
                                    name="rounded"
                                    onChange={(e) => setRoundedFile(e.target.files[0])}
                                    multiple
                                />
                            </Box>
                        </Box>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit}>
                        Submit
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default Dailodbox;
