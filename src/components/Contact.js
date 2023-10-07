import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'
import fb from './icons/fb.png'
import ln from './icons/ln.png'
import ig from './icons/ig.png'


const Contact = () => {
  return (
    
    <div className="h-[250px]" id='contact'>
      
        <div className='flex space-x-6 p-9'>
          <img src={fb} />
          <img src={ln} />
          <img src={ig} />
          
        </div>

      
      
    </div>
    
    
    
    
  )
}

export default Contact