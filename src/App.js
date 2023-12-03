import React, { useState } from 'react';
import { useNavigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import NavBar from './NavBar'; 
import Dashboard from './Dashboard';
import CreateAd from './CreateAd';
import AdForm from './Adform';
import Submitted from './Submitted';

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  overrides: {
    MuiMenuItem: {
      root: {
        fontSize: '12px', 
      },
    },
    MuiSelect: {
      root: {
        fontSize: '12px',  
      },
    },
    MuiPaper: {
      elevation1: {

      }
    }
  },
});

const AppRoutes = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      navigate('/create-ad', { replace: true });
    }, 600);
  };
  
  const handleClose = () => {
    setIsSubmitted(false);
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/create-ad" element={<CreateAd />} />
        <Route
          exact
          path="/create-ad/TextAd"
          element={<AdForm formType="text" onSubmit={handleSubmit} />}
        />
        <Route
          exact
          path="/create-ad/MediaAd"
          element={<AdForm formType="media" onSubmit={handleSubmit} />}
        />
      </Routes>
      <Dialog open={isSubmitted} onClose={handleClose}>
        <Submitted />
      </Dialog>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar/>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Router>
  );
};

export default App;