import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import { Breadcrumbs } from '@mui/material';
import { Link } from "react-router-dom";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { BsCart, BsPeople } from "react-icons/bs";
import ApartmentIcon from '@mui/icons-material/Apartment';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const Dashboard = () => {

    return (
        <Box>
            <Typography variant="h5" marginBottom="5px">
                Dashboard
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link className="Breadcrumb" style={{ color: "#899bbd", fontSize: "14px", textDecoration: "none" }} to="/dashboard">
                    Home
                </Link>
                <Typography color="#273246" fontSize="14px">Dashboard</Typography>
            </Breadcrumbs>

            <Grid container spacing={3}     >

                <Grid item md={8} xs={12}>
                      <Grid container columnSpacing={3} rowSpacing={4} >
                        <Grid item sm={12} xs={12} >
                            <Item sx={{ padding: "20px" }} >
                                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" marginBottom="15px" >
                                    <Box display="flex" alignItems="center" >
                                        <Typography variant="h6" gutterBottom color="#000">
                                            Total icon
                                        </Typography>
                                        {/* <Divider orientation="vertical" sx={{ height: "16px", width: "1.5px", backgroundColor: "#ababab", marginX: "5px" }} variant="middle" flexItem /> */}
                                    </Box>

                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" marginBottom="5px">
                                    <Box padding="15px" backgroundColor="#f6f9ff" borderRadius="50%" lineHeight="0">
                                        <BsCart color='#4154f1' size={35} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" gutterBottom marginBottom="0px" fontSize="28px" fontWeight="600">
                                            145
                                        </Typography>

                                    </Box>


                                </Stack>

                            </Item>
                        </Grid>

                        <Grid item xs={12} >
                            <Item sx={{ padding: "20px" }} >
                                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" marginBottom="15px" >
                                    <Box display="flex" alignItems="center" >
                                        <Typography variant="h6" gutterBottom color="#000">
                                            <img src="" alt="" />
                                            Interface Icon
                                        </Typography>


                                    </Box>

                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" marginBottom="5px">
                                    <Box padding="15px" backgroundColor="#ffecdf" borderRadius="50%" lineHeight="0">
                                        <ApartmentIcon color='#4154f1' size={35} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" gutterBottom marginBottom="0px" fontSize="28px" fontWeight="600">
                                            1244
                                        </Typography>

                                    </Box>


                                </Stack>

                            </Item>
                        </Grid>
                        <Grid item xs={12} >
                            <Item sx={{ padding: "20px" }} >
                                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" marginBottom="15px" >
                                    <Box display="flex" alignItems="center" >
                                        <Typography variant="h6" gutterBottom color="#000">
                                            Animated Icon
                                        </Typography>


                                    </Box>

                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" marginBottom="5px">
                                    <Box padding="15px" backgroundColor="#ffecdf" borderRadius="50%" lineHeight="0">
                                        <AutoFixHighIcon color='#fff' size={35} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" gutterBottom marginBottom="0px" fontSize="28px" fontWeight="600">
                                            1244
                                        </Typography>

                                    </Box>


                                </Stack>

                            </Item>
                        </Grid>
                       

                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12} >
                        <Item sx={{ padding: "20px" }} >
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" marginBottom="15px" >
                                <Box display="flex" alignItems="center" >
                                    <Typography variant="h6" gutterBottom color="#000">
                                        categories
                                    </Typography>


                                </Box>

                            </Stack>
                            <Stack direction="row" spacing={2} alignItems="center" marginBottom="5px">
                                <Box padding="15px" backgroundColor="#ffecdf" borderRadius="50%" lineHeight="0">
                                    <BsPeople color='#ff771d' size={35} />
                                </Box>
                                <Box>
                                    <Typography variant="h5" gutterBottom marginBottom="0px" fontSize="28px" fontWeight="600">
                                        1244
                                    </Typography>

                                </Box>


                            </Stack>

                        </Item>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Dashboard;