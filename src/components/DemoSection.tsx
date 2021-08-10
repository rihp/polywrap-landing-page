import { Parallax } from 'react-scroll-parallax';
import { Box, Button, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
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
  uniswapDemo: {
    boxShadow: `0 24px 80px rgba(0,0,0,0.25)`,
    borderRadius: 24,
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    transition: 'brightness 0.25s ease-in-out, transform 0.5s ease-in-out',
    width: '100%',
  },
}));


export const DemoSection = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box position='relative' className={classes.root}>
      <Parallax y={[20,-35]} disabled={window.innerWidth < theme.breakpoints.values.md}>
        <Grid container spacing={10} alignItems='flex-start' className={classes.grid}>
          <Grid item xs={12} md={5}>
              <Typography variant='h3' color='textPrimary'>
                We’re Solving the Web Integration Problem
              </Typography>
              <Typography variant='body1' color='textSecondary' className={classes.description}>
                The Web3 Ecosystem is currently building on technical debt, since we are continuously relying on javascript SDKs to interact with virtually all web3 protocols (DeFi, NFTs, DAOs, DEXs) which is driving to create several more dApps which are insecure, not scalable, not composable, and not multi-platform. 
              </Typography>
              <Typography variant='body1' color='textSecondary' className={classes.description}>
                Polywrap makes it possible for applications on any platform or language to read and write to Web3 protocols. Developers can create Wasm-based SDKs to create the APIs called “wrappers”, share them with our community and leverage other wrappers as “composable  libraries” to connect to different protocols.
              </Typography>
            {/* </Parallax> */}
          </Grid>
          <Grid item xs={12} md={7}>
            <Parallax y={[40, -20]} disabled={window.innerWidth < theme.breakpoints.values.md}>
              {/* <IDE /> */}
              <img className={classes.uniswapDemo} width="100%" src={`${process.env.PUBLIC_URL}/imgs/assets/polywrap-uniswap-demo.png`} alt='' />
              <Box marginTop={2}>
                <Button
                  href="https://demo.uniswapv2.polywrap.io/#/swap"
                  target="_blank"
                  rel="noredirect"
                  variant="outlined"
                  color="secondary"
                  endIcon={<KeyboardArrowRightOutlined />}
                >
                  Try the Uniswap Demo
                </Button>
              </Box>
            </Parallax>
          </Grid>
        </Grid>
      </Parallax>
    </Box>
  );
};
