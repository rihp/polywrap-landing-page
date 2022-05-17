//import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Parallax } from 'react-scroll-parallax';
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import { polywrapPalette } from '../theme';
// TODO: should we deprecate the verbiage folder?
//import { CTA } from '../constants/verbiage';
import { webContent, ContentfulFetcher } from './QueryModule';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
      padding: '0',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
  },
  heroPolywrapper: {
    display: 'flex',
    marginLeft: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
    height: 'auto',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      aspectRatio: '3/2',
      maxWidth: '60vw',
      margin: '80px auto 20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      marginTop: 100,
    },
  },
  heroTitle: {
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
  heroBody: {
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 16,
    },
  },
  heroSignUpFlex: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  heroTextField: {
    borderRadius: '99px 16px 16px 99px',
    maxWidth: 400,
    width: '100%',
    '& .MuiInput-input': {
      height: 38,
    },
  },
  heroButton: {
    borderRadius: 999,
    fontSize: 18,
    padding: '9px 28px',
    marginTop: 40,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: 12,
      fontSize: 14,
    },
  },
  heroSignupSuccess: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 8,
    boxShadow: `0 8px 16px ${polywrapPalette.secondary[900]}88`,
    fontWeight: 700,
    padding: 8,
    width: '100%',
  },
  technicalPreview: {
    color: polywrapPalette.secondary.end,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    paddingLeft: 2, // Optical alignment with 'A' below
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 12,
    },
  },
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(5%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
      transitionTimingFunction: 'ease-in',
    },
    '50%': {
      transform: 'translateY(-3%)',
      transitionTimingFunction: 'ease-out',
    },
  },
  heroContent: {
    animation: `$fadeInUp 1s 1s forwards ease-in`,
    opacity: 0,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  heroIllustration: {
    animation: `$float 6s infinite`,
    [theme.breakpoints.down('sm')]: {
      order: -1,
    },
  },
  errorText: {
    color: '#f44336',
  },
}));

// CONTENTFUL CMS  INITIAL SET UP BELOW
const cmsQuery = `query { 
  webContent(id:"6DWrAojZUdPcTSDXGip5PN") { 
   title 
   subtitle
   description
   callToAction
 } 
}`;

// CONTENTFUL CMS  INITIAL SET UP ABOVE

export const Hero = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  // This was used for pagination
  //const history = useHistory();
  //const navigateToPage = (route: string) => history.push(route);

  // CONTENTFUL CMS INTEGRATION BELOW
  const [someContent, setSomeContent] = useState<webContent> (
    {
    "title": "Use Web3 Anywhere.",
    "subtitle": "PRE-ALPHA",
    "description": "Polywrap is a development platform that enables easy integration of Web3 protocols into any application. It makes it possible for software on any device, written in any language, to read and write data to Web3 protocols",
    "callToAction": "JOIN OUR DISCORD"
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
    <Grid
      className={classes.root}
      container
      justify='center'
      alignItems='center'
      spacing={6}
      direction={matches ? 'row-reverse' : 'row'}
    >
      <Grid item sm={12} md={6}>
        <Parallax
          y={[60, -60]}
          disabled={window.innerWidth < theme.breakpoints.values.md}
        >
          <Box className={classes.heroContent}>
            <Typography
              variant='subtitle2'
              color='secondary'
              className={classes.technicalPreview}
            >
             {someContent.subtitle}
            </Typography>
            <Typography
              className={classes.heroTitle}
              color='textPrimary'
              variant='h1'
            >
             {someContent.title}
            </Typography>
            <Typography
              className={classes.heroBody}
              color='textSecondary'
              variant='body1'
            >

            {someContent.description}

            </Typography>
            <Button
              className={classes.heroButton}
              color='primary'
              href='https://discord.gg/bGsqQrNhqd'
              target="_blank"
              rel="noredirect"
              endIcon={<KeyboardArrowRightOutlined />}
              type='submit'
              variant='contained'
            >
             {someContent.callToAction}
            </Button>
          </Box>
        </Parallax>
      </Grid>
      <Grid className={classes.heroIllustration} item sm={12} md={6}>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          width='100%'
          height='100%'
        >
          <Parallax
            y={[80, -80]}
            disabled={window.innerWidth < theme.breakpoints.values.md}
          >
            {/* // TODO: Pass the supportImage to the <img> div below */}
            <img
              className={classes.heroPolywrapper}
              src={process.env.PUBLIC_URL + '/imgs/polywrapper-hero.png'}
              alt='Polywrap Logo'
            />
          </Parallax>
        </Box>
      </Grid>
    </Grid>
  );
};
