import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Box, Grid, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';
import { theme } from './theme';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import './App.css';
import { MembraneBg } from './components/MembraneBg'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParallaxProvider>
        <Box width='100%' minHeight='100vh'>
          <BrowserRouter>
            <Grid container className={classes.wrapper}>
              <Box
                display='flex'
                flexDirection='column'
                flexGrow='1'
                position='relative'
                className={classes.main}
              >
                <MembraneBg />
                <Navbar/>
                <Switch >
                  <Route path='/' exact component={Home} />
                  <Route path="/signup" component={SignUp} />
                </Switch>
                <Footer />
              </Box>
            </Grid>
          </BrowserRouter>
        </Box>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;
