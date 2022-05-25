import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
// WIP: Try to modularize the CMS query
import {useState, useEffect} from 'react';
import {  webContent, ContentfulFetcher } from './QueryModule';
import { DemoFunctions } from './DemoFunctions';
import { IDE } from './IDE';
import { fetchWrappers }from './CMScontent';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      marginTop: 150,
      minHeight: '60vh',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
  },
  grid: {
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      '& .MuiGrid-item': {
        padding: 20,
      },
    },
  },
  title: {
    fontWeight: 900,
    marginBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 28,
    },
  },
  description: {
    marginTop: 20,
  },
  IDEWrapper: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(8),
    },
  },
  polywrapIllustration: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxHeight: '60vh',
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '30vh',
    },
  },
  demoFunctionWrapper: {
    bottom: -theme.spacing(2),
    position: "absolute",
    right: -theme.spacing(2),
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      bottom: -theme.spacing(8),
    },
  }
}));


// // CONTENTFUL CMS INITIAL SET UP BELOW
// const cmsQuery = `query { 
//   webContent(id:"26XK8ENo5y1MgwpY7CDRlb") { 
//    title 
//    subtitle
//    description
//    callToAction
//  } 
// }`;
// // CONTENTFUL CMS INITIAL SET UP ABOVE


export const FeaturedWrappersSection = () => {
  const theme = useTheme();
  const classes = useStyles();

  // set initial react states
  const [aboutThisSection, setAboutThisSection] = useState<webContent> (
    {
      "title": "Blazing fast development",
      "subtitle": "",
      "description": " Write queries in minutes rather than hours.\n\nUsing the polywrap toolchain, you'll be able to hit any protocol endpoint from any device that can run a Polywrap client.",
      "callToAction": "Execute Query"
  });  const [wrappersData, setWrappersData] = useState<any>(null)
  const [transitionID, setTransitionID] = useState<number>(0)
  
  // update data with CMS integration
  useEffect(() => {
    async function fetchData() {
      setWrappersData(await fetchWrappers())
    }
    fetchData()
  }, [])
  
  // set UI transition effects for the component
  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (transitionID === wrappersData.length - 1 ) {
        setTransitionID(0)
      }
      else {
        setTransitionID(transitionID => transitionID + 1)
      }
    }, 10000) // Timer for switching between wrappers (10000 -> 10 seconds)
    
    return () => {
      clearInterval(rotationInterval);
    }
  }, [transitionID, wrappersData])
  


  return (
    <Box position='relative' className={classes.root}>
      <Parallax
        y={[20, -35]}
        disabled={window.innerWidth < theme.breakpoints.values.md}
      >
        <Grid
          container
          spacing={10}
          alignItems='flex-start'
          className={classes.grid}
        >
          <Grid item xs={12} md={6}>
            <Box className={classes.IDEWrapper}>
              <Box className={classes.demoFunctionWrapper}>
                <Parallax
                  y={[140, -13]}
                  disabled={window.innerWidth < theme.breakpoints.values.md}
                >
                  <DemoFunctions content={['functionNameA','functionNameB','funcNameC','...']} />
                </Parallax>
              </Box>
              <IDE />
            </Box>

          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h3'
              color='textPrimary'
              className={classes.title}
            >
              {aboutThisSection.title}
            </Typography>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.description}
              // TODO: Fix the formatting of description below, this should allow us somehow to show line breaks and bold sections for example
            >
            
              {aboutThisSection.description}
            </Typography>
          </Grid>
        </Grid>
      </Parallax>
    </Box>
  );
};
