import React, { useState } from "react";
import { Box, Grid, makeStyles, styled, Typography } from "@material-ui/core";

import { TESTIMONIALS, Testimonial } from "../constants/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useInterval } from "../hooks/useInterval";

const useStyles = makeStyles({
  root: {
    height: 800,
    width: 800,
    display: "block",
    margin: "auto",
    "webkit-user-select": "none" /* Chrome/Safari */,
    "moz-user-select": "none" /* Firefox */,
    "ms-user-select": "none" /* IE10+ */,

    /* Rules below not implemented in browsers yet */
    "o-user-select": "none",
    "user-select": "none",
  },
});

const TestimonialText = styled(Typography)({
  fontStyle: "italic",
  textAlign: "center",
  color: "#3282B8",
  margin: "auto",
  maxWidth: "80%",
  fontSize: 14,
});

const Icon = styled(FontAwesomeIcon)({
  marginTop: 120,
  cursor: "pointer",
});

const Logo = styled("img")({
  height: "auto",
  width: "100%",
  filter:
    "invert(60%) sepia(44%) saturate(424%) hue-rotate(142deg) brightness(86%) contrast(90%)",
});

const LogoContainer = styled("a")({
  display: "flex",
  height: 200,
  flexDirection: "column",
  justifyContent: "center",
});

const LogoLogoContainer = styled(Box)({
  maxWidth: 150,
  margin: "auto",
});

const TestimonialContainer = styled(Grid)({
  width: 750,
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
      <Grid container direction="row" justify="space-around" unselectable="on">
        <Grid item>
          <Icon
            icon={faAngleDoubleLeft}
            onClick={() => handleSlideChange("previous")}
            color="#61a1b0"
          />
        </Grid>
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
                    <TestimonialText>
                      {testimonial.description}
                      <br />
                      <br />
                      <b>{testimonial.persona}</b>
                    </TestimonialText>
                  </Grid>
                  <Grid item>
                    <LogoContainer href={testimonial.url} target="_blank">
                      <LogoLogoContainer>
                        <Logo src={testimonial.logo} />
                      </LogoLogoContainer>
                    </LogoContainer>
                  </Grid>
                </TestimonialContainer>
              )
          )}
        </Grid>
        <Grid item>
          <Icon
            icon={faAngleDoubleRight}
            onClick={() => handleSlideChange("next")}
            color="#61a1b0"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
