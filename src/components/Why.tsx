import { useState } from 'react';
import { Grid, Typography, Button } from "@mui/material";
import winners from "../images/winners.png";
import Box from "@mui/material/Box";
import Quote from "./Quote";
import { styled } from "@mui/system";
import Proof from "./Proof";

const HoverableImage = styled("img")({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
const Why = () => {
    const [showToggleComponent, setShowToggleComponent] = useState(false);
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3} style={{marginBottom:15}} >
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{ marginBottom: "20px" }}
          >
            Join the team that ranks as top 0.14% of traders on Binance, the
            largest cryptocurrency exchange.
          </Typography>
          <Quote />
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "start",
              flexWrap: "wrap",
            }}
          >

            <span style={{ display: 'flex', marginTop:'100px'}}>
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
                marginTop: "5px",
                marginBottom: "5px",
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
                  background: "transparent", // This ensures the background remains transparent on hover.
                },
              }}
            >
              Join Presale
            </Button>
            <Button
            onClick={() => setShowToggleComponent(!showToggleComponent)}
              variant="contained"
              style={{ marginLeft: "10px" }}
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
                marginTop: "5px",
                marginBottom: "5px",
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
                  background: "transparent", // This ensures the background remains transparent on hover.
                },
              }}
            >
              Proof of Gains
            </Button>
            </span>
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
