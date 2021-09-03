import { useHistory } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { Box, Button, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { KeyboardArrowRightOutlined } from '@material-ui/icons';
import { polywrapPalette } from '../theme';
import { CTA } from '../constants/verbiage';

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
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw'
    }
  },
  cell: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.md,
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
  hubWireframe: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  hubWireframeImg: {
    boxShadow: `0 4px 64px ${polywrapPalette.primary.mid}85`,
    borderRadius: 4,
    transformOrigin: 'top left',
    transform: `scale(1.4) translateY(-8px)`,
    [theme.breakpoints.down('sm')]: {
      boxShadow: `0 4px 32px ${polywrapPalette.primary.mid}85`,
      width: '100%',
      transform: 'none',
    },
  },
}));


export const HubCallout = () => {
  const theme = useTheme();
  const history = useHistory();
  const navigateToPage = (route: string) => history.push(route);
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });

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
                Welcome to the Polywrap Hub...
              </Typography>
              <Box marginTop={2}>
                <Typography variant="body1">
                Publish, discover, and interact with any Polywrap SDK. Integrating and interacting with Web3 has never been so easy.
                </Typography>
              </Box>
              <Box marginTop={2}>
                <Button
                  component="button"
                  color='primary'
                  onClick={() => navigateToPage('/signup')}
                  endIcon={<KeyboardArrowRightOutlined />}
                  type='submit'
                  variant='contained'
                >
                  {CTA}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Parallax y={[24, -24]} disabled={isMobile}>
                <Box className={classes.hubWireframe}>
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
