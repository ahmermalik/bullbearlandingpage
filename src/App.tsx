import { useState, useEffect } from "react";
import "./App.scss";
import NavBar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import bull from "./images/bull/rightnbg.png";
import bear from "./images/bear/bearleftnbg.png";
import Quote from "./components/Quote";
import Roadmap from "./components/Roadmap";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SectionTitle from "./components/SectionTitle";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import  Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';




const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

const HoverableImage = styled("img")({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const StyledGridItem = styled(Grid)(({ theme }) => ({
  backgroundColor: "#F8FAFC",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%", // adjust based on your requirements
  padding: theme.spacing(2),
}));

const StyledImage = styled('img')({
  width: "100%",
  height: "auto",
  maxWidth: "300px", // adjust based on your requirements
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
});


function App() {
  const [section, setSection] = useState("Home");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = [
    "a community",
    "not wasting time on charts",
    "independent",
    "aware of the power of A.I.",
    "an enjoyooor of saving time",
    "a meme",
    // "on the grind",
    // "loyal",
    // "trying to make it",
    // "resilient",
    // "compassionate",
    // "kind",
    // "hell bent on retiring",
    // "consistent",
    // "committed",
    // "always there",
    // "trust worthy",
    // "dependable",
    "not giving you financial advice",
  ]; // replace with your words
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // change word every 3 seconds

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [words]);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <span className="nav-bar">
          {" "}
          <NavBar section={section} setSection={setSection} />{" "}
        </span>

        <div className="main-content">
          <section className="home">
            <div className="hero">
              <span className="welcome-hero"> </span>
            </div>

            <Grid container spacing={3}>
              {/* Grid item 1 */}
              <Grid
                item
                xs={12}
                md={6}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <h1>
                  Amplify Your Impact in the <span> Digital Economy</span>
                </h1>
                <p>
                  Welcome to our Token Holder website, where cutting-edge
                  technology scours the blockchain in real-time to uncover the
                  most promising launches. Experience a new dimension of
                  investing, where trading profits are effortlessly distributed
                  among our community of investors. Join us and embrace a future
                  where your tokens hold the key to unparalleled success.
                </p>

                <span>
                  {" "}
                  <Button variant="contained" color="primary">
                    Buy Token
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginLeft: "10px" }}
                  >
                    Dex Tools
                  </Button>
                </span>
              </Grid>

              {/* Grid item 2 */}
              <Grid
                item
                xs={12}
                md={6}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                    <HoverableImage
                      src={bull}
                      alt="description"
                      style={{ width: "50%" }}
                    />
                </Box>
              </Grid>
            </Grid>

    
      <Grid container spacing={3} sx={{ backgroundColor: '#F8FAFC', padding: 3 }}>
        {/* Grid item 1 with image */}
        <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">

            <HoverableImage
                      src={bear}
                      alt="description"
                      style={{ width: "50%" }}
                    />

        </Grid>
        
        {/* Grid item 2 with H2 and Button */}
        <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
            <Typography variant="h2" gutterBottom>
              Your Title Here
            </Typography>
            <Button variant="contained" color="primary">
              Click Me
            </Button>
        </Grid>
      </Grid>

          </section>

          <section className="about"> </section>
          <section className="roadmap">
            <SectionTitle name="Roadmap & Features List" />

            <div className="roadmap-content">
              <Roadmap />
            </div>
          </section>
          <section className="why">
            <SectionTitle name="Why" />{" "}
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

// Our upcoming analytics platform release will:

// -Give you every coin that’s gonna 🚀
// -Tell you before a coin 📉
// -Alert you of sketchy 👥 and 🪙
// -Tools that answer questions like
// -Should I sell now, how much?
// -Is this a good place to buy?
// -Where’s my liquidation level?
// -Where should I set my stop loss?
// -A community where you can 🦍 together. This means more gains, faster, and long term. 💰
// -No more getting rekt 🤕

// An analytics platform that automates away Tradingview.
// Why spend hours looking at charts when you can join your buddies and win?
