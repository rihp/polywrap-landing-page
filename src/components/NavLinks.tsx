import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Link, useMediaQuery, useTheme } from '@material-ui/core';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined'
import { polywrapPalette } from '../theme';
import { CTA } from '../constants/verbiage';

const useStyles = makeStyles((theme) => ({
  navLink: {
    fontSize: 14,
    fontWeight: 700,
    marginRight: 20,
    transition: 'color 0.25s ease-in-out',
    '&:hover': {
      color: polywrapPalette.primary.start,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      marginRight: 10,
    },
  },
  navButton: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

interface NavLinkProps {
  type?: "footer";
  scrollPosition: number;
}

export const NavLinks = (props: NavLinkProps) => {
  const theme = useTheme(),
    history = useHistory(),
    navigateToPage = (route: string) => history.push(route),
    scrollPosition = props.scrollPosition,
    isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
      defaultMatches: true
    }),
    showButton = (!isMobile || scrollPosition > 150),
    classes = useStyles();

  return (
    <Box display='flex' alignItems='center' flexWrap='nowrap'>
      <Link className={classes.navLink} href='https://docs.polywrap.io/' target='_blank' color='textSecondary' variant='body1' style={{display: `${(!showButton || !isMobile) ? 'block' : 'none'}`}}>
        Docs
      </Link>
      <Link className={classes.navLink} href='https://github.com/polywrap/dao/issues?q=is%3Aopen+is%3Aissue+label%3Arecruiting' target='_blank' color='textSecondary' variant='body1' style={{display: `${(!showButton || !isMobile) ? 'block' : 'none'}`}}>
        Jobs
      </Link>
      <Link className={classes.navLink} href='https://discord.com/invite/Z5m88a5qWu' target='_blank' color='textSecondary' variant='body1' style={{display: `${(!showButton || !isMobile) ? 'block' : 'none'}`}}>
        Community
      </Link>
      <Button
        onClick={() => navigateToPage('/signup')}
        variant='contained' color='primary'
        endIcon={<KeyboardArrowRightOutlined />}
        className={classes.navButton}
        style={{display: `${(showButton) ? 'flex' : 'none'}`}}
      >
        {!isMobile ? CTA : CTA.split(' ')[2]}
      </Button>
    </Box>
  );
};