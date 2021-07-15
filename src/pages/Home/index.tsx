
import { Carousel } from "../../components/Carousel";
import { launchPartners } from "../../constants/launch-partners";
import { filters } from "../../theme";
import { Parallax } from 'react-scroll-parallax';
import { ReactComponent as PolywrapSolution } from '../../wrappers-white-wave-transparent.svg';
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { polywrapPalette } from "../../theme";
import { useState } from "react";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1400px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
    }
  },
  bgMembrane: {
    height: 'auto',
    position: 'absolute',
    opacity: 1,
    '& img': {
      width: '100%',
    }
  },
  blurredPoly: {
    position: "relative",
    opacity: "0.25",
    mixBlendMode: "hard-light",
  },
  blurredPoly1: {
    filter: "blur(20px)",
    transform: "scale(2) translate(5%, 35%) rotate(125deg)",
    opacity: "0.25",
  },
  blurredPoly2: {
    filter: "blur(35px)",
    transform: "scale(0.5) rotate(-75deg)",
    opacity: "0.3",
    [theme.breakpoints.between('xs','md')]: {
      left: "44%",
      top: "7%",
      transform: "scale(0.25) rotate(125deg)",
    },
    [theme.breakpoints.down('xs')]: {
      left: "9%",
      top: "5%",
      transform: "scale(0.1) rotate(125deg)",
    }
  },
  blurredPoly3: {
    filter: "blur(50px)",
    transform: "scale(0.25) translate(550%, 300%) rotate(65deg)",
    opacity: "0.4",
  },
  hero: {
    minHeight: "100vh",
    margin: 'auto',
    padding: '0 64px',
    [theme.breakpoints.down('sm')]: {
      minHeight: "unset",
      padding: '0'
    }
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
      margin: '40px auto 20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      marginTop: 100,
    }
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
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
    },
  },
  heroBody: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 16,
    },
  },
  heroSignUpFlex: {
    [theme.breakpoints.down('md')]: {
      justifyContent: "center",
    }
  },
  heroTextField: {
    borderRadius: "99px 16px 16px 99px",
    maxWidth: 400,
    width: "100%",
    "& .MuiInput-input": {
      height: 38,
    },
  },
  heroButton: {
    borderRadius: "16px 99px 99px 16px",
    fontSize: 18,
    padding: "9px 28px",
    marginLeft: 20,
    whiteSpace: "nowrap",
  },
  heroSignupSuccess: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 8,
    boxShadow: `0 8px 16px ${polywrapPalette.secondary[900]}88`,
    fontWeight: 700,
    padding: 8,
    width: "100%",
  },
  technicalPreview: {
    color: polywrapPalette.secondary.end,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    paddingLeft: 2, // Optical alignment with "A" below
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    }
  },
  "@keyframes float": {
    "0%, 100%": {
      transform: "translateY(0)",
      transitionTimingFunction: "ease-in",
    },
    "50%": {
      transform: "translateY(-3%)",
      transitionTimingFunction: "ease-out",
    }
  },
  heroIllustration: {
    animation: `$float 6s infinite`,
    [theme.breakpoints.down('sm')]: {
      order: -1
    }
  },
  launchPartnersText: {
    display: 'block',
    margin: 'auto',
    marginTop: 80,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 900,
  
    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    }
  },
  logo: {
    height: "auto",
    width: "100%",
    filter: filters.textSecondary,
  
    '&:hover': {
      filter: filters.secondary,
    }
  },
  logoContainer: {
    display: "flex",
    padding: 40,
    maxHeight: 120,
    flexDirection: "column",
    justifyContent: "center",
  },
  innerLogoContainer: {
    maxWidth: 120,
    width: "12vw",
    height: "12vw",
    maxHeight: 120,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
      width: "18vw",
      maxHeight: 160,
      maxWidth: 160,
    }
  },
  launchPartnersContainer: {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: '1200px',
    margin: 'auto'
  },
  carouselContainer: {
    marginTop: 80
  },
  betterContainer: {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: '1000px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  betterTitle: {
    fontWeight: 900,
    marginBottom: 20,
    marginTop: '120px',
    fontSize: 45,
    textAlign: 'center',
  
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      margin: '60px auto 0',
    },
  },
  betterInfographic: {
    display: 'flex',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
    width: '45vw',
    maxWidth: '50%',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '80vw',
      height: 'auto',
      maxWidth: 'unset',
      marginBottom: 10
    }
  },
  betterBody: {
    paddingLeft: '20px',
    width: '45vw',
    maxWidth: '50%',
    fontSize: 18,
    marginBottom: 'auto',
    marginTop: 'auto',
    [theme.breakpoints.down('md')]: {
      lineHeight: 1.5
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 16,
      margin: 'auto',
      width: '100%',
      padding: 0,
      maxWidth: 'unset',
      marginTop: 10,
      marginBottom: 10
    }
  },
  becomePartnerContainer: {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: '1200px',
    margin: '30px auto 0'
  },
  becomePartnerButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  errorText: {
    color: '#f44336'
  },
}))

