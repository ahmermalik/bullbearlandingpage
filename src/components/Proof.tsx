import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import PhotoAlbum from "react-photo-album";
import rank from "../images/other_proofs/ranking.png";
import lambo from "../images/lambo/lambo.png"
import { styled } from "@mui/system";

const imageContext = require.context(
  "../images/proofs",
  false,
  /img_\d+\.jpeg$/
);

const HoverableImage = styled("img")({
  transition: "transform 0.3s ease-in-out",
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
  }, []); // The empty dependency array ensures this useEffect runs only once after the initial render.

  return (
    <div>
      <HoverableImage
          src={rank}
          alt="token-presale-image"
          style={{ width: "100%" }}
        />
      <PhotoAlbum layout="rows" photos={imageObjects} />
      <span style={{ display: 'flex', marginTop:'50px', alignItems:"center"}}>
        
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

            <a href="https://discord.gg/P8X35prGKX" target="_blank" rel="noopener noreferrer">
            <Button
            // onClick={() => setShowToggleComponent(!showToggleComponent)}
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
      <HoverableImage
          src={lambo}
          alt="token-presale-image"
          style={{ width: "100%" }}
        />
    </div>
  );
}

export default Proof;