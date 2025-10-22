import React from 'react'
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='text-center text-4xl mb-10 '>About <span>Me</span></h1>

      <div className='flex flex-wrap items-center justify-center'>

        {/* <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl" src={aboutImg} alt="" />
          </div>
        </div> */}

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-4 max-w-5xl text-xl py-6 italic text-justify text-yellow-100'><q>{ABOUT_TEXT}</q></p>
          </div>
        </motion.div>

''
      </div>

    </div>
  )
}

export default About
