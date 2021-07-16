import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { AppBar, Box, Grid, Link, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useHistory } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { theme, polywrapPalette } from './theme';
import { Home } from './pages/Home';
import './App.css';
import { Footer } from './components/Footer';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  logo: {
    width: 'auto',
    height: '45px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out',
    '&:hover': {
      opacity: 0.8,
    },
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  linksContainer: {
    marginRight: '2vw',
  },
  navLink: {
    fontSize: '14px',
    fontWeight: 700,
    marginRight: 20,
    transition: 'color 0.25s ease-in-out',
    '&:hover': {
      color: polywrapPalette.primary.start,
    },
    '&:last-of-type': {
      marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
}));

const App: React.FC = () => {
  const history = useHistory(),
    onLogoClick = () => history.push('/'),
    classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParallaxProvider>
        <Box width='100%' minHeight='100vh'>
          <HashRouter>
            <Grid container className={classes.wrapper}>
              <Box
                display='flex'
                flexDirection='column'
                flexGrow='1'
                bgcolor='background.default'
                position='relative'
                className={classes.main}
              >
                <AppBar position='absolute' color='transparent'>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    padding='24px'
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/logos/polywrap-horizontal.svg'
                      }
                      alt='Polywrap Logo'
                      onClick={onLogoClick}
                      className={classes.logo}
                    />
                    <Box
                      className={classes.linksContainer}
                      display='flex'
                      alignItems='center'
                      flexWrap='nowrap'
                    >
                      <Link
                        className={classes.navLink}
                        href='https://docs.polywrap.io/'
                        target='_blank'
                        color={'textSecondary'}
                        variant='body1'
                      >
                        Docs
                      </Link>
                      <Link
                        className={classes.navLink}
                        href='https://github.com/polywrap/dao/issues?q=is%3Aopen+is%3Aissue+label%3Arecruiting'
                        target='_blank'
                        color={'textSecondary'}
                        variant='body1'
                      >
                        Jobs
                      </Link>
                      <Link
                        className={classes.navLink}
                        href='https://airtable.com/shrzxezSAlpoUUZNV'
                        target='_blank'
                        color={'textSecondary'}
                        variant='body1'
                      >
                        Contact
                      </Link>
                    </Box>
                    {/* <Button variant="outlined" color="primary" endIcon={<KeyboardArrowRightOutlined />}>Sign Up</Button> */}
                  </Box>
                </AppBar>
                <Switch>
                  <Route path='/' exact>
                    <Home />
                  </Route>
                </Switch>
                <Footer />
              </Box>
            </Grid>
          </HashRouter>
        </Box>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;
