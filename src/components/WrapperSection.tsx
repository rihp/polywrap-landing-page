import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import parse from 'html-react-parser';
import { IDE } from './IDE';
import {wrapperSectionData as data} from '../constants/wrapper-section'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    padding: '50px 20px 100px 20px',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      marginTop: 150,
      minHeight: '60vh',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
  },
  grid: {
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 40,
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
}));


export const WrapperSection = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box position='relative' className={classes.root}>
      <Parallax
        y={[20, -35]}
        disabled={window.innerWidth < theme.breakpoints.values.md}
      >

        { data &&
        data.map((wrapper, index: number) => {
            return wrapper.featured &&
              <Grid
                container
                spacing={10}
                alignItems='flex-start'
                className={classes.grid}
              >
                <Grid item xs={12} md={6}>
                  <IDE queriesData={wrapper.queries} />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography
                    variant='h3'
                    color='textPrimary'
                    className={classes.title}
                  >
                    { wrapper.wrapperName }
                  </Typography>
                  <Typography
                    variant='body1'
                    color='textSecondary'
                    className={classes.description}
                  >
                    { parse(wrapper.description) }
                  </Typography>
                </Grid>
              </Grid>
          }
        )}

      </Parallax>
    </Box>
  );
};
