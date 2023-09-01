import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import comm from "../images/comm.png";
import tan from "../images/tan.png";
import precise from "../images/precise.png";
import { Box } from "@mui/material";

const data = [
  {
    title: "Technical Analysis",
    image: tan,
    info: "The cornerstone of informed decision-making. Seamlessly automate complex analysis processes to enhance your trading precision, seize opportunities, and maximize gains. Join us in reshaping the future of trading through advanced technology.",
  },
  {
    title: "Precision in Every Trade",
    image: precise,
    info: "Embrace Automated Technical Analysis. Elevate your trading game with our pioneering solution. By seamlessly integrating Technical Analysis, you gain a strategic edge that enhances your decision-making. Welcome to a future where every trade is a step towards success, backed by cutting-edge technology.",
  },
  {
    title: "Community Enrichment",
    image: comm,
    info: "Join a vibrant community where knowledge thrives and growth is nurtured. Our innovative solution, driven by automated Technical Analysis, fosters a space for like-minded individuals to learn, develop, and flourish together. Elevate your trading strategies while connecting with peers who share your aspirations.",
  },
];

export default function About() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      {data.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={index}
          sx={{ display: "flex" }}
        >
          <Card
            variant="outlined"
            sx={{
              flex: 1,
              backgroundColor: "transparent",
              borderRadius: 8,
              border: "1px solid #FCBB0B",
              transition: ".3s",
              "&:hover": {
                boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "150px", // You can adjust these sizes as required
                width: "150px", // You can adjust these sizes as required
                overflow: "hidden",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                image={item.image}
                alt={`Image for ${item.title}`}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.info}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
