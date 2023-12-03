import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => (
  <AppBar position="static" color="default">
    <Toolbar style={{ minHeight: '50px' }}>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        APP LOGO
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Dashboard
      </Button>
      <Button color="inherit" component={Link} to="/create-ad">
        Create Ads
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;