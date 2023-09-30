import React from 'react'
import img1 from './images/pngtree-overshoot-computer-desktop-background-image_259786.jpg'
import img2 from './images/TMC9-AdobeStock_97492164.webp'

const Home = () => {
  return (
    <div className=' bg-slate-400 h-[890px] p-10'>
        <img src= {img1} className=' relative rounded-md top-[100px]' />
        
        <p className=' '>
        
        left-0 [font-family:'Saira_Condensed-Bold'] font-bold text-[#13293d]">
            There are Heading text ;There are some text
        </p>
         
        <div className=" absolute w-[595px] h-[300px] top-[500px] left-[802px] bg-amber-200 bg-cover bg-[50%_50%] rounded-md">
            <img src= {img2} className=' h-[300px]'/>          
          
        </div>
    </div>
  )
}

export default Home