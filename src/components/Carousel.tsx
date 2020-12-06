import React from "react";
import { Grid, styled } from "@material-ui/core";

import { TESTIMONIALS, Testimonial } from "../constants/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

const CarouselContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80vw",
  maxWidth: 800,
  paddingLeft: 30,
  paddingRight: 30,
  borderRadius: "1.5rem",
  position: "relative",
});

const TestimonialText = styled("div")({
  animation: "fade 1.5s",
  textAlign: "center",
  color: "#3282B8",
  margin: "auto",
  maxWidth: "80%",
});

const Logo = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  filter:
    "invert(60%) sepia(44%) saturate(424%) hue-rotate(142deg) brightness(86%) contrast(90%)",
});

const LogoContainer = styled("a")({
  maxWidth: 150,
  display: "block",
  margin: "auto",
});

export const Carrousel = () => {
  return (
    <CarouselContainer>
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
      {TESTIMONIALS.map((testimonial: Testimonial) => (
        <Grid container direction="column" justify="space-between">
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
              <Logo src={testimonial.logo} />
            </LogoContainer>
          </Grid>
        </Grid>
      ))}
      <FontAwesomeIcon icon={faAngleDoubleRight} />
    </CarouselContainer>
  );
};
