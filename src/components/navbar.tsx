import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logol from "../images/buddies/nobg/nbg3.png";
import logor from "../images/buddies/nobg/nbg10.png";
import shake from "../images/shake/shakepixel.png";
//test
interface Props {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Why", "Roadmap"];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src={logol}
          alt="Logo"
          style={{ maxHeight: "40px", marginRight: "10px" }}
        />
        <img
          src={logor}
          alt="Logo"
          style={{ maxHeight: "40px", marginRight: "10px" }}
        />
      </Typography>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link to={item.toLowerCase()} smooth={true} key={item}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={item}
                  onClick={() => props.setSection(item)}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{ 
        backgroundColor: 'transparent',  
        boxShadow: "none",
        paddingLeft: '250px',
        paddingRight: '250px',
        '@media (max-width: 1536px)': {  // for screens up to 600px wide
          paddingLeft: '150px',
          paddingRight: '150px',
        },
        '@media (max-width: 1200px)': {  // for screens up to 600px wide
          paddingLeft: '125px',
          paddingRight: '125px',
        },
        '@media (max-width: 900px)': {  // for screens up to 600px wide
          paddingLeft: '100px',
          paddingRight: '100px',
        },
        '@media (max-width: 650px)': {  // for screens up to 600px wide
          paddingLeft: '75px',
          paddingRight: '75px',
        },
        '@media (max-width: 450px)': {  // for screens up to 600px wide
          paddingLeft: '25px',
          paddingRight: '25px',
        },



       }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logol}
            alt="Logo"
            style={{ maxHeight: "40px", marginRight: "10px" }}
          />
          <Typography
            color="#65B20A"
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Bull Bear Buddies
          </Typography>
          <img
            src={logor}
            alt="Logo"
            style={{ maxHeight: "40px", marginRight: "10px" }}
          />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.toLowerCase()} smooth={true} key={item}>
                <Button
                  key={item}
                  sx={{mr: 2, color: '#65B20A', fontWeight: "bold" }}
                  onClick={() => props.setSection(item)}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
          <Button
            component="a"
            href="https://twitter.com/bbx_erc20"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              width: 93, 
              mr: 2, //margin right
              fontWeight: "bold",
              borderColor: '#65B20A',
              color: '#65B20A',
              background: 'transparent',
              '&:hover': {
                background: 'transparent', // To ensure the background remains transparent on hover
              },
            }}
          >
            {" "}
            {"twitter"}
          </Button>
          <Button
            component="a"
            href="https://discord.gg/P8X35prGKX"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 93, 
              fontWeight: "bold",
              backgroundColor: '#65B20A',
              color: 'white',
              
              '&:hover': {
                backgroundColor: '#4f8c06', // You can adjust this for a hover effect
              },
            }}
          >
            {" "}
            {"discord"}
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
