import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    minHeight: '80vh',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
      minHeight: 'unset',
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
  description: {
    marginTop: 20,
  },
  polywrapIllustration: {
    width: '100%',
  },
}));


export const WhatsPolywrap = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box position='relative' className={classes.root}>
      <Parallax y={[20,-35]} disabled={window.innerWidth < theme.breakpoints.values.md}>
        <Grid container spacing={10} alignItems='center' className={classes.grid}>
          <Grid item xs={12} md={5}>
            <img className={classes.polywrapIllustration} src={process.env.PUBLIC_URL + '/imgs/wrappers-white-wave.svg'} alt='Polywrap - wrapper white wave' />
          </Grid>
          <Grid item xs={12} md={7}>
              <Typography variant='h3' color='textPrimary'>
              Hypercomposability Has Arrived
              </Typography>
              <Typography variant='body1' color='textSecondary' className={classes.description}>
                Polywrap solves the integration problem by making Web3 protocols as universally accessible as traditional web services. Polywrap-powered apps download lightweight WebAssembly (wasm) modules from IPFS at runtime, and execute GraphQL requests directly inside the app.
              </Typography>
              <Typography variant='body1' color='textSecondary' className={classes.description}>
                These language-agnostic wasm modules enable developers to more easily compose and extend protocols while drastically improving dApp performance and security compared to Javascript SDKs.
              </Typography>
            {/* </Parallax> */}
          </Grid>
        </Grid>
      </Parallax>
    </Box>
  );
};
