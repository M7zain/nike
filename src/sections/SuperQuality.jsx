import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' 
    className='flex justify-between items-center
     max-lg:flex-col gap-10 w-full max-container'>
        <div className='flex flex-1 flex-col '>
        
                  <h2 className='mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg'>
                    we provide you
                    <br />
                    <span className='text-coral-red inline-block mt-3'>Super </span> 
                     <span className='text-coral-red '> Quality </span>
                     shoes
                    </h2>
                    <p className='mt-4 lg:max-w-lg info-text'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    In dicta, exercitationem obcaecati perferendis culpa 
                    deserunt ratione hic quidem aspernatur quisquam mollitia
                     consectetur quasi debitis, provident dolorem!
                      Officiis nostrum praesentium perspiciatis?</p>
                      <p className='mt-6 lg:max-w-lg info-text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
                         in cumque eligendi molestiae praesentium 
                      </p>
                   <div className='mt-11'>
                      <Button label="View Details"  />
                   </div>
                    
        </div>

        <div className='flex-1 flex justify-center items-center '>
          <img src={shoe8} 
          alt="shoe8"
          width={570}
          height={522} />
        </div>
    </section>
    )
}

export default SuperQuality