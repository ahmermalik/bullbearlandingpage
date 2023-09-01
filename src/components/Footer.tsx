import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import supabase from "../services/supabaseClient";

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
      setEmailError("Please enter a valid email address");
    }
  };



  return (


    <Box bgcolor="transparent" color="black" style={{ width: '100%', padding: '20px 0' }}>
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
           
            <img src="/path/to/your/logo.png" alt="Company Logo" height="60" />
            <span style={{ marginLeft: 8, fontSize: '20px' }}>Company Name</span>
          </Box>
        </Grid>

 
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {isSubmitted ? (
              <span>Thank You, please check your email address for confirmation email.</span>
            ) : (
              <>
                <span>

                  <TextField
                    type="email"
                    variant="outlined"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!emailError}
                    helperText={emailError}
                    style={{ marginRight: 8, backgroundColor: 'transparent' }}
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
                </span>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>


  );
};


export default Footer;
