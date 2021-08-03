
import { Carousel } from '../../components/Carousel';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero } from '../../components/Hero';
import { Demo } from '../../components/Demo';
import { Features } from '../../components/Features';
import { Partners } from '../../components/Partners';
import { HubCallout } from '../../components/HubCallout';
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1400px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
    }
  },
}))

export const Home = () => {
  ReactGA.pageview('home');

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Hero />
      <Demo />
      <Features />
      <HubCallout />
      <Partners />
      <Carousel/>
    </Box>
  );
};
