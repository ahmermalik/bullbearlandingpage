import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import winners from "../images/winners.png"
import Box from "@mui/material/Box";


import { styled } from "@mui/system";
const HoverableImage = styled("img")({
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  });
const Why = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        
        {/* First Grid */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ marginBottom: '10px' }}>
            First Heading
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom sx={{ marginBottom: '20px' }}>
            Second Heading
          </Typography>

          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'start',
            flexWrap: 'wrap'
          }}>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{
                marginRight: '10px'
              }}
            >
              Buy Token
            </Button>
            <Button variant="contained" color="secondary">
              Proof
            </Button>
          </div>
        </Grid>

        {/* Second Grid */}
        <Grid item xs={12} sm={6}>
        <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <HoverableImage
                    src={winners}
                    alt="team-win-image"
                    style={{ width: "75%" }}
                  />
                </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Why;
