import React from 'react';
import "./Profile.scss";
import { motion } from 'framer-motion';

const Profile = () => {

    const textVariants = {
        initial:{
            x: -500,
            opacity: 0
        },
        animate:{
            x: 0,
            opacity: 1,
            transition:{
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollButton:{
            opacity:0.2,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }
    };

    const slidervariants = {
        initial:{
            x: 0,
        },
        animate:{
            x: "-220%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:20
            },
        },
    };

    return (
        <motion.div className='profile'>
            <div className='wrapper'>
                <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Harvey Taylor</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer & UI Designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}> See the latest Works</motion.button>
                        <motion.button variants={textVariants}> Contact me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src='/scroll.png' alt='' />
                </motion.div>
            </div>
            <motion.div className="slideingTextContainer" variants={slidervariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>
            <div className='imageContainer'>
                <motion.img src='/hero.png' alt='' initial={{ opacity: 0 }} animate={{ opacity: 0.65 }} />
            </div>
        </motion.div>
    )       
}

export default Profile;