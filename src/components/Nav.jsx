import React from 'react'
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks  } from '../constants';
const Nav = () => { 
  return (

    <header className='padding-x py-8 absolute z-10  w-full '>
      <nav className=' flex justify-between items-center max-container'>
        
        <a href="/">
        <img src={headerLogo} 
              alt="logo"
              width={130} 
              height={29}/></a>
        
        <ul className='flex-1 flex gap-16 justify-center items-center padding-x max-xl:hidden '>
            {navLinks.map((link) => (
              <li key={link.label}>
                 <a href={link.href}
                 className='font-montserrat text-slate-gray leading-normal'> {link.label}</a>
                 </li>
            ))}
      </ul>
       
        <div className='hidden max-lg:block'>
              <img src={hamburger} 
              alt="menu" 
              width={25}
              height={25}
              />
        </div>
  
  </nav>


    </header>
    )
}

export default Nav