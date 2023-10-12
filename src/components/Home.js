import React from 'react'
import { useState, useEffect } from 'react'
import img1 from './images/pngtree-overshoot-computer-desktop-background-image_259786.jpg'
import img2 from './images/TMC9-AdobeStock_97492164.webp'

const Home = () => {
  const images = [
    "https://unsplash.com/photos/-Xqckh_XVU4",
    "https://unsplash.com/photos/7esRPTt38nI",
    "https://unsplash.com/photos/NDLLFxTELrU",
    "https://unsplash.com/photos/1xIN4FMR78A"

  ];

  const [currentImage, setCurrentImage] = useState(null);

  
  
  
  return (
    <div className='font-body w-full h-full py-8 px-4' id='home'>
        
          <div className='max-w-[1240px] mx-auto my-40 flex justify-between'>
            <img src= {img2} className='rounded-md w-[800px]' />
            <div className='p-10'>
              <h1 className=' text-4xl uppercase text-black-800'> Lorem heading  </h1>
              <p className='pt-5'>Ex et sit laboris sit cillum qui aliqua ipsum sit ad sunt sint reprehenderit quis. Esse nostrud reprehenderit qui nisi sit non. Consectetur aute excepteur est labore aute nisi et voluptate.  </p>
            </div>
            
          </div>
        
         
        
    </div>
  )
}

export default Home