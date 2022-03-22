import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';

// WIP: Try to modularize the CMS query
import {useState, useEffect} from 'react';
import { webContent, ContentfulFetcher, Asset } from './QueryModule';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    marginBottom: 100,
    position: 'relative',
    padding: '0 20px',
    zIndex: 0,
    marginTop: 140,
    [theme.breakpoints.down('sm')]: {
      marginTop: 200,
      minHeight: 'unset',
    },
  },
  blurredPoly: {
    right: '-10%',
    opacity: '0.2',
    position: 'absolute',
    top: '-30%',
    width: '40vw',
    zIndex: 0,
  },
  cell: {
    margin: '64px auto 0',
    maxWidth: theme.breakpoints.values.md,
    position: 'relative',
  },
  featureGrid: {
    justifyContent: 'center',
  },
  featureItem: {
    position: 'relative',
  },
  featureIconContainer: {
    height: 96,
    margin: 'auto',
    width: 96,
  },
  featureIconBg: {
    height: '140%',
    left: '-20%',
    opacity: 0,
    position: 'absolute',
    top: '0%',
    width: '140%',
    zIndex: -1,
  },
  featureIcon: {
    width: '100%',
  },
  featureTitle: {
    margin: '20px auto',
    lineHeight: 1,
    whiteSpace: 'nowrap',
  },
  featureDescription: {
    marginTop: 20,
  },
  animatedBlob: {
    fill: theme.palette.secondary.dark,
    left: '5%',
    opacity: '0.5',
    mixBlendMode: 'multiply',
    position: 'absolute',
    top: '5%',
    width: '90%',
  },
  description: {
    marginTop: 20,
  },
}));

// CONTENTFUL CMS  INITIAL SET UP BELOW       // v FEATURES v
const myFeatures = ["7LYHglxrDEqHwa23xPbrEo", // Multiplatform
                    "7g5q14hzPYzLhwos7IVik1", //User-Friendly
                    "5NjaWIMhQlair2k0dVDsXC", // Composable
                    "3aV4XbTikwD2bIdKAsmShv", // Scalable
                    "1i96gjazTJVQVxMdbDbfNm", // Upgradable
                    "d4he1KTXgSQLg6BuaY6MA", // Secure
                  ]

// TODO : Iterate through myFeatures, and perform all the queries respectively
// make sure to store the values on a new variable.
// Consider turning the myFeatures list into a dict                  



var newFeatures: webContent[] = []
var currentFetch: Promise<any> | webContent = {
  "title": "Welcome to the Polywrap Hub",
  "subtitle": "Our flagship dApp",
  "description": "A developer-centric platform where you can discover, deploy, and interact with any Polywrapper in the ecosystem. We are paving the road, expecting endless collaboration and curation possibilities. Test and Integrate web3 protocols quickly on the browser with our GraphQL Playground, and publish your packages to decentralised hosting. Soon you'll be able to explore an endless ocean of wrappers, by querying tags like `multisig`, `defi`, or `vesting`. A more semantic web3 that's easy to compose together!",
  "callToAction": "Start Coding"
}
;

myFeatures.forEach( async (element) => {
  var cmsQuery = `query { 
    ${element}: webContent(id:"${element}") { 
      title
      supportImage {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      description
   }
  }`;
  console.log("Querying this feature:", cmsQuery);
  currentFetch = ContentfulFetcher(cmsQuery);
  newFeatures.push(await currentFetch);
});

console.log("On the Features component", newFeatures)

// CONTENTFUL CMS INITIAL SET UP ABOVE




const features = [
  {
    slug: 'multi_platform',
    title: 'Multi-Platform',
    description: 'Write your SDK once, use it anywhere. Simply add the Polywrap Client to your user applications.',
  },
  {
    slug: 'user_friendly',
    title: 'User-Friendly',
    description: 'Integrating Web3 is finally as easy as Web2, thanks to GraphQL syntax.',
  },
  {
    slug: 'secure',
    title: 'Secure',
    description: 'Sandboxing ensures your integrations are isolated from your application. Users are safer with Polywrap.',
  },
  {
    slug: 'scalable',
    title: 'Scalable',
    description: 'Keep applications light-weight and efficient, only download what you need, when you need it.',
  },
  {
    slug: 'composable',
    title: 'Composable',
    description: 'Polywrap makes composition and extensions easy. Combine using imports, or extend using standard interfaces.',
  },
  {
    slug: 'upgradable',
    title: 'Upgradable',
    description: 'Optionally upgrade your applications at run-time, no rebuilds required. Choose the level of control that makes sense for your application.',
  },
]

export const Features = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box display='flex' alignItems='center' className={classes.root}>
      <Box className={classes.blurredPoly}>
        <Parallax y={[-90,100]} disabled={window.innerWidth < theme.breakpoints.values.md}>
          <img width="100%" src={`${process.env.PUBLIC_URL}/imgs/polywrapper-hero-blurred.png`} alt='Polywrap' />
        </Parallax>
      </Box>
      <Parallax y={[-5,5]} disabled={window.innerWidth < theme.breakpoints.values.md}>
        <Typography variant='h3' color='textPrimary' align='center'>
          Next-Gen SDKs for Web3
        </Typography>
        <Box className={classes.cell}>
          <Grid container spacing={6} alignItems='flex-start' className={classes.featureGrid}>
            {
              features.map((feature, index) => {
                return (
                <Grid key={feature.slug} xs={12} sm={6} md={4} item className={classes.featureItem}>
                  <Box position='relative'>
                    <Box position='relative' display='flex' alignItems='center' justifyContent='center' className={classes.featureIconContainer}>
                      <img className={classes.featureIconBg} width="100%" src={`${process.env.PUBLIC_URL}/imgs/assets/blob-1.png`} alt='' />
                      <img className={classes.featureIcon} width="100%" src={`${process.env.PUBLIC_URL}/imgs/assets/features/${feature.slug}.png`} alt='' />
                    </Box>
                    <Typography variant='subtitle1' color='textPrimary' align='center' className={classes.featureTitle}>
                      {feature.title}
                    </Typography>
                    <Typography variant='body1' color='textSecondary' align='center' className={classes.featureDescription}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Grid>
              )})
            }
          </Grid>
        </Box>
      </Parallax>
    </Box>
  );
};
