import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import { IDE } from '../components/IDE'

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 2,
  },
  grid: {
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    position: 'relative',
  },
  description: {
    marginTop: 20,
  },
}));


export const Demo = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box position='relative' className={classes.root}>
      <Parallax y={[0, -40]} disabled={window.innerWidth < theme.breakpoints.values.md}>
        <Grid container spacing={10} alignItems='flex-start' className={classes.grid}>
          <Grid item xs={12} md={5}>
              <Typography variant='h3' color='textPrimary'>
                Hypercomposability
                <br/>
                Has Arrived
              </Typography>
              <Typography variant='body1' color='textSecondary' className={classes.description}>
                Polywrap solves the integration problem by making Web3 protocols as universally accessible as traditional web services. Polywrap-powered apps download lightweight WebAssembly (wasm) modules from IPFS at runtime, and execute GraphQL requests directly inside the app.
                <br/>
                <br/>
                These language-agnostic wasm modules enable developers to more easily compose and extend protocols while drastically improving dApp performance and security compared to Javascript SDKs.
              </Typography>
            {/* </Parallax> */}
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Parallax y={[20, -70]} disabled={window.innerWidth < theme.breakpoints.values.md}> */}
              <IDE />
          </Grid>
        </Grid>
      </Parallax>
    </Box>
  );
};
