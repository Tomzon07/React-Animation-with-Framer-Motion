import React from 'react'
import "./Navbar.scss";
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className='wrapper'>
            <motion.span 
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}>
             www.tomzonmartin.com
             </motion.span>
            <motion.div 
             initial={{opacity:0,scale:0.5}}
             animate={{opacity:1,scale:1}}
             transition={{duration:0.5}}
            className='social'>
                <motion.a whileHover={{ scale: 1.5,delay:2 }}
                 href=''><img src='/facebook.png' alt='' /> </motion.a>
                <motion.a whileHover={{ scale: 2,delay:2 }} href=''><img src='/instagram.png' alt='' /> </motion.a>
                <motion.a  whileHover={{ scale: 2,delay:2 }} href=''><img src='/youtube.png' alt='' /> </motion.a>

            </motion.div>


        </div>


    </div>
  )
}

export default Navbar