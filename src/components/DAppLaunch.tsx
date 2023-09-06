import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import HoverableImage from '../utils/HoverableImage'; // Adjust the path to where HoverableImage is located
import ether from "../images/ether.png";



const DAppLaunch: React.FC = () => {
    return (
        <Grid
            container
            sx={{
                backgroundColor: "transparent",
                padding: 3,
                borderRadius: 5,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",

            }}
        >
            <Grid
                item
                xs={12}
                md={6}
                container
                alignItems="center"
                justifyContent="center"
            >
                <HoverableImage
                    src={ether} // Ensure 'ether' is available, either passed as prop or imported
                    alt="description"
                    style={{ width: "50%" }}
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                container
                alignItems="center"
                justifyContent="flex-start"
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "bold",
                        fontSize: {
                            xs: "1.25rem",
                            sm: "1.5rem",
                            md: "2rem",
                            lg: "2.5rem",
                            xl: "3rem",
                        },
                    }}
                >
                    Unleash Your Time: Say Goodbye to Endless Research
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    disabled
                    sx={{ height: 48, width: 135, borderRadius: 6, marginTop: 2 }}
                >
                    Launch dApp
                </Button>
            </Grid>
        </Grid>
    );
}

export default DAppLaunch;
