import React from 'react'
import project1 from "../assets/projects/project-1.jpg"
import project2 from "../assets/projects/project-2.jpg"
import project3 from "../assets/projects/project-3.jpg"
import project4 from "../assets/projects/project-4.jpg"
import {PROJECTS} from "../constants/index.js"
import {motion} from 'framer-motion'


const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 
            initial={{opacity:0,y:-100}}
            whileInView={{opacity:1,y:0}}
            tranisition={{duration:0.5}}
            className='my-20 text-center text-4xl'>Projects</motion.h2>
            <div>
            {
                PROJECTS.map((items, index) => {
                    return(
                        <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                            <motion.div 
                            initial={{opacity:0,x:-100}}
                            whileInView={{opacity:1,x:0}}
                            tranisition={{duration:1}}
                            className='w-full lg:w-1/4 '>
                                <img src={items.image} alt="projimg" width={150} height={150} className='mb-6 rounded' />
                            </motion.div>
                            <motion.div
                            initial={{opacity:0,x:100}}
                            whileInView={{opacity:1,x:0}}
                            tranisition={{duration:1}}
                            className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{items.title}</h6>
                                <p className='mb-4 text-neutral-400'>{items.description}</p>
                                {items.technologies.map((techs,index)=>{
                                    return(
                                            <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{techs}</span>
                                    )
                                })}
                            </motion.div>
                        </div>
                    )})
            }
            </div>

                        
    </div>
    )
}

export default Projects