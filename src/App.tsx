import { useState, useEffect } from "react";
import "./App.scss";
import NavBar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import bull from "./images/bull/rightnbg.png";
import bear from "./images/bear/bearleftnbg.png";
import Quote from "./components/Quote";
import Roadmap from "./components/Roadmap";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SectionTitle from "./components/SectionTitle";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/system";

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

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: "300px", // adjust based on your requirements
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
});

const data = [
  {
    title: "Technical Analysis",
    image: "/path",
    info: "the cornerstone of informed decision-making. Seamlessly automate complex analysis processes to enhance your trading precision, seize opportunities, and maximize gains. Join us in reshaping the future of trading through advanced technology.",
  },
  {
    title: "Precision in Every Trade",
    image: "/path",
    info: "Embrace Automated Technical Analysis. Elevate your trading game with our pioneering solution. By seamlessly integrating Technical Analysis, you gain a strategic edge that enhances your decision-making. Welcome to a future where every trade is a step towards success, backed by cutting-edge technology.",
  },
  {
    title: "Community Enrichment",
    image: "/path",
    info: "Join a vibrant community where knowledge thrives and growth is nurtured. Our innovative solution, driven by automated Technical Analysis, fosters a space for like-minded individuals to learn, develop, and flourish together. Elevate your trading strategies while connecting with peers who share your aspirations.",
  },
];

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
                <Typography variant="h2">
                  Amplify Your Impact in the <span> Digital Economy</span>
                </Typography>

                <Typography variant="body1" component="p">
                  Welcome to our Token Holder website, where cutting-edge
                  technology scours the blockchain in real-time to uncover the
                  most promising launches. Experience a new dimension of
                  investing, where trading profits are effortlessly distributed
                  among our community of investors. Join us and embrace a future
                  where your tokens hold the key to unparalleled success.
                </Typography>

                <span>
                  {" "}
                  <Button
                    variant="contained"
                    sx={{
                      color: "#0E9296",
                      background: "linear-gradient(160deg, #33A38C, #ABB13F)",
                      border: "2px solid transparent",
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 0,
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
                        height: 48,
                        padding: "0 30px",
                        transition: "0.4s",
                      }
                    }}
                  >
                    Buy Token
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginLeft: "10px" }}
                    sx={{
                      background: "linear-gradient(90deg, #FCBB0B, #0F9FA3)",
                      border: 0,
                      borderRadius: 3,
                      color: "white",
                      height: 48,
                      padding: "0 30px",
                      transition: "0.4s",
                      "&:hover": {
                        background: "linear-gradient(0deg, #FCBB0B, #0F9FA3)",
                        // Reset on touch devices, it doesn't add specificity
                        "@media (hover: none)": {
                          backgroundColor:
                            "linear-gradient(90deg, #FCBB0B, #0F9FA3)",
                        },
                      },
                    }}
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

            <Grid
              container
              spacing={3}
              sx={{ backgroundColor: "#F8FAFC", padding: 3 }}
            >
              {/* Grid item 1 with image */}
              <Grid
                item
                xs={12}
                md={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <HoverableImage
                  src={bear}
                  alt="description"
                  style={{ width: "50%" }}
                />
              </Grid>

              {/* Grid item 2 with H2 and Button */}
              <Grid
                item
                xs={12}
                md={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h2">
                  Unleash Your Time: Say Goodbye to Endless Research
                </Typography>
                <Button variant="contained" color="primary" disabled>
                  Launch dApp
                </Button>
              </Grid>
            </Grid>
          </section>

          <section className="about">
            <SectionTitle name="About" />
            <Grid container spacing={3}>
              {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: "100%",
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={`Image for ${item.title}`}
                    />
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
          </section>
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
