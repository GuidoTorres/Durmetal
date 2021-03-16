import React, { useState } from "react";
import video from "./../../videos/pexels-tima-miroshnichenko-5846587.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
      <div class="elfsight-app-3aa88d4a-7286-41e7-a119-059e3a60adfb"></div>

        <HeroH1>Servicios Generales</HeroH1>
        <HeroP>
          DISEÑO Y FABRICACION DE ESTRUCTURAS METALICAS / ACERO INOXIDABLE/
          SERVICIOS DE SOLDADURA
        </HeroP>
      </HeroContent>
      <HeroBtnWrapper>
        <Button
          to="about"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={50}
          activeClass="active"
        >
          Comenzar {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </HeroContainer>
  );
};

export default Hero;
