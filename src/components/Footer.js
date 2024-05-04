import React from 'react';
import { motion } from 'framer-motion';

import {
    PaddingContainer,
    Heading,
    GreenText,
    FlexContainer,
} from "../styles/Global.styled";

import { 
    ContactForm, 
    FormLabel, 
} from '../styles/Footer.styled';

import { fadeInBottomVariant } from '../utils/Variants';

const Footer = () => {
  return (
    <PaddingContainer
        id="Contacts"
        top="5%"
        bottom="10%"
    >
        <Heading
            as={motion.h4}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            size="h4"
            align="center"
        >
            MIS CONTACTOS
        </Heading>

        <Heading
            as={motion.h2}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            size="h2"
            align="center"
            top="0.5rem"
        >
            Contactame <GreenText>por acá</GreenText>
        </Heading>

        <PaddingContainer top="3rem">
            <FlexContainer justify="center">

                <ContactForm
                    as={motion.form}
                    variants={fadeInBottomVariant}
                    initial="hidden"
                    whileInView="visible"
                >

                    <PaddingContainer top="2rem">
                        <FlexContainer justify="center" as="h2">
                            <FormLabel>miron.portf@gmail.com</FormLabel>
                        </FlexContainer>
                    </PaddingContainer>

                </ContactForm>

            </FlexContainer>
        </PaddingContainer>

    </PaddingContainer>
  )
}
export default Footer

/*

------Formulario------

                        <PaddingContainer bottom="2rem">
                            <FormLabel>Nombre:</FormLabel>
                            <FormInput
                                type="text"
                                placeholder="Ingresá tu nombre"
                            />
                        </PaddingContainer>

                        <PaddingContainer bottom="2rem">
                            <FormLabel>Email:</FormLabel>
                            <FormInput
                                type="email"
                                placeholder="Ingresá tu email"
                            />
                        </PaddingContainer>

                        <PaddingContainer bottom="2rem">
                            <FormLabel>Mensaje:</FormLabel>
                            <FormInput
                                as="textarea"
                                placeholder="Ingresá tu mensaje"
                            />
                        </PaddingContainer>

                        <FlexContainer justify="center" responsiveFlex>
                            <Button onClick={sendMssg}>Enviar Mensaje</Button>
                        </FlexContainer>
*/

/*
    <PaddingContainer top="1rem">
        <FlexContainer justify="center" as={motion.h3}>
            <FormLabel>
                <FaArrowUp/>
            </FormLabel>
        </FlexContainer>
    </PaddingContainer>

    <PaddingContainer>
        <FlexContainer justify="center">
            <FormLabel>En caso de querer contactarme directamente</FormLabel>
        </FlexContainer>
    </PaddingContainer>
*/