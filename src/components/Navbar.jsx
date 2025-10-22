import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'


const Navbar = () => {
    return (
        <nav className='flex items-center justify-between'>
            <div className='flex items-center justify-center'>
                <h1 className='font-bold text-white m-6 text-3xl'>Ff</h1>
            </div>

            <div className='flex items-center justify-center gap-4 py-3 m-6'>
                <a href="https://www.linkedin.com/in/farhan-fazil-4629a8190/" target="_blank" >
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/farhan-fazil-4629a8190/" target="_blank">
                <FaLinkedin/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
