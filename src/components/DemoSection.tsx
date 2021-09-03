import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      marginTop: 150,
      minHeight: '60vh',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw'
    }
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
  polywrapIllustration: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxHeight: '60vh',
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '30vh',
    },
  },
}));


export const DemoSection = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box position='relative' className={classes.root}>
      <Parallax y={[20,-35]} disabled={window.innerWidth < theme.breakpoints.values.md}>
        <Grid container spacing={10} alignItems='flex-start' className={classes.grid}>
          <Grid item xs={12} md={6}>
            <img className={classes.polywrapIllustration} src={process.env.PUBLIC_URL + '/imgs/wrappers-white-wave.svg'} alt='Polywrap - wrapper white wave' />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h3' color='textPrimary' className={classes.title}>
              Solving The Web3 Integration Problem
            </Typography>
            <Typography variant='body1' color='textSecondary' className={classes.description}>
              Web3 relies on SDKs to integrate virtually every type of protocol: DeFi, NFTs, DAOs, P2P Networks
            </Typography>
            <Typography variant='body1' color='textSecondary' className={classes.description}>
              Due to traditional SDKs’ short-comings, Web3’s technical debt is growing day by day. <u>Traditional SDKs are:</u><br/><b>Insecure, Bloated, Incompatible, and Language-Specific</b>
            </Typography>
            <Typography variant='body1' color='textSecondary' className={classes.description}>
              Polywrap is here to fix this. <u>Polywrap SDKs are:</u><br/><b>Secure, Scalable, Composable, and Language-Agnostic</b>
            </Typography>
          </Grid>
        </Grid>
      </Parallax>
    </Box>
  );
};
