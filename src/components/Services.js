import React from 'react'
import { useState, useEffect } from 'react'
import aws from './icons/aws.png'
import react from './icons/react.png'
import ms from './icons/msoft.png'
import js from './icons/js.png'
import img from './images/banner-img1.jpg'
import gg from './icons/gog.png'


const Services = () => {
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
  const [currentImage, setCurrentImage] = useState();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])
  
  return (
    <div className='font-body w-full h-full py-16 px-4' id='service'>
        
          <div className='max-w-[1240px] mx-auto my-40 lg:flex justify-between'>
            
            <div className='p-10 '>
              <h1 className=' text-4xl uppercase text-black-800'> services </h1>
              <p className='pt-10 text-2xl text-blue-700 justify-start'>
              Cloud computing, AI and software have a profound impact on human society, transforming the way we live, work, and interact. We are in the partnership with world top tech organizations to bring handful services
              </p>
              <div className='flex pt-10  justify-between'>
                <img className=' h-10' src={ms} />
                <img className=' h-10' src={gg} />
                <img className=' h-10' src={aws} />  
                <img className=' h-10' src={js} /> 
                <img className=' h-10' src={react} />  
              </div>           
            </div>
            <img src= {currentImage} className='rounded-md w-[700px] h-[500px] p-10' />
            
          </div>
        
         
        
    </div>
  )
}

export default Services
