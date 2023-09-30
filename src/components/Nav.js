import React, {useState} from 'react'
import logo from './images/logo1.png'
import login from './images/login.png'
import signin from './images/signup.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Nav = () => {

  const [nav, setNav]= useState(false)


  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=' flex justify-between items-center max-w-[1240px] mx-auto px-4'>
        <img className='h-15 w-27' src={logo} alt='logo' />
        

        <ul className='flex text-2xl list-style-type:none font-extrabold font-body text-blue-800'>
            <li className='p-10'>Home</li>
            <li className='p-10'>About</li>
            <li className='p-10'>Services</li>
            <li className='p-10'>Extra</li>
            <li className='p-10'>Contact</li>
        </ul>
        <div className='flex p-5'>
          <img src={login} className='h-8 w-8'/>
          <img src={signin} className='h-8 w-8' />
        </div>
        
        {/* <div onClick={handleNav}>
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />  }
        </div>
         
        <div className={!nav ? 'fixed left-0 top-0 w-[60%]  p-10  ease-in-out duration-500': ' fixed left-[-100]'}>
         */}
        {/* <ul className=' pt-10 uppercase text-blue-800'>
            <li className=' p-2 border-b border-gray-600'>Home</li>
            <li className=' p-2 border-b border-gray-600'>About</li>
            <li className=' p-2 border-b border-gray-600'>Services</li>
            <li className=' p-2 border-b border-gray-600'>Extra</li>
            <li className=' p-2 border-b border-gray-600'>Contact</li>
        </ul> */}
        
        


    </div>

    

  )
}

export default Nav