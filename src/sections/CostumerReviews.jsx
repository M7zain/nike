import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CostumerReviews = () => {
  return (
      <section className='flex flex-col items-center'> 
              
              <h1 className='capitalize font-palanquin font-bold text-4xl'>
                What our <span className='text-coral-red'>customers</span> say?
              </h1>
              <p className='font-montserrat leading-normal mt-5 text-slate-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis dol</p>
              
              <div className='flex max-lg:flex-col '>
                {reviews.map((review) => (
                  <ReviewCard key={review.customerName} { ...review}/>
                ))}
              </div>
      </section>
    )
}

export default CostumerReviews