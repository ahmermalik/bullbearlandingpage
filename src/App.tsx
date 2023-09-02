// React core
import { useState } from "react";

// MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

// Local component imports
import NavBar from "./components/NavBar";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import SectionTitle from "./components/SectionTitle";
import Why from "./components/Why";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import logo from "./images/logo.png"

// Local assets and styles
import token from "./images/presale.png";
import ether from "./images/ether.png";
import "./App.scss";

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

const HoverableImage = styled("img")({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

function App() {
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
              <span className="welcome-hero"> </span>
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
                  Welcome to our <strong>Token Holder website</strong>, where
                  cutting-edge technology scours the blockchain in real-time to
                  uncover the most promising launches. Experience a new
                  dimension of investing, where trading profits are effortlessly
                  distributed among our community of investors. Join us and
                  embrace a future where your tokens hold the{" "}
                  <strong>key to unparalleled success</strong>.
                </Typography>

                <span style={{ marginTop: "12px" }}>
                  {" "}
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
            <Grid
              container
              spacing={3}
              sx={{
                backgroundColor: "transparent",
                padding: 3,
                borderRadius: 5,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <HoverableImage
                  src={ether}
                  alt="description"
                  style={{ width: "50%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                container
                alignItems="center"
                justifyContent="flex-start" // Align to the left
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
                  }}
                >
                  Unleash Your Time: Say Goodbye to Endless Research
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  disabled
                  sx={{ height: 48, width: 135, borderRadius: 6, marginTop: 2 }}
                >
                  Launch dApp
                </Button>
              </Grid>
            </Grid>
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

