import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { polywrapPalette } from '../theme';
// WIP: Try to modularize the CMS query
import {useState, useEffect} from 'react';
import {  webContent, ContentfulFetcher } from './QueryModule';

//These imports are for multiple slides/caroussel effect
//import { useHistory } from 'react-router-dom';
//import { KeyboardArrowRightOutlined } from '@material-ui/icons';
//import { CTA } from '../constants/verbiage';
//import Button from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60vh',
    position: 'relative',
    zIndex: 2,
    marginTop: 140,
    [theme.breakpoints.down('md')]: {
      marginTop: 80,
      marginBottom: 80,
    },
  },
  cell: {
    margin: 'auto',
    maxWidth: '90vw'
  },
  blurredGraphicContainer: {
    position: 'absolute',
    bottom: '-30%',
    left: '-7%',
    opacity: 0.6,
    width: '50vw',
    zIndex: 0,
  },
  container: {
    backgroundColor: polywrapPalette.secondary[1000],
    borderRadius: 8,
    boxShadow: `0 64px 96px -24px rgba(0,0,0,0.5)`,
    padding: 72,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: 32,
    },
  },
  hubWireframeImg: {
    boxShadow: `0 4px 64px ${polywrapPalette.primary.mid}85`,
    borderRadius: 4,
    transformOrigin: 'top left',
    transform: `translateY(-8px)`,
    maxHeight: '400px',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      boxShadow: `0 4px 32px ${polywrapPalette.primary.mid}85`,
      width: '100%',
      transform: 'none',
    },
  },
}));


// CONTENTFUL CMS  INITIAL SET UP BELOW
const cmsQuery = `query { 
  webContent(id:"4QLItvU9WU4CFNCC4c0jf1") { 
   title 
   subtitle
   description
   callToAction
 } 
}`;

// CONTENTFUL CMS INITIAL SET UP ABOVE


export const HubCallout = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });




  // CONTENTFUL CMS INTEGRATION BELOW
  const [someContent, setSomeContent] = useState<webContent> (
    {
      "title": "Welcome to the Polywrap Hub",
      "subtitle": "Our flagship dApp",
      "description": "A developer-centric platform where you can discover, deploy, and interact with any Polywrapper in the ecosystem. We are paving the road, expecting endless collaboration and curation possibilities. Test and Integrate web3 protocols quickly on the browser with our GraphQL Playground, and publish your packages to decentralised hosting. Soon you'll be able to explore an endless ocean of wrappers, by querying tags like `multisig`, `defi`, or `vesting`. A more semantic web3 that's easy to compose together!",
      "callToAction": "Start Coding"
  });
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    /////////// CMS content fetching: Callback version
    setIsLoading(true);

    ContentfulFetcher(cmsQuery).then(
      (response) => {
        //On success        
        const content: webContent = response.data.webContent;
        //console.log("On the arrow func", content)

        setSomeContent(content);
      }, 
      (error) => {
        //On fail
        setHasFailed(true);
      }
    ).finally(() => {
      setIsLoading(false);
    });

  }, []);
  // CONTENTFUL CMS INTEGREATION ABOVE


  return (
    <Box position='relative' className={classes.root}>
      <Box className={classes.cell}>
        <Box className={classes.blurredGraphicContainer}>
          <Parallax y={[-15, 10]} disabled={isMobile}>
            <img src={process.env.PUBLIC_URL + '/imgs/polywrapper-callout-spot.png'} alt='polywrap blurred'/>
          </Parallax>
        </Box>
        <Box className={classes.container}>
          <Grid container spacing={isMobile ? 6 : 10} alignItems='stretch' >
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">
                {someContent.title}
              </Typography>
              <Box marginTop={2}>
                <Typography variant="body1">
                  {someContent.description}
                </Typography>
              </Box>
              {/* <Box marginTop={2}>
                <Button
                  component="button"
                  color='primary'
                  href='https://discord.gg/bGsqQrNhqd'
                  endIcon={<KeyboardArrowRightOutlined />}
                  type='submit'
                  variant='contained'
                >
                  {CTA}
                </Button>
              </Box> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Parallax y={[24, -24]} disabled={isMobile}>
                <Box>
                  <img className={classes.hubWireframeImg} src={process.env.PUBLIC_URL + '/imgs/assets/polywrap-hub-wireframe.png'} alt='Polywrap Hub'/>
                </Box>
              </Parallax>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
