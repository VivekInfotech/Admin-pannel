import * as React from 'react';
import { useState } from 'react'; // Import useState hook
import { Box, CssBaseline, Container, Stack, Typography, Card, CardContent, FormControl, FormLabel, TextField, OutlinedInput, InputAdornment, IconButton, Checkbox, Button, Grid } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);

    let history = useHistory()

    const submit = (event) => {
        event.preventDefault(); // Prevent default form submission

        let value = { email: email, password: password }

        axios.post('http://localhost:3001/admin/login', value)
            .then((res) => {
                console.log(res.data.data);
                localStorage.setItem('token',res.data.token)
                history.push('/')
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })

    };

    return (
        <Box className="color">
            <CssBaseline />
            <Container maxWidth="sm">
                <Grid container justifyContent="center" padding="50px 0px">
                    <Grid item sm={8} xs={12}>
                        <Box textAlign="center" paddingBottom="18px">
                            <Typography component="a" href='#Ggf' sx={{ textDecoration: "none", display: "inline-block" }}>
                                <Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        className='nunito-sans'
                                        fontWeight={700}
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontFamily: '"Nunito", sans-serif',
                                            fontSize: "24px",
                                            color: "#012970",
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Icon Grid
                                    </Typography>
                                </Stack>
                            </Typography>
                        </Box>
                        <Card sx={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.3)" }}>
                            <CardContent sx={{ padding: "30px 20px" }}>
                                <Typography variant="h5" component="div" fontWeight={700} textAlign="center" className='nunito-sans' color="#012970" >
                                    Login to Your Account
                                </Typography>
                                <Typography variant="body2" textAlign="center" marginBottom="22px">
                                    Enter your email & password to login
                                </Typography>
                                <Stack spacing={2}>
                                    <form onSubmit={submit}> Wrap the form around the input fields
                                        <FormControl fullWidth>
                                            <FormLabel sx={{ color: "#000", marginBottom: "8px" }} >Email</FormLabel>
                                            <TextField type='text' size='small' value={email} onChange={handleChangeEmail} />
                                        </FormControl>

                                        <FormControl fullWidth>
                                            <FormLabel sx={{ color: "#000", marginBottom: "8px" }} >Password</FormLabel>
                                            <OutlinedInput
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                size='small'
                                                value={password}
                                                onChange={handleChangePassword}
                                            />
                                        </FormControl>

                                        <Stack direction="row" alignItems="center">
                                            <Checkbox disableRipple />
                                            <Typography>
                                                Remember me
                                            </Typography>
                                        </Stack>
                                        <Button variant="contained" type='submit' sx={{ textTransform: "capitalize", fontSize: "16px", backgroundColor: "#0d6efd" }}>
                                            Login
                                        </Button>
                                    </form>
                                    <Typography>
                                        Don't have account?
                                        <Typography component="a" href='#ff' color="#4154f1" sx={{ textDecoration: "none" }}> Create an account</Typography>
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Login;