import React from 'react'
import {HERO_CONTENT} from "../constants"

import {motion} from "framer-motion"


const frleft=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:100,
    transition:{duration:0.5, delay:delay}
  }
})



const Hero = () => {
  return (
    <div className='border-b border-neutral-800 pb-4 lg:mb-10'>
        <div className='flex flex-wrap my-10'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center ml-[50px] lg:items-start'>
                    <motion.h1
                    variants={frleft(0)}
                    initial="hidden"
                    animate="visible"
                     className='pb-16 text-6xl font-thin tracking-tight lg:mt-16
                    lg:text-8xl'>Farhan Fazil</motion.h1>
                    <motion.span 
                    variants={frleft(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-orange-700 via-white to-green-500 text-3xl tracking-tight bg-clip-text text-transparent">
                      FULL STACK DEVELOPER
                    </motion.span>
                    <motion.p 
                    variants={frleft(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light'>{HERO_CONTENT}</motion.p> 
                </div>

            </div>

            <div className='w-full lg:w-1/2 lg:p-8'>
              <div clas>
                <motion.img 
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:0.9}}
                    transition={{duration:0.5,delay:1}}
                    src="src/assets/Prof.jpg" alt="prof_pic" height={500} width={500} className='rounded-4xl '/>
              </div>

            </div>

        </div>
      
    </div>
  )
}

export default Hero
