import React from 'react'
import book from './icons/book.png'
import brain from './icons/brain.png'
import colab from './icons/colab.png'
import kno from './icons/kno.png'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Idea = () => {
  return (
    <div className='font-body w-full h-full py-16 px-4' id='idea'>
      

      <div className='lg:flex max-w-[1240px] mx-auto my-40 justify-between' >
        
        <div className='p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center items-center'> 
          <h1 className='uppercase text-3xl text-center'> idea </h1>
          <img className='h-10 mx-auto' src={brain} />
          <p className='pt-5 text-xl'>Generate a wide range of ideas or solutions for a specific problem which is a critical driver of economic growth, technological advancement, and societal improvement</p>           
        </div>
        <div className='p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center items-center'> 
          <h1 className='uppercase text-3xl text-center'> learn </h1>
          <img className='h-10 mx-auto' src={book} />
          <p className='pt-5 text-xl'>Whether looking to acquire new skills, gain knowledge in a specific area, or simply expand your horizons, Learning is a lifelong and rewarding process</p>           
        </div>
        <div className='p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center items-center'> 
          <h1 className='uppercase text-3xl text-center'> achieve </h1>
          <img className='h-10 mx-auto' src={kno} />
          <p className='pt-5 text-xl'>Achieving goals and aspirations is a fulfilling and rewarding process that involves careful planning, determination, and hard work.</p>           
        </div>
        <div className='p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center items-center'> 
          <h1 className='uppercase text-3xl text-center'> Collaboration  </h1>
          <img className='h-10 mx-auto' src={colab} />
          <p className='pt-5 text-xl'>Collaboration is a valuable and effective way to achieve common goals which involves shared efforts, resources, and ideas to achieve a mutually beneficial outcome.</p>           
        </div>


        {/* <Card className='p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center'>
          <CardHeader className=' uppercase text-3xl'> idea </CardHeader>
        
          
        </Card>
        <Card className=' p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center'>
          <CardHeader className=' uppercase text-3xl'> idea </CardHeader> 
          
        </Card>
        <Card className=' p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center'>
          <CardHeader className=' uppercase text-3xl'> idea </CardHeader> 
          
        </Card>  */}
      </div>
        
    </div>

  )
}

export default Idea