import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'
import fb from './icons/fb.png'
import ln from './icons/ln.png'
import ig from './icons/ig.png'
import git from './icons/git.png'

const Footer = () => {
  return (
    
    <div className="h-[250px] p-5" id='contact'>
      
        <div className='flex justify-between mt-[150px]'>
          <div>
            <p className=' font-body text-3xl'>info@bisharod.com</p>
          </div>
          
          <div className='flex space-x-3 '>
          <a href='https://github.com/' className='w-8 h-8' target='_blank'><img src={git} /> </a>
            <a href='https://facebook.com/' className='w-8 h-8' target='_blank'><img src={fb} /> </a>
            <a href='https://linkedin.com/' className='w-8 h-8' target='_blank'><img src={ln} /> </a>
            <a href='https://instagram.com/' className='w-8 h-8' target='_blank'><img src={ig} /> </a>
            
          </div>
        </div>

      
      
    </div>
    
    
    
    
  )
}

export default Footer