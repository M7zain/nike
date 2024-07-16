import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section>
      <div className='flex max-lg:flex-col justify-between items-center  padding-x mx-10 '> 
       <div className='flex flex-col '>
       <img src={footerLogo} alt="footer-logo " 
        width={100} height={50}/>
       
        <p className='text-slate-gray w-[400px] max-lg:max-w-[250px] mt-4 font-palanquin leading-normal '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae amet minus, libero tempora quibusdam repudiandae? 
        </p>  
        
        <div className='flex mt-6'>
        {
          socialMedia.map((social) => (
             <img src={social.src} alt={social.alt} className='bg-primary rounded-full p-2 mr-4 ' width={35} height={35}/>
          ))
        }
        </div>
       </div>
     

        <div className='flex  max-sm:flex-col'> 
        {
                footerLinks.map((link) => ( 
                  <div className='flex flex-col'>
                    <h4 className='font-montserrat text-primary mr-20 mt-10 mb-5 text-xl '>{link.title}</h4>
                    { link.links.map((linkGroup) => (
                      <a href={linkGroup.link} className='font-palaquin text-slate-gray 
                      text-sm leading-normal mt-2'>{linkGroup.name}</a>
                    ))}
                  </div>
                 
                ))
              }
       
        </div>
   
      </div>
      <div className='flex justify-center '>
        <p className='text-slate-gray font-palanquin mt-20 '>© Copy All rights reserved</p>
    
      </div>
     
    </section>
  )
}

export default Footer