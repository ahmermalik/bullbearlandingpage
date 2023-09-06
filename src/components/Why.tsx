import { useState } from 'react';
import { Grid, Typography, Button } from "@mui/material";
import winners from "../images/winners.png";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Proof from "./Proof";
import HoverableImage from "../utils/HoverableImage";


const Why = () => {
    const [showToggleComponent, setShowToggleComponent] = useState(false);
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3} style={{marginBottom:15}} >
        <Grid item xs={12} sm={6}>
        <Box sx={{ marginBottom: "40px" }}>
  <Typography
    variant="h5"
    component="div"
    gutterBottom
    sx={{
      fontWeight: "bold",
      marginBottom: "20px",
      fontSize: "24px"
    }}
  >
    Join the team that ranks as top 0.14% of traders on Binance.
  </Typography>

  <Typography
    variant="subtitle1"
    component="p"
    gutterBottom
    sx={{ marginBottom: "20px" }}
  >
    As a part of the largest cryptocurrency exchange, we've made our mark. Here's a quick snapshot:
  </Typography>

  <Typography
    variant="body1"
    component="p"
    gutterBottom
    sx={{ marginBottom: "10px", fontSize: "16px" }}
  >
    🔹 Transactions: 5,596
    <br />
    🔹 Cumulative Trading Volume: $400,502,650+
    <br />
    🔹 Performance Rank: Outperformed 99.86% on Binance
    <br />
    🔹 Most Profitable Trade: ETH/USD - $55,328.34 profit (Top 0.2%)
  </Typography>
</Box>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "start",
              flexWrap: "wrap",
            }}
          >

<Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    marginTop: '50px',
  }}
>
  <Button
    variant="contained"
    sx={{
      borderRadius: 6,
      color: "#65B20A",
      background: "transparent",
      border: "1px solid transparent",
      position: "relative",
      overflow: "hidden",
      height: 48,
      width: 145,
      zIndex: 0,
      marginTop: { xs: '5px', sm: '5px' },
      marginBottom: { xs: '10px', sm: '5px' }, // To give space between the buttons on mobile
      marginRight: { xs: '0', sm: '10px' }, // Right margin for desktop view
      fontWeight: "bold",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        background: "white",
        border: 0,
        borderRadius: 3,
        padding: "0 30px",
        transition: "0.4s",
      },
      "&:hover": {
        background: "transparent",
      },
    }}
  >
    Join Presale
  </Button>
  <Button
    onClick={() => setShowToggleComponent(!showToggleComponent)}
    variant="contained"
    sx={{
      borderRadius: 6,
      color: "#0E9296",
      background: "transparent",
      border: "1px solid transparent",
      position: "relative",
      overflow: "hidden",
      height: 48,
      width: 175,
      zIndex: 0,
      marginTop: { xs: '5px', sm: '5px' },
      marginBottom: '5px',
      fontWeight: "bold",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        background: "white",
        border: 0,
        borderRadius: 3,
        padding: "0 30px",
        transition: "0.4s",
      },
      "&:hover": {
        background: "transparent",
      },
    }}
  >
    Proof of Gains
  </Button>
</Box>

          </div>
        </Grid>

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

     {showToggleComponent && <Proof/> }
    </div>
  );
};

export default Why;
