import { faDiscord, faDiscourse, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Link, useTheme } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "flex-end",
    maxWidth: '1400px',
    margin: '30px auto 0',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
    },
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '50px',
    marginRight: 20,
    marginBottom: 20,
    "&:last-of-type": {
      marginRight: 0,
    },
  },
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

export const Footer = () => {
  const theme = useTheme(),
    classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid item className={classes.logoContainer}>
        <Link href="https://github.com/polywrap" target="_blank">
          <FontAwesomeIcon
            className={classes.logo}
            icon={faGithub}
            color={theme.palette.text.secondary}
          />
        </Link>
      </Grid>
      <Grid item className={classes.logoContainer}>
        <Link href="https://twitter.com/polywrap_io" target="_blank">
          <FontAwesomeIcon
            className={classes.logo}
            icon={faTwitter}
            color={theme.palette.text.secondary}
          />
        </Link>
      </Grid>
      <Grid item className={classes.logoContainer}>
        <Link href="https://forum.polywrap.io" target="_blank">
          <FontAwesomeIcon
            className={classes.logo}
            icon={faDiscourse}
            color={theme.palette.text.secondary}
          />
        </Link>
      </Grid>
      <Grid item className={classes.logoContainer}>
        <Link href="https://discord.gg/Z5m88a5qWu" target="_blank">
          <FontAwesomeIcon
            className={classes.logo}
            icon={faDiscord}
            color={theme.palette.text.secondary}
          />
        </Link>
      </Grid>
    </Grid>
  );
}