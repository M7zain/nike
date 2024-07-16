import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
const SpecialOffer = () => {
  return (
      <section className='flex justify-wrap items-center
      max-xl:flex-col-reverse gap-10 w-full max-container'>
        <div className='flex-1'> 
            <img src={offer} alt="special offer" width={773} height={687} className='object-contain w-full'/>
         
        </div>
        <div className='flex-1 flex flex-col'>
   
        <h2 className='font-palanquin font-bold text-4xl'>
              <span className='text-coral-red'>Special</span> Offer
            </h2>
            <p className='mt-5 font-montserrat text-slate-gray'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Inventore ratione, nobis alias saepe optio repellat 
              at debitis libero voluptatibus.
            </p>
            <p className='mt-5 font-montserrat text-slate-gray'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Quod aliquid blanditiis eaque asperiores, quidem reiciendis
                sit quaerat minima pariatur recusandae at ipsam laborum quos dolores, 
                inventore, praesentium porro distinctio explicabo!
            </p>

          <div className='mt-10 flex '>
            <Button label="Shop now" iconURL={arrowRight}/>
            <button className='ml-10 border-2 border-gray-200 px-10 rounded-full 
            font-montserrat text-slate-gray'> Learn more</button>
          </div>
        </div>
        
      </section>
  )
}

export default SpecialOffer