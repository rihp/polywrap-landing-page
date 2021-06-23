import React from "react";
import { styled, AppBar, Grid, Box, Link } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

const AppBarBody = styled(Grid)({
  maxHeight: 70,
  maxWidth: '1400px',
  margin: 'auto',
  paddingTop: '0px',
  paddingBottom: '100px'
});

const Logo = styled("img")(({ theme }) => ({
  width: 'auto',
  height: '20vw',
  maxHeight: '150px',
  marginLeft: '2vw',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    maxHeight: '100px'
  },
}));

const LinksContainer = styled(Grid)({
  marginRight: '2vw'
});

const LinkButton = styled(Link)(({ theme }) => ({
  fontSize: '14px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  },
}));

const LinkDivider = styled(Grid)({
  borderLeft: 'solid 1px white',
  width: '1px',
  marginRight: '10px',
  marginLeft: '10px'
});

export const NavBar: React.FC = () => {
  const history = useHistory();
  const onLogoClick = () => history.push('/');

  return (
    <AppBar position="static">
      <AppBarBody container justify="space-between" alignItems='center'>
        <Grid item>
          <Box>
            <Logo src={process.env.PUBLIC_URL + "/logos/polywrap-original.png"} alt="Web3 API Logo" onClick={onLogoClick} />
          </Box>
        </Grid>
        <Grid item>
          <LinksContainer container wrap='nowrap'>
            <Grid item>
              <LinkButton href="https://docs.web3api.dev/" target="_blank" color={'textSecondary'} variant='body1'>
                Docs
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton href="https://github.com/Web3-API/dao/issues?q=is%3Aopen+is%3Aissue+label%3Arecruiting" target="_blank" color={'textSecondary'} variant='body1'>
                Jobs
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton href="https://airtable.com/shrzxezSAlpoUUZNV" target="_blank" color={'textSecondary'} variant='body1'>
                Contact
              </LinkButton>
            </Grid>
          </LinksContainer>
        </Grid>
      </AppBarBody>
    </AppBar>
  );
};
