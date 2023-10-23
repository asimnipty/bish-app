import React from 'react'
import { useState, useEffect } from 'react'
import img1 from './images/pngtree-overshoot-computer-desktop-background-image_259786.jpg'
import img2 from './images/TMC9-AdobeStock_97492164.webp'


const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9uJTIwd2ViJTIwc2VydmljZXN8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60",
    "https://www.sarkarinaukriexams.com/images/import/sne86811832.png",
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFtYXpvbiUyMHdlYiUyMHNlcnZpY2VzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60",
    "https://www.sarkarinaukriexams.com/images/import/sne1586776004.png",
    "https://www.sarkarinaukriexams.com/images/import/sne20464172895.png",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60",
  ];
  const [currentImage, setCurrentImage] = useState(img1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])
  
  
  return (
    <div className='font-body w-full h-full py-16 px-4' id='home'>
        
          <div className='w-full pl-20 py-16 flex justify-between'>
            <img src= {currentImage} className='rounded-md w-[700px] h-[400px]' />
            <div className='p-20'>
              <h1 className=' text-4xl uppercase text-black-800'>Technological Excellence and innovation</h1>
              <p className='pt-10 text-2xl text-blue-700 justify-start'>
              <span className=' text-red-600'>Bisharod</span> refers to the continuous evolution and improvement of computer technology, software, and methodologies to solve complex problems, create new opportunities, and enhance daily lives
              </p>
            </div>
            
          </div>
        
         
        
    </div>
  )
}

export default Home