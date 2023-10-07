import React from 'react'
import img1 from './images/pngtree-overshoot-computer-desktop-background-image_259786.jpg'
import img2 from './images/TMC9-AdobeStock_97492164.webp'

const Home = () => {
  return (
    <div className=' bg-slate-400 w-full h-[890px]' id='home'>
        <div>
          <div className=' flex p-20 justify-between'>
            <img src= {img2} className='rounded-md w-[800px]' />
            
            <p className=' font-body font-bold '>
              this is text hello we are flexible 
            </p>
          </div>
          
          <div>
          <p className=' font-body font-bold'>
              This is text
            </p>
            <img src= {img1} className='rounded-md '/>          
          
          </div>
           
        
        </div>
        
         
        
    </div>
  )
}

export default Home