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
                    Tengo experiencia utilizando Python como lenguaje principal para tareas de lógica,
                    creo y modifico Base de Datos relacionales como MySQL o PostgreSQL, 
                    trabajo y manipulo Base de Datos no relacionales como MongoDB.
                </ParaText>

                <ParaText>
                    Realizé desarrollos completos de aplicaciones usando TypeScript, y herramientas como React,
                    NodeJS, NextJS, Prisma, y continuamente sigo aprendiendo nuevas formas de implementarlas.
                </ParaText>
            </motion.div>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills