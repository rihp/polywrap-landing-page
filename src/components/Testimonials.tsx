import { Box, Container, Link, makeStyles, Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import { TESTIMONIALS, Testimonial } from '../constants/launch-partners';
import { filters } from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    minHeight: '60vh',
    justifyContent: 'center',
    marginBottom: 100,
    position: 'relative',
    padding: '0 20px',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
  testimonial: {
    padding: theme.spacing(8),
    width: '50%',
  },
  logo: {
    filter: filters.textSecondary,
    height: 50,
    minWidth: 120,
    objectFit: 'contain',
    '&:hover': {
      filter: filters.secondary,
    }
  },
}));

export const Testimonials = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="center"
          marginLeft={-8}
          marginRight={-8}
          position="relative"
          zIndex={2}
        >
          {TESTIMONIALS.map(
            (testimonial: Testimonial, index: number) =>
              <Box className={classes.testimonial} key={`testimonial-${index}`}>
                <Parallax y={[20*(index+3),-30]}>
                  <Box>
                    <Typography variant='subtitle1' color='textSecondary'>
                      {testimonial.description}
                    </Typography>
                    <Box marginTop={2}>
                      <Typography variant='body1' color='textSecondary'>
                        {testimonial.persona}
                      </Typography>
                    </Box>
                    <Box marginTop={2}>
                      <Link href={testimonial.url} target='_blank'>
                        <img src={testimonial.logo} className={classes.logo} alt=""/>
                      </Link>
                    </Box>
                  </Box>
              </Parallax>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};