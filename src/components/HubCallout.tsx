import { Parallax } from 'react-scroll-parallax';
import { Box, Button, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { KeyboardArrowRightOutlined } from '@material-ui/icons';
import { polywrapPalette } from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80vh',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      marginTop: 80,
      minHeight: 'unset',
    },
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
    backgroundColor: polywrapPalette.secondary[800],
    borderRadius: 8,
    boxShadow: `0 24px 80px rgba(0,0,0,0.25)`,
    padding: 48,
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
    boxShadow: `0 4px 64px ${polywrapPalette.primary.mid}4a`,
    borderRadius: 4,
    transformOrigin: 'top left',
    transform: `scale(1.4) translateY(-8px)`,
    [theme.breakpoints.down('sm')]: {
      boxShadow: `0 4px 32px ${polywrapPalette.primary.mid}4a`,
      width: '100%',
      transform: 'none',
    },
  },
}));


export const HubCallout = () => {
  const theme = useTheme();
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
                Welcome to the Polywrap Hub.
              </Typography>
              <Box marginTop={2}>
                <Typography variant="body1">
                Where you can discover, deploy and interact. Our own factory was born to create APIs within our community and share them as wrappers. Protocol Devs can post their wrappers, and App Devs can browse existing wrappers.
                </Typography>
              </Box>
              <Box marginTop={2}>
                <Button
                  // className={classes.heroButton}
                  component="button"
                  color='primary'
                  href="/signup"
                  endIcon={<KeyboardArrowRightOutlined />}
                  type='submit'
                  variant='contained'
                >
                  Try the Beta
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Parallax y={[24, -12]} disabled={isMobile}>
                <Box className={classes.hubWireframe}>
                  <img className={classes.hubWireframeImg} src={process.env.PUBLIC_URL + '/imgs/assets/polywrap-hub-wireframe.png'} alt='Polywrap Hub'/>
                </Box>
              </Parallax>
            </Grid>
          </Grid>
        </Box>
        {/* <Parallax y={[-20, 20]} disabled={window.innerWidth < theme.breakpoints.values.md}>
        </Parallax> */}
      </Box>
    </Box>
  );
};