const parallaxStyles = {
  width: '100vw',
  height: '100vh',
  'top': 0,
  left: 0,
  position: 'absolute',
};

export const Home = () => {

  ReactGA.pageview('home');

  const [signupSuccess, setSignupSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const onSubmit = async () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      setEmailError("Invalid email address...");
      return;
    } else {
      setEmailError("");
    }

    let uri = "https://tech.us17.list-manage.com/subscribe/post-json?u=7515d8292da68c0a33f4c7e7e&amp;id=48ff512e96&c=jQuery34108557665382199082_1607465109249&b_7515d8292da68c0a33f4c7e7e_48ff512e96=&_=1607465109250";
    uri = uri + `&Email=${email}&EMAIL=${email}`;
    uri = encodeURI(uri);

    try {
      await fetch(uri, {
        mode: 'no-cors'
      });

      ReactGA.event({
        category: 'Button-hero',
        action: 'sign up',
        label: 'Early Access'
      });

      setSignupSuccess(true);
    } catch (e) {
      setEmailError('Sign-up failed... please use the "contract" form above.');
    }
  }

  const theme = useTheme()
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const membranes = [
    { top: '-144vh', width: '120%'},
    { top: '104vh', width: '100%'},
    { top: '-72vh', width: '120%'},
    { top: '-128vh', width: '140%'},
    { top: '64vh', width: '120%'},
    { top: '144vh', width: '100%'},
  ]

  return (
    <>
    <Box position="absolute" width="100vw" height="100%" overflow="hidden" left="0" zIndex="0">
      {membranes.map((membrane, i) => {
        return (
          <div key={`membrane-${i}`}>
            {i === 4 && (
              <Box display="flex">
                <img className={`${classes.blurredPoly} ${classes.blurredPoly1}`} src={`${process.env.PUBLIC_URL}/imgs/polywrapper-hero.svg`} alt="Polywrap" />
                <Parallax y={[0, -50]} styleOuter={parallaxStyles} styleInner={{"mixBlendMode": "hard-light"}}>
                  <img className={`${classes.blurredPoly} ${classes.blurredPoly2}`} src={`${process.env.PUBLIC_URL}/imgs/polywrapper-hero.svg`} alt="Polywrap" />
                </Parallax>
                <Parallax y={[-25, 25]} styleOuter={parallaxStyles}>
                  <img className={`${classes.blurredPoly} ${classes.blurredPoly3}`} src={`${process.env.PUBLIC_URL}/imgs/polywrapper-hero.svg`} alt="Polywrap" />
                </Parallax>
              </Box>
            )}
            <Box top={membrane.top} width={membrane.width} className={classes.bgMembrane}>
              <img src={`${process.env.PUBLIC_URL}/imgs/assets/bg/bg-membrane-${i % 2 === 0 ? 1 : 2}.svg`} alt="" />
            </Box>
          </div>
        )
      })}
    </Box>
    <Box className={classes.root}>
      <Grid className={classes.hero} container justify="center" alignItems="center" direction={matches? 'row-reverse': 'row'}>
        <Grid item sm={12} md={6}>
          <Parallax y={[60, -60]} disabled={window.innerWidth < theme.breakpoints.values.md}>
            <Typography variant="subtitle2" color="secondary" className={classes.technicalPreview}>
              Technical Preview
            </Typography>
            <Typography className={classes.heroTitle} color="textPrimary" variant="h1">
              Any Protocol.
              <br/>
              Any Language.
            </Typography>
            <Typography className={classes.heroBody} color="textSecondary" variant="subtitle1">
              Polywrap makes it easy to interact with any web3 protocol from any programming language.
            </Typography>
            <form>
              <Box className={classes.heroSignUpFlex} display="flex" alignItems="center" marginTop={4}>
                {!signupSuccess ? (
                  <>
                    <TextField
                      className={classes.heroTextField}
                      placeholder="Request Early Access"
                      inputProps={{ style: { textAlign: "center" } }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      className={classes.heroButton}
                      color="primary"
                      type="submit"
                      variant="contained"
                      onClick={onSubmit}
                    >
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <Typography className={classes.heroSignupSuccess} align="center" color="textPrimary">
                    Thank you for signing up {email}! More details coming soon.
                  </Typography>
                )}
              </Box>
              {emailError && (
                <Typography className={classes.errorText}>
                {emailError}
                </Typography>
              )}
            </form>
          </Parallax>
        </Grid>
        <Grid className={classes.heroIllustration} item sm={12} md={6}>
          <Box display='flex' flexDirection='column' justifyContent='center' width='100%' height='100%'>
            <Parallax y={[80, -80]} disabled={window.innerWidth < theme.breakpoints.values.md}>
              <img className={classes.heroPolywrapper} src={process.env.PUBLIC_URL + "/imgs/polywrapper-hero.svg"} alt="Polywrap Logo" />
            </Parallax>
          </Box>
        </Grid>
      </Grid>
      <Typography className={classes.launchPartnersText} variant='h3' color='textPrimary'>
        Launch Partners
      </Typography>
      <Grid className={classes.launchPartnersContainer} container justify='center'>
        {
          launchPartners.map(({logo, url}) => {
            return (
              <Grid  item key={url}>
                <Link className={classes.logoContainer} href={url} target="_blank" onClick={() => {
                  ReactGA.event({
                    category: 'Launch Partners',
                    action: `goto ${url}`,
                    label: 'Early Access'
                  });
                }}>
                  <Box className={classes.innerLogoContainer}>
                    <img className={classes.logo} src={logo} alt={url} />
                  </Box>
                </Link>
              </Grid>
            )
          })
        }
      </Grid>
      <Grid className={classes.becomePartnerContainer} container justify="center">
        <Button className={classes.becomePartnerButton} color="secondary" variant="outlined" href="https://airtable.com/shra8gDgo8EgrRT6c">
        Become a Partner
        </Button>
      </Grid>
      <Typography className={classes.betterTitle} color="textPrimary" variant="h1">
        Hypercomposability Has Arrived
      </Typography>
      <Box className={classes.betterContainer}>
        <Box className={classes.betterInfographic}>
          <PolywrapSolution height={"90%"} />
        </Box>
        <Typography className={classes.betterBody}color="textSecondary" variant="subtitle1">
          Polywrap solves the integration problem by making Web3 protocols as universally accessible as traditional web services. Polywrap-powered apps download lightweight WebAssembly (wasm) modules from IPFS at runtime, and execute GraphQL requests directly inside the app.
          <br/>
          <br/>
          These language-agnostic wasm modules enable developers to more easily compose and extend protocols while drastically improving dApp performance and security compared to Javascript SDKs.
        </Typography>
      </Box>
      <Box className={classes.carouselContainer}>
        <Carousel/>
      </Box>
    </Box>
    </>
  );
};
