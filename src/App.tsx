// React core
import { useEffect, useState } from 'react';

// MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Local component imports
import NavBar from "./components/NavBar";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import SectionTitle from "./components/SectionTitle";
import Why from "./components/Why";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import logo from "./images/logo.png"
import mixpanel from 'mixpanel-browser';
import useTrackScrollToBottom from "./utils/useTrackScrollToBottom";
import DAppLaunch from "./components/DAppLaunch";
import HoverableImage from "./utils/HoverableImage";

// Local assets and styles
import token from "./images/presale.png";
import "./App.scss";
const { REACT_APP_API_MIXPANEL } = process.env;
mixpanel.init(REACT_APP_API_MIXPANEL as string, { ignore_dnt: true });

mixpanel.track_pageview();

console.log(
  // I see you're inspecting the code, so here's a little surprise for you👇
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
)

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

function App() {
  useEffect(() => {
    document.title = "Bull Bear Buddies | Automated Crypto & NFT Analytics Platform for Smart Investors";
  }, []);

  useTrackScrollToBottom();
  const track = (button: string) => {
    mixpanel.track(button);
  };
  const [section, setSection] = useState("Home");
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <span className="welcome-hero">
                <Typography
                  color="#0F9FA3"
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    flexGrow: 1,
                    display: {
                      xs: "block", sm: "none",
                      md: "none",
                      lg: "none",
                      xl: "none"
                    },
                    fontSize:{
                      xs: "2.25rem", // for screens 0px and up
                    }
                  }}
                >
                  Bull Bear Buddies
                </Typography> </span>
            </div>
            <Grid
              container
              spacing={3}
              sx={{ marginBottom: "100px" }}
              alignItems="center"
            >

              <Grid
                item
                xs={12}
                md={6}
                container
                direction="column"
                justifyContent="flex-start"
              >

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "1.25rem", // for screens 0px and up
                      sm: "1.5rem", // for screens 600px and up
                      md: "2rem", // for screens 900px and up
                      lg: "2.5rem", // for screens 1200px and up
                      xl: "3rem", // for screens 1536px and up
                    },
                    marginBottom: "15px",
                  }}
                >
                  Amplify Your Impact in the{" "}
                  <span style={{ color: "#FCBB0B" }}>Digital Economy</span>
                </Typography>

                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    marginBottom: "15px",
                    marginTop: "15px",
                    lineHeight: 1.6,
                    color: "#333",
                    "& strong": {
                      fontWeight: "bold",
                    },
                  }}
                >

                 <strong>Welcome to Our Trading Platform. </strong> 

                   Discover the efficiency of automated technical analysis for crypto and NFT trading. 
                   Our platform offers easy-to-use tools and a supportive community, making trading simpler and more successful for everyone.
                </Typography>

                <span style={{ marginTop: "12px" }}>
                  {" "}
                  <Button
                    onClick={() => track('Join Presale')}
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
                      marginRight: "20px",
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
                        transition: "0.4s",
                      },
                      "&:hover": {
                        background: "transparent",
                      },
                    }}
                  >
                    Join Presale
                  </Button>
                  <Button
                    onClick={() => track('Dex Tools')}
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
                        margin: "-2px",
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
                    Dex Tools
                  </Button>
                </span>
              </Grid>
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
                    src={token}
                    alt="token-presale-image"
                    style={{ width: "75%" }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/*dApp area below  */}

          </section>
          <section>
            <DAppLaunch />
          </section>

          {/*About section below  */}
          <section className="about">
            <Box sx={{
              marginTop: '50px',
              marginBottom: '50px',
            }}>
              <SectionTitle name="About" />
            </Box>

            <About />
          </section>
          <section className="roadmap">
            <SectionTitle name="Roadmap & Features List" />

            <div className="roadmap-content">

              <Box
                sx={{
                  marginTop: '-50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  '& img': {
                    width: ['100%', '50%', '25%'], // 100% on small screens, 50% on medium, 25% on large screens
                  }
                }}
              >
                <HoverableImage
                  src={logo}
                  alt="bull bear buddies logo"
                />
              </Box>


              <Roadmap />
            </div>
          </section>
          <section className="why">
            <SectionTitle name="Why" />{" "}

            <Why />
          </section>
          <section>
            <Footer />
          </section>
        </div>
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
}

export default App;

