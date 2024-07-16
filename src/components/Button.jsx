import React from 'react'

const Button = ({ label, iconURL ,fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg 
    leadin-none bg-coral-red rounded-full text-white border-coral-red ${fullwidth && 'w-full'}`} >
           {label}
           {iconURL && <img src={iconURL} alt="arrow right icon"
           className='ml-2 rounded-full w-6 h-6 ' />}
    </button>
  )
}

export default Button