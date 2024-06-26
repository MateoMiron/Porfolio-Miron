import React from 'react';
import { motion } from 'framer-motion';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    GreenText,
    IconContainer,
} from "../styles/Global.styled";

import { 
    ShowcaseParticleContainer,
    ShowcaseImageCard,
    Particle,
} from '../styles/Showcase.styled';

import { BsLinkedin, BsGithub } from "react-icons/bs";

import ShowcaseImg from "../assets/Logo-MM-1-redimen.png";
import BackgroundImg from "../assets/Heptagono-sinfondo-redim.png";

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
  const Url1 = () => {
    window.open("https://www.linkedin.com/in/mateo-miron-339bb9247/", '_blank')
  };

  const Url2 = () => {
    window.open("https://github.com/MateoMiron", '_blank')
  };

  return (
    <PaddingContainer
        id = "Home"
        left = "3%"
        right = "10%"
        top = "18%"
        bottom = "10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="8rem"
    >
        <FlexContainer align="left" fullWidthChild>
            {/* --left-content-- */}
            <motion.div
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4" >Buenas!</Heading>

                <Heading
                    as="h1"
                    size="h1"
                    top="0.5rem"
                    bottom="1rem"
                >
                    Soy  <GreenText>Mateo Miron</GreenText>
                </Heading>

                <Heading as="h3" size="h3">
                    Soy un <GreenText>Desarrollador Full Stack</GreenText>
                </Heading>

                <ParaText as="p" top="2rem" bottom="4rem">
                    Tengo experiencia creando y diseñando aplicaciones web y sitios web full-stack
                </ParaText>

                {/*--social-icons--*/}
                <FlexContainer gap="20px" responsiveFlex>
                    <IconContainer color="white" size="1.5rem" onClick={Url1}>
                            <BsLinkedin/>
                    </IconContainer>

                    <IconContainer color="white" size="1.5rem" onClick={Url2}>
                            <BsGithub/>
                    </IconContainer>
                </FlexContainer>
            </motion.div>

            {/*--right-content--*/}
            <FlexContainer 
                as={motion.div}
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
                justify="flex-end"
            >
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <img src={ShowcaseImg} alt="showcase" />
                    </ShowcaseImageCard>

                    <Particle
                        as={motion.img}
                        animate={{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        top="-80px"
                        left="20px"
                        rotate="60deg"
                    />

                    <Particle
                        as={motion.img}
                        animate={{
                            y: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.8, 1],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        top="50px"
                        right="-70px"
                        rotate="0deg"
                    />

                    <Particle
                        as={motion.img}
                        animate={{
                            y: [0, -100, 0],
                            rotate: 360,
                            scale: [1, 0.9, 1],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        bottom="10px"
                        left="-70px"
                        rotate="50deg"
                    />

                </ShowcaseParticleContainer>
            </FlexContainer>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase