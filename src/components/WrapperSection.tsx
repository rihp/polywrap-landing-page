import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import parse from 'html-react-parser';
import { IDE } from './IDE';
import {wrapperSectionData as data} from '../constants/wrapper-section'

// WIP: Try to modularize the CMS query
import {useState, useEffect} from 'react';
import {  webContent, wrapper, ContentfulFetcher } from './QueryModule';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    padding: '50px 20px 100px 20px',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      marginTop: 150,
      minHeight: '60vh',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
    minHeight: 650, // Edit this for Desktop & Mobile views when changing the section location or adding/changing content.
  },
  grid: {
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 40,
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
}));


// CONTENTFUL CMS INITIAL SET UP BELOW
const cmsQuery = `query { 
  featuredWrapper(id:"1Lo0Gmtk7BI5v0bNmzPRhb") { 
    wrapperName
    docsLink
    featured
    thirdParty
    description
 		queriesCollection {
      items {
        filename
        featured
        query
        comment
        source
      }
    }  
	}
}`;
// CONTENTFUL CMS INITIAL SET UP ABOVE

export const WrapperSection = () => {
  const theme = useTheme();
  const classes = useStyles();

  const featuredWrappers = data.map((wrapper, i) => wrapper.featured ? i : -1).filter(index => index !== -1);
  const [transitionID, setTransitionID] = useState<number>(featuredWrappers[0])

  useEffect(() => {

    let rotationInterval = setInterval(() => {

      if (transitionID === featuredWrappers.slice(-1)[0] ) {
        setTransitionID(featuredWrappers[0])
      }
      else {
        setTransitionID(transitionID => featuredWrappers[transitionID+1])
      }

    }, 10000) // Timer for switching between wrappers (10000 -> 10 seconds)

    return () => {
      clearInterval(rotationInterval);
    }
  }, [transitionID])



  // CONTENTFUL CMS INTEGRATION BELOW
  const [someContent, setSomeContent] = useState<wrapper> (
    {
      "wrapperName": "MockedData",
      "featured": false,
      "thirdParty": false,
      "description": "Read the Docs",
      "queriesCollection": {
        "items": [
          {
            "filename": "calcTradeOutput",
            "featured": true,
            "query": "client.invoke({\n  uri: \"wrap://ens/v3.uniswap.polywrap.eth\",\n  module: \"query\",\n  method: \"bestTradeExactIn\",\n  input: {\n    pools,\n    amountIn,\n    tokenOut,\n    ...\n  }\n});",
            "comment": "// Compute Trade Outputs w/ Uniswap V3",
            "source": "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/query/schema.graphql#L470-L479"
          },
          {
            "filename": "executeSwap",
            "featured": true,
            "query": "client.invoke({\n  uri: \"wrap://ens/v3.uniswap.polywrap.eth\",\n  module: \"mutation\",\n  method: \"swap\",\n  input: {\n    inToken,\n    outToken,\n    amount,\n    ...\n  }\n});",
            "comment": "// Execute Token Swaps w/ Uniswap V3",
            "source": "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/mutation/schema.graphql#L46-L61"
          }
        ]
      },
      "docsLink":""

  });
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    /////////// CMS content fetching: Callback version
    setIsLoading(true);

    ContentfulFetcher(cmsQuery).then(
      (response) => {
        //On success        
        const content: wrapper = response.data.featuredWrapper;
        console.log("On the arrow func", content)

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
  // const data = someContent
  // console.log("someContent: ", data)
  // CONTENTFUL CMS INTEGREATION ABOVE



  return (
    <Box position='relative' className={classes.root}>
      <Parallax
        y={[20, -35]}
        disabled={window.innerWidth < theme.breakpoints.values.md}
      >

      { data &&
        data.map((wrapper, index: number) =>

            <Grid
              key={index}
              container
              spacing={10}
              alignItems='flex-start'
              className={classes.grid}
              style={{
                opacity: transitionID === index ? '100%': '0%',
                // visibility: transitionID === index ? 'initial': 'hidden',
                zIndex : transitionID === index ? 99: -1,
                transition: "all 1s ease-in",
                position: 'absolute'
              }}
            >
              <Grid item xs={12} md={6}>
                <IDE queriesData={wrapper.queries} />
              </Grid>

              <Grid item xs={12} md={6} >
                <Typography
                  variant='h3'
                  color='textPrimary'
                  className={classes.title}
                >
                  { wrapper.wrapperName }
                </Typography>
                <Typography
                  variant='body1'
                  color='textSecondary'
                  className={classes.description}
                >
                  { parse(wrapper.description) }
                </Typography>
              </Grid>
            </Grid>

        )}

      </Parallax>
    </Box>
  );
};
