import React from "react";
import { styled, AppBar, Grid, Box, Link } from "@material-ui/core";

const Logo = styled("img")({
  width: 170,
  height: "auto",
});

export const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Grid container>
        <Grid item>
          <Box>
            <Logo src={"./logos/web3api.png"} alt="Web3 API Logo" />
          </Box>
        </Grid>
        <Grid item>
          <Link href="https://airtable.com/shri2hEgu1BlMLXZ9">Blog</Link>
          <Link href="https://github.com/web3-api/prototype">Code</Link>
          <Link href="https://web3api.substack.com/">Contact</Link>
        </Grid>
      </Grid>
    </AppBar>
  );
};
