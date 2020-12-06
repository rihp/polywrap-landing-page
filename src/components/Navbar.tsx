import React from "react";
import { styled, AppBar, Grid, Box, Link } from "@material-ui/core";

const Logo = styled("img")({
  width: 'auto',
  height: 41,
});

const LinkButton = styled(Link)({
  height: '100%',
})

const BorderedLinkContainer = styled(Grid)({
  borderLeft: 'solid 1px white',
  borderRight: 'solid 1px white'
})

const AppBarBody = styled(Grid)({
  minHeight: 70,
  boxSizing: 'border-box',
  padding: '0 32px'
})

export const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <AppBarBody container justify="space-between" alignItems='center'>
        <Grid item>
          <Box>
            <Logo src={"./logos/web3api.png"} alt="Web3 API Logo" />
          </Box>
        </Grid>
        <Grid item>
          <Grid container spacing={3} wrap='nowrap'>
            <Grid item>
              <LinkButton href="https://airtable.com/shri2hEgu1BlMLXZ9" color={'textSecondary'} variant='body1'>Blog</LinkButton>
            </Grid>
            <BorderedLinkContainer item>
              <LinkButton href="https://github.com/web3-api/prototype" color={'textSecondary'} variant='body1'>Code</LinkButton>
            </BorderedLinkContainer>
            <Grid item>
              <LinkButton href="https://web3api.substack.com/" color={'textSecondary'} variant='body1'>Contact</LinkButton>
            </Grid>
          </Grid>
        </Grid>
      </AppBarBody>
    </AppBar>
  );
};
