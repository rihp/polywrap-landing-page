import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Container, useMediaQuery, useTheme } from '@material-ui/core';
import { polywrapPalette } from '../theme';
import { NavLinks } from './NavLinks';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: `${polywrapPalette.secondary[900]}c2`,
    backdropFilter: 'blur(48px)',
    transition: `background 1s ease-in-out`,
  },
  cell: {
    padding: 0,
  },
  logo: {
    width: 'auto',
    height: '48px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      height: 24,
    },
    '&:hover': {
      opacity: 0.8,
    }
  },
  navLink: {
    fontSize: '14px',
    fontWeight: 700,
    marginRight: 20,
    transition: 'color 0.25s ease-in-out',
    '&:hover': {
      color: polywrapPalette.primary.start,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      marginRight: 10,
    },
  },
}));

// interface Props {
//   children: React.ReactElement;
// }

// function HideOnScroll(props: Props) {
//   const { children } = props,
//     classes = useStyles(),
//     trigger = useScrollTrigger({});

//   const [scrollPosition, setScrollPosition] = useState(0);
//   const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
//   };
  
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });
  
//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <AppBar className={scrollPosition > 100 ? classes.appBar : ''} position='fixed' color='transparent'>
//       {children}
//     </AppBar>
//   );
// }


export const Navbar = () => {
  const history = useHistory(),
    onLogoClick = () => history.push('/'),
    theme = useTheme(),
    isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
      defaultMatches: true
    }),
    classes = useStyles();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position='fixed' color='transparent' className={scrollPosition > 150 ? classes.appBar : undefined} style={{transition: `background 1s ease-in-out`}}>
      <Container maxWidth="lg" className={classes.cell}>
        <Box display='flex' justifyContent='space-between' alignItems='center' padding='24px'>
          <img src={process.env.PUBLIC_URL + '/logos/polywrap-horizontal.svg'} alt='Polywrap Logo' onClick={onLogoClick} className={classes.logo} />
          { window.location.pathname !== '/signup' ?
            <NavLinks />
            : null
          }
        </Box>
      </Container>
    </AppBar>
  );
};