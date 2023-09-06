import { styled } from '@mui/system';

const HoverableImage = styled("img")({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});


export default HoverableImage;