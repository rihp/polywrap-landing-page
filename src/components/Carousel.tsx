import React, { useState } from "react";
import { Box, Grid, makeStyles, styled, Typography, useTheme } from "@material-ui/core";

import { TESTIMONIALS, Testimonial } from "../constants/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useInterval } from "../hooks/useInterval";
import { filters } from "../theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    padding: "0 10px",
    display: "block",
    margin: "auto",
    "webkit-user-select": "none",
    "moz-user-select": "none",
    "ms-user-select": "none",
    "o-user-select": "none",
    "user-select": "none",
  },
});

const TestimonialText = styled(Typography)({
  fontStyle: "italic",
  textAlign: "center",
  margin: "auto",
  maxWidth: "80%",
});

const Icon = styled(FontAwesomeIcon)(({ theme }) => ({
  cursor: "pointer",
  fontSize: 25,
  color: theme.palette.text.secondary,

  "&:hover": {
    color: theme.palette.secondary.main
  }
}));

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
  maxHeight: 150,
  flexDirection: "column",
  justifyContent: "center",
});

const InnerLogoContainer = styled(Box)({
  maxWidth: 150,
  width: "15vw",
  height: "15vw",
  maxHeight: 150,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const TestimonialContainer = styled(Grid)({
  maxWidth: 750,
});

export const Carousel = () => {
  const classes = useStyles();
  const [actualSlide, setActualSlide] = useState(0);
  const NUMBER_OF_TESTIMONIALS = TESTIMONIALS.length - 1;

  const handleSlideChange = (slider: "next" | "previous") => {
    const isNext = slider === "next";

    if (isNext && actualSlide === NUMBER_OF_TESTIMONIALS) {
      setActualSlide(0);
      return;
    }

    if (slider === "previous" && actualSlide === 0) {
      setActualSlide(NUMBER_OF_TESTIMONIALS);
      return;
    }

    const newSlide = isNext ? actualSlide + 1 : actualSlide - 1;
    setActualSlide(newSlide);
  };

  // Change the testimonial every seven seconds
  useInterval(() => handleSlideChange("next"), 7000);

  return (
    <Box className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        wrap="nowrap"
        unselectable="on"
        style={{ padding: "0 30px" }}
      >
        <Grid item>
          {TESTIMONIALS.map(
            (testimonial: Testimonial, index: number) =>
              index === actualSlide && (
                <TestimonialContainer
                  container
                  direction="column"
                  key={`testimonial-${index}`}
                >
                  <Grid item>
                    <TestimonialText variant="body2" color="textSecondary">
                      {testimonial.description}
                      <br />
                      <br />
                      <b>{testimonial.persona}</b>
                    </TestimonialText>
                  </Grid>
                  <Grid item>
                    <Grid container justify='space-between' alignItems='center'>
                      <Grid item>
                        <Icon
                          icon={faAngleDoubleLeft}
                          onClick={() => handleSlideChange("previous")}
                        />
                      </Grid>
                      <Grid item>
                        <LogoContainer href={testimonial.url} target="_blank">
                          <InnerLogoContainer>
                            <Logo src={testimonial.logo} />
                          </InnerLogoContainer>
                        </LogoContainer>
                      </Grid>
                      <Grid item>
                        <Icon
                          icon={faAngleDoubleRight}
                          onClick={() => handleSlideChange("next")}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </TestimonialContainer>
              )
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
