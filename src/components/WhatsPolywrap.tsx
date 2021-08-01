

import { ReactComponent as PolywrapSolution } from '../wrappers-white-wave-transparent.svg';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}))

export const WhatsPolywrap = () => {
  const classes = useStyles();

  return (
    <section id='what-is-polywrap'>
      <Typography className={classes.betterTitle} color='textPrimary' variant='h1'>
        Hypercomposability Has Arrived
      </Typography>
      <Box className={classes.betterContainer}>
        <Box className={classes.betterInfographic}>
          <PolywrapSolution height={'90%'} />
        </Box>
        <Typography className={classes.betterBody} color='textSecondary' variant='body1'>
          Polywrap solves the integration problem by making Web3 protocols as universally accessible as traditional web services. Polywrap-powered apps download lightweight WebAssembly (wasm) modules from IPFS at runtime, and execute GraphQL requests directly inside the app.
          <br/>
          <br/>
          These language-agnostic wasm modules enable developers to more easily compose and extend protocols while drastically improving dApp performance and security compared to Javascript SDKs.
        </Typography>
      </Box>
    </section>
  );
};
