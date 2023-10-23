import React from 'react'
import book from './icons/book.png'
import brain from './icons/brain.png'
import colab from './icons/colab.png'
import img1 from './images/banner-img1.jpg'
import kno from './icons/kno.png'

const About = () => {
  return (
    <div className='font-body w-full h-full py-16 px-4' id='about'>
        
          <div className='max-w-[1240px] mx-auto my-40 flex justify-between'>
            
            <div className='p-10'>
              <h1 className=' text-4xl uppercase text-black-800'> About us </h1>
              <p className='pt-10 text-2xl text-blue-700 justify-start'>Ex et sit laboris sit cillum qui aliqua ipsum sit ad sunt sint reprehenderit quis. Esse nostrud reprehenderit qui nisi sit non. Consectetur aute excepteur est labore aute nisi et voluptate.  </p>
              <div className='flex pt-6 justify-between'>
                <img className=' h-10' src={brain} />
                <img className=' h-10' src={book} />
                <img className=' h-10' src={kno} />
                <img className=' h-10' src={colab} /> 

              </div>           
            </div>
            <img src= {img1} className='rounded-md w-[700px]' />
            
          </div>
        
         
        
    </div>
  )
}

export default About