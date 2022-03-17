import { Box, Container, Link, makeStyles, Typography } from '@material-ui/core';
import { TESTIMONIALS, Testimonial } from '../constants/launch-partners';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { filters } from '../theme';

// WIP: Try to modularize the CMS query
import {useState, useEffect} from 'react';
import { launchPartner, ContentfulFetcher } from './QueryModule';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    minHeight: '60vh',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 140,
    position: 'relative',
    padding: '0 20px',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
  title: {
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    }
  },
  testimonialText: {
    display: 'block',
    margin: 'auto',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    }
  },
  testimonial: {
    padding: theme.spacing(8),
    paddingBottom: theme.spacing(0),
    position: 'relative',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '& h6': {
        fontSize: 20,
      },
    },
  },
  testimonialQuote: {
    color: theme.palette.text.secondary,
    fontSize: 80,
    opacity: 0.2,
    transform: 'translate(-16px, 12px)',
  },
  logo: {
    filter: filters.textSecondary,
    height: 50,
    minWidth: 120,
    objectFit: 'contain',
    '&:hover': {
      filter: filters.secondary,
    }
  },
}));


// CONTENTFUL CMS  INITIAL SET UP BELOW
const cmsQuery = `query { 
  launchPartners(id:"4NuUSkl1u6JPVA7QNiM4iS") { 
   name 
   link
   testimonial
   persona
   futurePromise
 } 
}`;
const data = ContentfulFetcher(cmsQuery)
console.log("On the Testimonials component", data)
// CONTENTFUL CMS INITIAL SET UP ABOVE


export const Testimonials = () => {
  const classes = useStyles();

  // CONTENTFUL CMS INTEGRATION BELOW
  const [gelatoContent, setGelatoContent] = useState<launchPartner> (
    {
      "name": "Gelato Network",
      "link": "https://gelato.network",
      "testimonial": "With the help of Polywrap, Gelato enables every developer to easily automate the execution of transactions on networks like Ethereum, giving them the ability to provide arbitrary instructions to a decentralized network of bots with a single wrapper call",
      "persona": "Hilmar X, Legendary Member",
      "futurePromise": "Gelato and other node networks will leverage Polywrap to have sdk’s that dynamically update upon governance decisions instead of needing to contact all the operators to restart their nodes and install the new package."
    });
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    /////////// CMS content fetching: Callback version
    setIsLoading(true);

    ContentfulFetcher(cmsQuery).then(
      (response) => {
        //On success        
        const content: launchPartner = response.data.webContent;
        //console.log("On the arrow func", content)

        setGelatoContent(content);
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
    <Box className={classes.root}>
      <Typography className={classes.title} variant='h3' align='center' color='textPrimary'>
        Validation
      </Typography>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          marginLeft={-8}
          marginRight={-8}
          position="relative"
          zIndex={2}
        >
          {TESTIMONIALS.map(
            (testimonial: Testimonial, index: number) =>
              <Box className={classes.testimonial} key={`testimonial-${index}`}>
                <Box>
                  <FormatQuoteIcon className={classes.testimonialQuote} />
                  <Typography variant='subtitle1' style={{ fontSize: 20 }} color='textSecondary'>
                    {testimonial.description}
                  </Typography>
                  <Box marginTop={2}>
                    <Typography variant='body1' color='textSecondary'>
                      {testimonial.persona}
                    </Typography>
                  </Box>
                  <Box marginTop={2}>
                    <Link href={testimonial.url} target='_blank'>
                      <img src={testimonial.logo} className={classes.logo} alt=""/>
                    </Link>
                  </Box>
                </Box>
              </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};