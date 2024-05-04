import React from 'react';
import { motion } from 'framer-motion';

import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    GreenText
} from "../styles/Global.styled";

import {
    SkillCard,
    SkillsCardContainer
} from "../styles/MySkills.styled";

import { Skills } from '../utils/Data';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const MySkills = () => {
  return (
    <PaddingContainer
        id="Skills"
        top="10%"
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
    >
        <FlexContainer 
            responsiveFlex
            responsiveDirection="column-reverse"
            fullWidthChild
        >

            {/*--left-section--*/}
            <SkillsCardContainer
                as={motion.div}
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                {Skills.map((skill) => (
                    <SkillCard>
                        <IconContainer size="5rem" color="green">
                            {skill.icon}
                        </IconContainer>

                        <Heading as="h4" size="h4">
                            {skill.tech}
                        </Heading>
                    </SkillCard>
                ))}
            </SkillsCardContainer>

            {/*--right-section--*/}
            <motion.div
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4">
                    MIS HABILIDADES
                </Heading>

                <Heading as="h2" size="h2" top="0.5rem">
                    Que <GreenText>puedo hacer</GreenText>
                </Heading>

                <ParaText top="2rem" bottom="1.5rem">
                    Como desarrollador estoy siempre mejorando mi código, o buscando una
                    forma de hacer mis aplicaciones y páginas más rápidas.
                    Actualmente me enfoco en el desarrollo con
                    herramientas como React, TypeScript, Node.js y Next.js.
                </ParaText>

                <ParaText>
                    Tengo experiencia utilizando ...
                </ParaText>
            </motion.div>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills