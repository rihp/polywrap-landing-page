import React from "react";
import { Box, Link, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { faDiscord, faDiscourse, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    height: "100vh",
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    width: "80px",
    position: "fixed",
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  menu: {
    cursor: "pointer",
    fill: theme.palette.secondary.main,
    height: 40,
    marginTop: 24,
    width: 40,
    "&:hover": {
      fill: theme.palette.secondary.dark,
    },
  },
  socialLink: {
    marginTop: 24,
  },
  socialLogo: {
    cursor: 'pointer',
    fontSize: 32,
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));


export const NavBar: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" className={classes.wrapper}>
        <MenuOutlinedIcon className={classes.menu}/>
        <Box display="flex" flexDirection="column" marginBottom="24px">
          <Link className={classes.socialLink} href="https://github.com/polywrap" rel="noredirect" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className={classes.socialLogo}
              color={theme.palette.text.secondary}
            />
          </Link>
          <Link className={classes.socialLink} href="https://twitter.com/polywrap_io" rel="noredirect" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className={classes.socialLogo}
              color={theme.palette.text.secondary}
            />
          </Link>
          <Link className={classes.socialLink} href="https://forum.polywrap.io" rel="noredirect" target="_blank">
            <FontAwesomeIcon
              icon={faDiscourse}
              className={classes.socialLogo}
              color={theme.palette.text.secondary}
            />
          </Link>
          <Link className={classes.socialLink} href="https://discord.gg/Z5m88a5qWu" rel="noredirect" target="_blank">
            <FontAwesomeIcon
              icon={faDiscord}
              className={classes.socialLogo}
              color={theme.palette.text.secondary}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
