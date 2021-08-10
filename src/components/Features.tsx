import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    marginBottom: 100,
    position: 'relative',
    padding: '0 20px',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
  blurredPoly: {
    right: '-10%',
    opacity: '0.2',
    position: 'absolute',
    top: '-30%',
    width: '40vw',
    zIndex: 0,
  },
  cell: {
    margin: '64px auto 0',
    maxWidth: theme.breakpoints.values.md,
    position: 'relative',
  },
  featureGrid: {
    justifyContent: 'center',
  },
  featureItem: {
    position: 'relative',
  },
  featureIconContainer: {
    height: 96,
    margin: 'auto',
    width: 96,
  },
  featureIconBg: {
    height: '140%',
    left: '-20%',
    opacity: 0,
    position: 'absolute',
    top: '0%',
    width: '140%',
    zIndex: -1,
  },
  featureIcon: {
    width: '100%',
  },
  featureTitle: {
    margin: '20px auto',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '60%',
    },
  },
  featureDescription: {
    marginTop: 20,
  },
  animatedBlob: {
    fill: theme.palette.secondary.dark,
    left: '5%',
    opacity: '0.5',
    mixBlendMode: 'multiply',
    position: 'absolute',
    top: '5%',
    width: '90%',
  },
  description: {
    marginTop: 20,
  },
}));

const features = [
  {
    slug: 'multi_platform',
    title: 'Multi-Platform',
    description: 'Write your SDK once. Use it everywhere and with any supported client language.',
  },
  {
    slug: 'user_friendly',
    title: 'User-Friendly',
    description: 'The ease of web2 is finally available in web3, thanks to GraphQL syntax.',
  },
  {
    slug: 'secure',
    title: 'Secure',
    description: 'Sandboxing ensures your integrations are always completely secure, virtual memory is safe.',
  },
  {
    slug: 'scalable',
    title: 'Scalable',
    description: 'Language-agnostic wasm modules enable light-weight and on-demand performance',
  },
  {
    slug: 'composable',
    title: 'Composable',
    description: 'Polywrappers make composing and extending protocols more reliable, simple and secure.',
  },
  {
    slug: 'upgradable',
    title: 'Upgradable',
    description: 'Optionally upgradeable at run-time. Choose your versioning so it’s always yours.',
  },
]

// interface Props {
//   duration: number;
// }

// const AnimatedBlob = (props: Props) => {
//   const classes = useStyles(),
//   values = [
//     `M172.4,133.3c-54.5,0.3-101.9,42.5-108.6,96.5c-4,32.5,11.5,55.3,18,85.5c7,32.6-9,58.3-8,89.4 c2.6,77.3,92.2,51.2,140,63.8c58.9,15.5,110.2,32.6,160.1-17.2c41.4-41.3,22.4-96.6,54.8-139.5c37.2-49.2,66.9-93.1,42.2-158.2 c-18.9-49.7-65.9-85.2-119-89.2c-30.4-2.3-61.3,5.6-86.8,22.4C233.9,107.4,213.3,133,172.4,133.3z`,
//     `M130.7,111.9c-25.3,43.3-14.6,62-21.3,116c-4,32.5-72.7,42-67.3,86.7c4,33.1,55.6,37.6,56.7,68.7 c2.6,77.3,63.6,88.6,111.3,101.1c58.9,15.5,78.1-26,128-75.8c41.4-41.3,106-35.3,118-88c13.7-60.1-13.9-90.9-38.7-156 c-18.9-49.7,12-103.3-41.3-129.9c-47.9-23.8-96.2,13.5-126,19.9C178.5,69.9,151.3,76.5,130.7,111.9z`,
//     `M130.7,111.9c-26.9,42.4-89.3,15.3-108.1,74c-16.2,50.7,9.3,74.6,36.1,110.7c17.3,23.3,39,55.6,40,86.7 c2.6,77.3,31.6,111.5,79.3,124c58.9,15.5,76.1-58.2,126-108c41.4-41.3,140-26,152-78.7c13.7-60.1-67.3-64.9-92-130 c-18.9-49.7,32-112.7-3-131.7c-29-16-49.8,8.2-78.3,19C252.7,89.2,180.7,33.2,130.7,111.9z`,
//     `M172.4,133.3c-54.5,0.3-101.9,42.5-108.6,96.5c-4,32.5,11.5,55.3,18,85.5c7,32.6-9,58.3-8,89.4 c2.6,77.3,92.2,51.2,140,63.8c58.9,15.5,110.2,32.6,160.1-17.2c41.4-41.3,22.4-96.6,54.8-139.5c37.2-49.2,66.9-93.1,42.2-158.2 c-18.9-49.7-65.9-85.2-119-89.2c-30.4-2.3-61.3,5.6-86.8,22.4C233.9,107.4,213.3,133,172.4,133.3z`,
//   ];
//   return (
//     <svg 
//       className={classes.animatedBlob}
//       xmlns='http://www.w3.org/2000/svg' 
//       viewBox='0 0 600 600'
//     >
//       <path
//         d={values[2]}
//       >
//       </path>
//     </svg>
//   )
// }

export const Features = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box display='flex' alignItems='center' className={classes.root}>
      <Box className={classes.blurredPoly}>
        <Parallax y={[-90,100]} disabled={window.innerWidth < theme.breakpoints.values.md}>
          <img width="100%" src={`${process.env.PUBLIC_URL}/imgs/polywrapper-hero-blurred.png`} alt='Polywrap' />
        </Parallax>
      </Box>
      <Parallax y={[-5,5]} disabled={window.innerWidth < theme.breakpoints.values.md}>
        <Typography variant='h3' color='textPrimary' align='center'>
          Our Features
        </Typography>
        <Box className={classes.cell}>
          <Grid container spacing={6} alignItems='flex-start' className={classes.featureGrid}>
            {
              features.map((feature, index) => {
                return (
                <Grid key={feature.slug} xs={12} sm={4} item className={classes.featureItem}>
                  <Box position='relative'>
                    <Box position='relative' display='flex' alignItems='center' justifyContent='center' className={classes.featureIconContainer}>
                      <img className={classes.featureIconBg} width="100%" src={`${process.env.PUBLIC_URL}/imgs/assets/blob-1.png`} alt='' />
                      <img className={classes.featureIcon} width="100%" src={`${process.env.PUBLIC_URL}/imgs/assets/features/${feature.slug}.png`} alt='' />
                    </Box>
                    <Typography variant='subtitle1' color='textPrimary' align='center' className={classes.featureTitle}>
                      {feature.title}
                    </Typography>
                    <Typography variant='body1' color='textSecondary' align='center' className={classes.featureDescription}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Grid>
              )})
            }
          </Grid>
        </Box>
      </Parallax>
    </Box>
  );
};
