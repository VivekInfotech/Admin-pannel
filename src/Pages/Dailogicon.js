import * as React from 'react';
import { useState } from 'react'; // Import useState hook
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, TextField, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
    { label: 'Car' },
    { label: 'Home' },
    { label: 'Laptop' },
    { label: 'Institute' },
    { label: 'Other' },
];

function Dailogicon() {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // Access the values of category, name, and file here and perform further actions
        console.log('Category:', category);
        console.log('Name:', name);
        console.log('File:', file);
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
                                    options={top100Films}
                                    value={category}
                                    onChange={(event, newValue) => setCategory(newValue)}
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
                                <label htmlFor="icon">Icon:</label>
                                <input
                                    type="file"
                                    id="icon"
                                    name="icon"
                                    multiple
                                    onChange={(event) => setFile(event.target.files[0])}
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
            </Dialog>
        </React.Fragment>
    );
}

export default Dailogicon;
