import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from "framer-motion"

const Experience = () => {
    return (

        <div className='border-b border-neutral-700 py-4 mb-8'>
            <motion.h1
            initial={{opacity:0,y:-100}}
            whileInView={{opacity:1,y:0}}
            transition={{duartion:0.5}}
            className='text-bold text-4xl text-center mb-15 mt-10'>Experience</motion.h1>
            <div>
                {EXPERIENCES.map((exp,index)=>{
                    return(
                    <div key={index} className='flex flex-wrap lg:justify-center'>
                        <motion.div 
                        initial={{opacity:0,x:-100}}
                        whileInView={{opacity:1 ,x:0}}
                        transition={{duration:1}}
                        className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
                        </motion.div>

                        <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                         className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold' >{exp.role}-{""} <span className='text-sm text-purple-100'>{exp.company}</span></h6>
                            <p className='mb-4 text-neutral-400'>{exp.description}</p>
                            <div className='flex gap-1 w-auto flex-wrap'>
                                {exp.technologies.map((items,index)=>{
                                    return(
                                        <span key={index} className='mr-2 mb-5 rounded bg-yellow-900 p-1 text-sm font-medium text-white w-auto '>{items}</span>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                )})}
            </div>

        </div>
    )
}

export default Experience