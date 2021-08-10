import { faDiscord, faDiscourse, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Container, Grid, Link, Typography, useTheme } from '@material-ui/core'
import { EmailForm } from './EmailForm'
import { NavLinks } from './NavLinks';
import { polywrapPalette } from '../theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `${polywrapPalette.secondary[1000]}85`,
    padding: 64,
    zIndex: 2,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginLeft: -theme.spacing(3),
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 64,
      paddingBottom: 64,
      width: `calc(100% + ${theme.spacing(3)*2}px)`,
    },
  },
  cell: {},
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
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '50px',
    marginRight: 20,
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  social: {
    cursor: 'pointer',
    fontSize: 24,
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  miceType: {
    color: `${theme.palette.text}85`,
    fontSize: 12,
    lineHeight: 1.75,
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box component="footer" className={classes.root}>
      <Container className={classes.cell}>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5}>
            <img src={process.env.PUBLIC_URL + '/logos/polywrap-horizontal.svg'} alt='Polywrap Logo' className={classes.logo} />
            <Box marginTop={4}>
              <NavLinks type="footer" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            {
              (window.location.pathname === 'signup') ?
              <EmailForm location="footer"/>
              : null
            }
            <Box display="flex" alignItems="center" marginTop={4}>
              <Box className={classes.socialContainer}>
                <Link href='https://github.com/polywrap' target='_blank'>
                  <FontAwesomeIcon
                    className={classes.social}
                    icon={faGithub}
                    color={theme.palette.text.secondary}
                  />
                </Link>
              </Box>
              <Box className={classes.socialContainer}>
                <Link href='https://twitter.com/polywrap_io' target='_blank'>
                  <FontAwesomeIcon
                    className={classes.social}
                    icon={faTwitter}
                    color={theme.palette.text.secondary}
                  />
                </Link>
              </Box>
              <Box className={classes.socialContainer}>
                <Link href='https://forum.polywrap.io' target='_blank'>
                  <FontAwesomeIcon
                    className={classes.social}
                    icon={faDiscourse}
                    color={theme.palette.text.secondary}
                  />
                </Link>
              </Box>
              <Box className={classes.socialContainer}>
                <Link href='https://discord.gg/Z5m88a5qWu' target='_blank'>
                  <FontAwesomeIcon
                    className={classes.social}
                    icon={faDiscord}
                    color={theme.palette.text.secondary}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box marginTop={6}>
          <Typography variant="body2" className={classes.miceType}>
            © 2021 Token Group Limited. Monolith is the trading name of Token Group Limited. Token Group Limited is a company registered in England and Wales (11098384). The Monolith Account and Visa Card are issued by Contis Financial Services Ltd who are authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (registered number 900025) and UAB „Finansinės paslaugos „Contis“ who are authorised by the Bank of Lithuania under the electronic money institution license No. 53.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
