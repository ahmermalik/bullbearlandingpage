import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import PhotoAlbum from "react-photo-album";
import lambo from "../images/lambo/lambo.png"
import { styled } from "@mui/system";
import Quote from "./Quote";


const imageContext = require.context(
  "../images/proofs",
  false,
  /img_\d+\.jpg$/
);

const HoverableImage = styled("img")({
  transition: "transform 0.3s ease-in-out",
  marginTop: "40px",
  marginBottom: "10px",
  "&:hover": {
    transform: "scale(1.3)",
  },
});
function Proof() {
  const images = imageContext.keys().map(imageContext);
  const [imageObjects, setImageObjects] = useState<
    { src: string; width: number; height: number }[]
  >([]);

  useEffect(() => {
    // Map over the images array to create the desired object structure.
    const newImageObjects = images.map((imgSrc: string) => ({
      src: imgSrc,
      width: 1600, // You can adjust these values as needed.
      height: 900,
    }));

    // Update the state variable.
    setImageObjects(newImageObjects);
  },[images]); // The empty dependency array ensures this useEffect runs only once after the initial render.

  return (
    <div>
      <PhotoAlbum layout="rows" photos={imageObjects} />
<div style={{textAlign:'center', marginTop: '50px'}}>
   <Quote />
<Typography sx={{ fontWeight: "bold", marginTop:"10px" }}> You Are Not Alone in These Pursuits.</Typography>
<Typography sx={{ fontWeight: "bold" }}> Join Us.</Typography>
</div>
      <span style={{ display: 'flex', marginTop: '20px', alignItems: "center", justifyContent: "center" }}>
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
              background: "transparent",
            },
          }}
        >
          Join Presale
        </Button>

        <a href="https://discord.gg/P8X35prGKX" target="_blank" rel="noopener noreferrer">
          <Button
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
            Discord
          </Button>
        </a>
      </span>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <HoverableImage
          src={lambo}
          alt="token-presale-image"
          style={{ width: "75%", marginTop: "25px, " }}
        />
      </Box>
    </div>
  );
}

export default Proof;
