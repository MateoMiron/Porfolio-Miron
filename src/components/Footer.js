import React from 'react';
import { motion } from 'framer-motion';

import {
    PaddingContainer,
    Heading,
    GreenText,
    FlexContainer,
    Button,
} from "../styles/Global.styled";

import { 
    ContactForm, 
    FormInput, 
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
                    <PaddingContainer bottom="2rem">
                        <FormLabel>Name:</FormLabel>
                        <FormInput
                            type="text"
                            placeholder="Enter your name"
                        />
                    </PaddingContainer>

                    <PaddingContainer bottom="2rem">
                        <FormLabel>Email:</FormLabel>
                        <FormInput
                            type="email"
                            placeholder="Enter your mail"
                        />
                    </PaddingContainer>

                    <PaddingContainer bottom="2rem">
                        <FormLabel>Message:</FormLabel>
                        <FormInput
                            as="textarea"
                            placeholder="Enter your message"
                        />
                    </PaddingContainer>

                    <FlexContainer justify="center" responsiveFlex>
                        <Button>Send Message</Button>
                    </FlexContainer>

                </ContactForm>

            </FlexContainer>
        </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer