import React from 'react'
import aws from './icons/aws.png'
import react from './icons/react.png'
import ms from './icons/msoft.png'
import js from './icons/js.png'



const Services = () => {
  return (
    <div className=' mt-[50px] h-full p-20 flex justify-between' id='service' >
        <div className=' rounded-md w-[500px] h-[400px] bg-slate-600'>
          </div>

        <div className=" flex justify-between rounded-md p-5 w-[500px] h-[100px]">
            <img src={aws} />
            <img src={ms} />
            <img src={js} />
            <img src={react} />
        </div>    
    </div>
  )
}

export default Services
