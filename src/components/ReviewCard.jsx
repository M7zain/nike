import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL , customerName, rating, feedback}) => {
  return (
              
      <div className='flex flex-col mt-10 mx-20 items-center '>
      <img src={imgURL} alt={customerName} className='object-cover rounded-full w-[120px] h-[120px] mt-10 '/>

        <p className='font-montserrat text-slate-gray mt-5 max-w-[300px]'>
        {feedback}
        </p>
        <div className='flex justify-center items-center mt-5'>
        <img src={star} alt="star" height={24} width={24}/>
        <p className='font-montserrat text-slate-gray' >({rating})</p>
        </div>
        <p className='font-palaquin font-bold mt-3'>{customerName}</p>
     </div>

   
  )
}

export default ReviewCard