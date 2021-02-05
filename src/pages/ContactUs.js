import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations';

const ContactUs = () => {
    return(
        <motion.div 
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            style={{ background:'#fff' }}
        >
            <h1>Contact</h1>
        </motion.div>
    );
}

export default ContactUs;