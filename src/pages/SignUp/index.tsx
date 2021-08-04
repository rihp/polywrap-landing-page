import { Parallax } from 'react-scroll-parallax';
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import { polywrapPalette } from '../../theme';
import { CTA } from '../../constants/verbiage';
import { useState } from 'react';
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 'calc(100vh - 80px)',
    margin: 'auto',
    padding: '40px 64px 0',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
      padding: '0'
    }
  },
  technicalPreview: {
    color: polywrapPalette.secondary.end,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    paddingLeft: 2, // Optical alignment with 'A' below
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
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
      margin: '80px auto 20px',
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
    fontSize: 16,
    lineHeight: 1.75,
  },
  heroSignUpFlex: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    }
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
    borderRadius: '16px 99px 99px 16px',
    fontSize: 18,
    padding: '9px 28px',
    marginLeft: 20,
    whiteSpace: 'nowrap',
  },
  heroSignupSuccess: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 8,
    boxShadow: `0 8px 16px ${polywrapPalette.secondary[900]}88`,
    fontWeight: 700,
    padding: 8,
    width: '100%',
  },
  errorText: {
    color: '#f44336'
  },
  polywrapLink: {
    textDecoration: 'underline',
    fontWeight: 700,
    marginLeft: 4,
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
      transitionTimingFunction: 'ease-in',
    },
    '50%': {
      transform: 'translateY(-3%)',
      transitionTimingFunction: 'ease-out',
    }
  },
  heroIllustration: {
    animation: `$float 6s infinite`,
    [theme.breakpoints.down('sm')]: {
      order: -1
    }
  },
}))

export const SignUp = () => {

  const [signupSuccess, setSignupSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const onSubmit = async () => {
    const re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      setEmailError('Invalid email address...');
      return;
    } else {
      setEmailError('');
    }

    let uri = 'https://tech.us17.list-manage.com/subscribe/post-json?u=7515d8292da68c0a33f4c7e7e&amp;id=48ff512e96&c=jQuery34108557665382199082_1607465109249&b_7515d8292da68c0a33f4c7e7e_48ff512e96=&_=1607465109250';
    uri = uri + `&Email=${email}&EMAIL=${email}`;
    uri = encodeURI(uri);

    try {
      await fetch(uri, {
        mode: 'no-cors'
      });

      ReactGA.event({
        category: 'Button-hero',
        action: CTA,
        label: 'Early Access'
      });

      setSignupSuccess(true);
    } catch (e) {
      setEmailError(`Sign-up failed... please use the "contract" form above.`);
    }
  }

  const theme = useTheme()
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <>
      <Grid className={classes.root} container justify='center' alignItems='center' direction={matches? 'row-reverse': 'row'}>
        <Grid item sm={12} md={6}>
          <Typography variant='subtitle2' color='secondary' className={classes.technicalPreview}>
            Technical Preview
          </Typography>
          <Typography className={classes.heroTitle} color='textPrimary' variant='h2'>
            Bring Web3 to Life
          </Typography>
          <Typography className={classes.heroBody} color='textSecondary' variant='body1'>
            Access is limited to a small group of testers during the beta release of Polywrap Hub Marketplace.
            <br/>
            Sign up today for your chance to try it out early and help us improve.
          </Typography>
          <form>
            <Box className={classes.heroSignUpFlex} display='flex' alignItems='center' marginTop={4}>
              {!signupSuccess ? (
                <>
                  <TextField
                    className={classes.heroTextField}
                    placeholder='Request Early Access'
                    inputProps={{ style: { textAlign: 'center' } }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    className={classes.heroButton}
                    color='primary'
                    endIcon={<KeyboardArrowRightOutlined />}
                    type='submit'
                    variant='contained'
                    onClick={onSubmit}
                  >
                    {CTA}
                  </Button>
                </>
              ) : (
                <Typography className={classes.heroSignupSuccess} align='center' color='textPrimary'>
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
          <Box marginTop={4}>
            <Typography variant="body2">
              Want to start building right away?
              <Link href="#" className={classes.polywrapLink}>
                Build a Polywrap
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid className={classes.heroIllustration} item sm={12} md={6}>
          <Box display='flex' flexDirection='column' justifyContent='center' width='100%' height='100%'>
            <img className={classes.heroPolywrapper} src={process.env.PUBLIC_URL + '/imgs/polywrapper-hero.svg'} alt='Polywrap Logo' />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
