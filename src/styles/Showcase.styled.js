import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
    position: relative;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: none;
    };
`

export const ShowcaseImageCard = styled.div`
    border: 1px solid white;
    width: max-content;
    padding-top: 1.5rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    animation: pulsate 1.5s infinite alternate;
    box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #7ef76a,
            0 0 0.8rem #7ef76a,
            0 0 2.8rem #7ef76a,
            inset 0 0 1.3rem #7ef76a;
`

export const Particle = styled.img`
    position: absolute;
    top: ${({ top }) => top };
    left: ${({ left }) => left };
    right: ${({ right }) => right };
    bottom: ${({ bottom }) => bottom };
    transform: rotate(${({ rotate }) => rotate });
`