import React from 'react';
import { motion } from 'framer-motion';

const Links = () => {


  const variants ={
    open:{
      transition:{
        staggerChildren:0.1,
        stiffness:200
      }
    },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggeredDirection:-1
      }
    }
  }


  const itemVariants ={
    open:{
      y:0,
      opacity:1
    },
    closed:{
      y:50,
      opacity:50
    }
  }



  const items=[
    "Home",
    "Portfolio",
    "Skills",
    "About",
    "Contact",
  ]
  return (
    <motion.div className='links' variants={variants}>{
      items.map(item=>(
        <motion.a   href={`#${item}`} key={item} 
        variants={itemVariants}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.7}}
        >{item}</motion.a>
      ))
    }</motion.div>
  )
}

export default Links