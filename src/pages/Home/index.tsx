import {
  Box,
  Button,
  Grid,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { Carousel } from "../../components/Carousel";

const Hero = styled(Grid)({
  minHeight: 420,
  padding: 50,
});

const HeroTitle = styled(Typography)({
  fontWeight: 700,
});

const HeroBody = styled(Typography)({
  fontStyle: "italic",
});

const VideoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: 'auto',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: 40,
  backgroundImage: "url('./Web3API Icon.svg');",
  backgroundPosition: "50% 50%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  boxShadow: "2px 2px 14px 3px rgba(0, 0, 0, 0.28)",
  height: 400,
  width: '80%',

  [theme.breakpoints.down('xs')]: {
    height: 200
  }
}));

export const Home = () => {

  return (
    <Box>
      <Hero container justify="center">
        <Grid item xs={12} md={6}>
          <Grid container direction='column' justify='space-between' style={{ height: '100%' }}>
            <Grid item>
              <HeroTitle color="textPrimary" variant="h1">
                The Universal Web3 Integration Standard
              </HeroTitle>
              <HeroBody color="textSecondary" variant="subtitle1">
                Web3API is a WASM standard for integrating Web3 protocols into
                applications. This eliminates the need for client-side SDKs, making
                dApps lightweight and cross-platform.
              </HeroBody>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <TextField
                    placeholder="Stay informed!"
                    inputProps={{ style: { textAlign: "center" } }}
                  />
                </Grid>
                <Grid item>
                  <Button color="secondary" variant="outlined">
                    Join
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <VideoBox></VideoBox>
        </Grid>
      </Hero>
      <Carousel/>
    </Box>
  );
};
