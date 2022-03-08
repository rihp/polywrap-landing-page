import React from 'react';
import {useState, useEffect} from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Box, Grid, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';
import { theme } from './theme';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { MembraneBg } from './components/MembraneBg'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

require('dotenv').config();
console.log("This is my site which im querying");
//const api_endpoint = process.env.REACT_APP_CMS_SITE;
console.log("MY_VARIABLE: " + process.env.REACT_APP_CMS_TOKEN);

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

  ////////////////////////////
  // Begin CMS implementation
  console.log("Hello world! this is my query");

  const cmsQuery = `query { 
     webContent(id:"6DWrAojZUdPcTSDXGip5PN") { 
      title 
    } 
  }`;
  console.log(cmsQuery);

  const [content, setContent] = useState(null);

  useEffect(() => {
    window
      .fetch(process.env.REACT_APP_CMS_SITE as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.REACT_APP_CMS_TOKEN as string,
        },
        body: JSON.stringify({ cmsQuery }),
      })

      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.log("There was an error with the query:");
          console.error(errors);
        }
        console.log("This is the data:", data);
        console.log(content);
        //setContent(data.webContent.items[0]);
      });
  });

  // End CMS Implementation 
  ////////////////////////////


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParallaxProvider>
        <Box width='100%' minHeight='100vh' overflow="hidden">
          <HashRouter>
            <Grid container className={classes.wrapper}>
              <Box
                display='flex'
                flexDirection='column'
                flexGrow='1'
                position='relative'
                className={classes.main}
              >
                <MembraneBg />
                <Header />
                <Switch >
                  <Route path='/' exact>
                    <Home />
                  </Route>
                  <Route path="/signup">
                    <SignUp />
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
