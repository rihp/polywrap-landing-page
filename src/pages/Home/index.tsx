import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Grid,
  Modal,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { Carousel } from "../../components/Carousel";
import { launchPartners } from "../../constants/testimonials";
import { filters } from "../../theme";

const Hero = styled(Grid)(({ theme }) => ({
  minHeight: 310,
  padding: 50,
  maxWidth: '80vw',
  margin: 'auto',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '100%'
  },

  [theme.breakpoints.down('sm')]: {
    padding: '50px 10px'
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: 20,
  marginTop: 20,

  [theme.breakpoints.down('md')]: {
    fontSize: 60
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: 40
  },

  [theme.breakpoints.down('xs')]: {
    textAlign: 'center'
  },
}));

const HeroBody = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  marginBottom: 20,

  [theme.breakpoints.down('md')]: {
    lineHeight: 1.5
  },

  [theme.breakpoints.down('xs')]: {
    textAlign: 'center',
    fontSize: 16
  },
}));

const VideoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  marginLeft: 'auto',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 40,
  backgroundImage: "url('./Web3API Icon.svg');",
  backgroundPosition: "50% 50%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  boxShadow: "2px 2px 14px 3px rgba(0, 0, 0, 0.28)",
  height: 420,
  width: '45vw',
  maxWidth: '80%',

  [theme.breakpoints.down('sm')]: {
    margin: 'auto'
  },

  [theme.breakpoints.down('xs')]: {
    width: '60vw',
    height: '50vw',
    marginBottom: 45
  },
}));

const HeroTextContainer = styled(Grid)({
  height: '100%'
})

const StyledTextField = styled(TextField)({
  width: '100%'
})

const JoinButton = styled(Button)({
  height: '100%'
})

const VideoBoxGridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    order: -1
  }
}))

const LaunchPartnersText = styled(Typography)(({ theme }) => ({
  display: 'block',
  margin: 'auto',
  marginBottom: 20,
  textAlign: 'center',
  fontWeight: 700,

  [theme.breakpoints.down('xs')]: {
    fontSize: 30
  }
}))

const Logo = styled("img")({
  height: "auto",
  width: "100%",
  filter: filters.textSecondary,

  '&:hover': {
    filter: filters.secondary,
  }
});

const LogoContainer = styled("a")({
  display: "flex",
  width: 200,
  maxHeight: 150,
  flexDirection: "column",
  justifyContent: "center",
});

const InnerLogoContainer = styled(Box)(({ theme }) => ({
  maxWidth: 150,
  width: "15vw",
  height: "15vw",
  maxHeight: 150,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.down('xs')]: {
    width: "20vw",
  }
}));

const LaunchPartnersContainer = styled(Grid)({
  boxSizing: 'border-box',
  paddingRight: '10vw',
  paddingLeft: '10vw'
})

const PlayIcon = styled(FontAwesomeIcon)(({ theme })=> ({
  cursor: 'pointer',
  opacity: 0.53,
  color: '#FFFFFF',
  padding: '0 0 8px 8px',
  fontSize: 70,

  [theme.breakpoints.down('xs')]: {
    fontSize: 35,
  }
}))

const ModalBody = styled(Box)(({ theme })=> ({
  height: 528,
  maxHeight: '90%',
  width: 940,
  maxWidth: '90%',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',

  [theme.breakpoints.down('xs')]: {
    height: 300
  }
}))

export const Home = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <>
    <Box>
      <Hero container justify="center" direction={matches? 'row-reverse': 'row'}>
        <Grid item xs={12} sm={5}>
          <HeroTextContainer container direction='column' justify='space-between'>
            <Grid item>
              <HeroTitle color="textPrimary" variant="h1">
                The Universal Web3 Integration Standard
              </HeroTitle>
              <HeroBody color="textSecondary" variant="subtitle1">
                Web3API is a WASM standard for integrating Web3 protocols into
                applications. This eliminates the need for client-side SDKs,
                making dApps lightweight and cross-platform.
              </HeroBody>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <StyledTextField
                    placeholder="Stay informed!"
                    inputProps={{ style: { textAlign: "center" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <JoinButton color="secondary" variant="outlined" fullWidth>
                    Join
                  </JoinButton>
                </Grid>
              </Grid>
            </Grid>
          </HeroTextContainer>
        </Grid>
        <VideoBoxGridContainer item xs={12} sm={7} onClick={() => setIsVideoOpen(true)}>
          <Box display='flex' flexDirection='column' justifyContent='center' width='100%' height='100%'>
            <VideoBox>
              <PlayIcon icon={faPlay} />
            </VideoBox>
          </Box>
        </VideoBoxGridContainer>
      </Hero>
      <LaunchPartnersText variant='h3' color='textPrimary'>
        Launch Partners
      </LaunchPartnersText>
      <LaunchPartnersContainer container justify='center'>
        {
          launchPartners.map(({logo, url}) => (
            <Grid item>
              <LogoContainer href={url} target="_blank">
                <InnerLogoContainer>
                  <Logo src={logo} />
                </InnerLogoContainer>
              </LogoContainer>
            </Grid>
          ))
        }
      </LaunchPartnersContainer>
      <Carousel/>
    </Box>
    <Modal
      open={isVideoOpen}
      onClose={() => setIsVideoOpen(false)}
      aria-labelledby="video-modal-title"
      aria-describedby="video-modal-description"
    >
      <ModalBody>
        <iframe title='youtubeplayer' id="ytplayer" width="100%" height="100%" frameBorder='0'
          src="http://www.youtube.com/embed/ojbMBN9pga4?autoplay=1"
        />
      </ModalBody>
    </Modal>
    </>
  );
};
