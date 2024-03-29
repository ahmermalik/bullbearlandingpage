import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import { Grid } from "@mui/material";

const checklistData = [
  {
    title: "Phase I",
    tasks: [
      "Website Launch",
      "Discord",
      "Twitter Page",
      "Marketing Campaigns",
      "Initial Features",
    ],
  },
  {
    title: "Phase II",
    tasks: [
      "NFT Launch",
      "Casanova I Launch - Coins",
      "Daily Summary Report Launch",
      "Discord Mods",
      "Community Building",
    ],
  },
  {
    title: "Phase III",
    tasks: [
      "Casanova II Launch - NFTs",
      "Notifications Beta",
      "Meta Alerts Launch",
      "Analyst Onboarding",
      "Risk Manager A.I. Launch"
    ],
  },
  {
    title: "Phase IV",
    tasks: [
      "Aggregator Bot I Launch",
      "Gem Finder Launch",
      "Strategy Launch: The 2, 5, & 15 Minute Analaysis",
      "NFT Holder Exclusive Utilities",
    ],
  },
  {
    title: "Phase V",
    tasks: [
      "Casanova Guide Launch",
      "Trade Finder Launch",
      "Monthly Project Pitch",
      "Casanova Onchain Launch",
    ],
  },
  {
    title: "Phase VII",
    tasks: [
      "Community Project Investment Launch",
      "Continue Adding Features To Casanova - Coin & NFT",
      "Continue Evolving Product!",
    ]
  },
];

export default function ChecklistCards() {
  return (
    <Grid container spacing={4.5} sx={{ display: 'flex' }}>
      {checklistData.map((checklist, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={index}
          sx={{ display: 'flex' }} 
        >
          <Card
            key={index}
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
            <CardContent sx={{ padding: "16px 16px 0 0" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  backgroundColor: "#FCBB0B",
                  paddingLeft: "16px",
                  marginBottom: 2,
                  borderTop: '1px solid #FCBB0B',    
                  borderRight: '1px solid #FCBB0B',  
                  borderBottom: '1px solid #FCBB0B',
                  borderTopRightRadius: 15,     
                  borderBottomRightRadius: 15,  
                  maxWidth: '70%',  
                }}
              >
                {checklist.title}
              </Typography>
              {checklist.tasks.map((task, i) => (
                <Typography variant="body1" key={i}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    <ShowChartRoundedIcon
                      color="action"
                      style={{ color: "black", marginRight: "8px" }}
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
