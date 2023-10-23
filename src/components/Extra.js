import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Extra = () => {
  return (
    <div className='font-body w-full h-full py-16 px-4 ' id='extra'>

      <div className=' flex max-w-[1240px] mx-auto my-40 justify-between '>
        
        <Card className=' p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center'>
          <CardHeader className=' uppercase text-3xl'> idea </CardHeader> 
          
        </Card>
        <Card className=' p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center'>
          <CardHeader className=' uppercase text-3xl'> idea </CardHeader> 
          
        </Card>
        <Card className=' p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center'>
          <CardHeader className=' uppercase text-3xl'> idea </CardHeader> 
          
        </Card>
        <Card className=' p-10 w-[300px] h-[400px] rounded-md bg-orange-200 justify-center'>
          <CardHeader className=' uppercase text-3xl'> idea </CardHeader> 
          
        </Card> 
      </div>
        
    </div>

  )
}

export default Extra