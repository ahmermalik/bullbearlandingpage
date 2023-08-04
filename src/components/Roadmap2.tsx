import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Roadmap.module.scss"; // import the styles
import shake from "../images/shake/shakepixel.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import win from "../images/success.png";

const roadmapData = [
  {
    phase: 1,
    title: "Conceptualization",
    img: win,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    phase: 2,
    title: "New Features",
    img: win,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    phase: 3,
    title: "Community Development",
    img: win,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    phase: 4,
    title: "Project Reinvestment",
    img: win,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    phase: 5,
    title: "blah",
    img: win,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    phase: 6,
    title: "blah",
    img: win,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
];

export default function Roadmap() {
  return (
    <Grid container spacing={5} className={styles.roadmap}>
      {roadmapData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            className={styles.card}
            sx={{ boxShadow: "0 0 10px 3px lime", border: "none" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={item.img}
              alt="card image"
              sx={{
                objectFit: 'cover', 
                width: '50%', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Phase {item.phase}: {item.title}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Card>
          {/* {index !== roadmapData.length - 1 && <img className={styles.betweenCardImage} src={shake} alt="handshake" />} */}
        </Grid>
      ))}
    </Grid>
  );
}
