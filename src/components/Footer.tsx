import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import supabase from "../services/supabaseClient";
import Typography from "@mui/material/Typography";
import logo from "../images/logo.png";


const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    return regex.test(email);
  };


  const handleSubmit = async () => {
    if (isValidEmail(email)) {
      setEmailError(null);

      // Insert the email into table
      const { error } = await supabase
        .from('emails')
        .insert([
          { email_address: email }
        ]);

      if (error) {
        console.error("Error inserting email:", error);
      } else {
        setIsSubmitted(true);
      }

    } else {
      setEmailError("Enter a valid email address.");
    }
  };



  return (

<Grid container spacing={2} direction="row" alignItems="flex-start" bgcolor="transparent" style={{ width: '100%', marginTop:'150px'}}>
      
      <Grid item xs={12} sm={6} style={{ minHeight: '100px' }}> 
          {/* minHeight is just an example value, adjust as needed */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="left"
          >
            <img src={logo} alt="Bull Bear Logo" height="60" />
            <Typography sx={{ fontWeight: "bold" }} style={{ marginLeft: 8, fontSize: '20px' }}>Bull Bear Buddies</Typography>
           
          </Box>
          <Typography>Copyright © 2023. All Rights Reserved.</Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Grid container direction="column" alignItems="flex-start" spacing={1}>

          <Grid item>
            <Typography
              variant="body2"
              component="p"
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: ".75rem",
                  sm: ".75rem",
                  md: ".75rem",
                  lg: "1rem",
                  xl: "1rem",
                },
                marginBottom: "15px",
              }}
            >
              Subscribe to Get Our Updates
            </Typography>
          </Grid>

          {isSubmitted ? (
            <Grid item>
              Thank you. Please check your email address for a confirmation email.
            </Grid>
          ) : (
            <Grid container item alignItems="center" spacing={1}>

              {/* Email TextField */}
              <Grid item>
                <TextField
                  type="email"
                  variant="outlined"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError || " "}
                  style={{ width: '200px', marginRight: 8, backgroundColor: 'transparent' }}
                  sx={{
                    '& fieldset': {
                      borderRadius: '25px'
                    }
                  }}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}
                  sx={{
                    borderRadius: 6,
                    color: "black",
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
                  }}>
                  Subscribe
                </Button>
              </Grid>

            </Grid>
          )}
        </Grid>
      </Grid>
    
    </Grid>

  );
};


export default Footer;
