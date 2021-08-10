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
  footerLink: {
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    },
  },
}));

interface NavLinkProps {
  type?: "footer";
}

export const NavLinks = (props: NavLinkProps) => {
  const theme = useTheme(),
    type = props.type,
    isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
      defaultMatches: true
    }),
    classes = useStyles();

  return (
    <Box display='flex' alignItems='center' flexWrap='nowrap'>
      <Link className={`${classes.navLink} ${type === 'footer' ? classes.footerLink : ''}`} href='https://docs.polywrap.io/' target='_blank' color={type === 'footer' ? 'textPrimary' : 'textSecondary'} variant='body1'>
        Docs
      </Link>
      <Link className={`${classes.navLink} ${type === 'footer' ? classes.footerLink : ''}`} href='https://github.com/polywrap/dao/issues?q=is%3Aopen+is%3Aissue+label%3Arecruiting' target='_blank' color={type === 'footer' ? 'textPrimary' : 'textSecondary'} variant='body1'>
        Jobs
      </Link>
      <Link className={`${classes.navLink} ${type === 'footer' ? classes.footerLink : ''}`} href='https://discord.com/invite/Z5m88a5qWu' target='_blank' color={type === 'footer' ? 'textPrimary' : 'textSecondary'} variant='body1'>
        Community
      </Link>
      {type !== "footer" ?
        (
          <Button href="/signup" variant='contained' color='primary' endIcon={<KeyboardArrowRightOutlined />}>
            {!isMobile ? CTA : CTA.split(' ')[2]}
          </Button>

        ) : null
      }
    </Box>
  );
};