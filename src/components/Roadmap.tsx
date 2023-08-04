import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./Roadmap.module.scss";
import { Grid } from "@mui/material";

const checklistData = [
  {
    title: "Phase I",
    tasks: [
      "Website Launch",
      "Discord",
      "Twitter Page",
      "Marketing Campaigns",
      "Tokenomics",
    ],
  },
  {
    title: "Phase II",
    tasks: [
      "Token Launch",
      "Casanova I Launch - Coins",
      "Summary Report Launch",
      "Discord Mods",
      "Community Building",
    ],
  },
  {
    title: "Phase III",
    tasks: [
      "Casanova II Launch - NFTs",
      "Telegram Notifications Beta",
      "Meta Report Launch",
      "Analyst Onboarding",
    ],
  },
  {
    title: "Phase IV",
    tasks: [
      "Bot Aggregator I Launch",
      "Gem Finder Aggregator Launch",
      "Trading Strategy Course Launch",
      "Token Holder Exclusive Utilities",
    ],
  },
];

export default function ChecklistCards() {
  return (
    <Grid container spacing={2} className={styles.checklistCards}>
      {checklistData.map((checklist, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{display: 'flex'}}>
          <Card key={index} className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                {checklist.title}
              </Typography>
              {checklist.tasks.map((task, i) => (
                <Typography variant="body1" key={i} className={styles.task}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CheckCircleOutlineIcon
                      color="primary"
                      style={{ marginRight: "8px" }}
                    />
                    {task}
                  </div>
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
