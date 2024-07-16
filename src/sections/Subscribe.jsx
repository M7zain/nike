import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='flex max-lg:flex-col justify-between items-center padding-x'>
      <h1 className='font-palanquin font-bold capitalize text-4xl max-w-md'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h1>
      
      <div className='flex w-[40%]  sm:border border-slate-gray items-center gap-5 mt-10
      max-lg:w-full  sm:border-slate-gray rounded-full p-1 '>
        <input type="email" placeholder='your@email.com' className='input ml-3'/>
        <div className='flex sm:justify-end items-center 
        max-sm:w-full'>
          <Button label="Sign Up!" fullwidth />
        </div>
     </div>
      
    </section>
  )
}

export default Subscribe