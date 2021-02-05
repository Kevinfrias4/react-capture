import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
    return(
        <ContactStyle
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            style={{ background:'#fff' }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get In Touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send Us A Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send An Email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Social Media</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 5rem;
    color: #353535;
    min-height: 90vh;
`;

const Title = styled.div`
    margin-bottom: 3rem;
    color: black;
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 1rem;
    }
`;

export default ContactUs;