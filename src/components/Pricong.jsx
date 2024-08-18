import React from 'react'
import { CheckIcon } from 'lucide-react'
import { pricingOptions } from '../constants'

const Pricong = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider'> Pricing </h2>
        <div className='flex flex-wrap'>
            { pricingOptions.map((option, index) => (
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2' key={index}>
                    <div className='p-10 border border-purple-700 rounded-xl'>
                        <p className='text-4xl mb-8'> 
                            {option.title} 
                            {option.title === "Pro" && (
                                <span className='bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent text-xl mb-4 ml-2'> (Most Popular) </span>
                            )}
                        </p>
                        <p className="mb-8">
                            <span className='text-5xl mt-6 mr-2'> {option.price} </span>
                            <span className='text-neutral-400 tracking-tight'> /Month </span>
                        </p>
                        <ul>
                            { option.features.map((feature, index) => (
                                <li className='mt-8 items-center flex' key={index}>
                                    <CheckIcon />
                                    <span className='ml-2'> { feature } </span>
                                </li>
                            )) }
                        </ul>
                        <a href="#" className='inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-900 border border-purple-900 rounded transition duration-200'> Join Now </a>
                    </div>
                </div>
            )) }
        </div>
    </div>
  )
}

export default Pricong
