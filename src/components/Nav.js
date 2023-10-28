import React, {useState} from 'react'
import logo from './images/logo1.png'
import login from './images/login.png'
import signin from './images/signup.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { BrowserRouter, Link, Hash } from 'react-router-dom'
import Home from './Home'

const Nav = () => {

  const [nav, setNav]= useState(true);


  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <header className='w-screen sticky z-20 top-0 shadow-md font-body flex justify-between items-center px-5' id='nav'>
        <a href='#nav' ><img className='h-15 w-27' src={logo} alt='logo' /></a>
        <ul className='hidden md:flex  uppercase text-2xl list-style-type:none  font-extrabold font-body text-blue-900'>
            <li className='p-10 hover:text-red-400'>
              <a href='#home'>Home </a>
            </li>
            
            <li className='p-10  hover:text-red-400'>
              <a href='#service'>Services </a> 
            </li>
            <li className='p-10  hover:text-red-400'>
              <a href='#extra'>Idea</a>  
            </li>
            <li className='p-10  hover:text-red-400'>
              <a href='#about'>About </a>
            </li>
            <li className='p-10  hover:text-red-400'>
              <a href='#contact'>Contact </a>
            </li>
        </ul>
        <div className='flex p-5'>
          <img src={login} className='h-8 w-8'/>
          <img src={signin} className='h-8 w-8' />
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={30} /> :  <AiOutlineMenu size={30} /> }
        </div>
        <div className= {!nav ? 'fixed top-0 pt-[100px] w-[60%] h-full left-0 font-body ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className=' uppercase font-extrabold'>
            <li className='p-10 hover:underline'>
              <a href='#homet'>Home </a>
            </li>
            <li className='p-10'>
              <a href='#about'>About </a>
            </li>
            <li className='p-10'>
              <a href='#service'>Services </a> 
            </li>
            <li className='p-10'>
              <a href='#extra'>Extra </a>  
            </li>
            <li className='p-10'>
              <a href='#contact'>Contact </a>
            </li>
          </ul>
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
        
    </header>
  )
}

export default Nav