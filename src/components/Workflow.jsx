import React from 'react'
import { CheckCircle } from 'lucide-react';
import codeimg from '../assets/code.png';
import { checklistItems } from '../constants';
import { motion } from "framer-motion"

const imgVarient = (duration) => (
    {
        initial: { y: -15 },
        animate: {
            y: [ 15, -15 ],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }
)

const Workflow = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'> Accelrate your 
            <span className='bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent'>
             {" "} coding workflow.
            </span>    
        </h2>
        <div className='flex flex-wrap justify-center'>
            <div className='p-2 w-full lg:w-1/2 '>
                <motion.img
                    variants={imgVarient(2.5)}
                    initial= "initial"
                    animate= "animate"
                src={codeimg} alt="Codeimg" />
            </div>
            <div className='pt-12 w-full lg:w-1/2 '>
               {checklistItems.map((item, index) => (
                    <div key={index} className='flex mb-10'>
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                            <CheckCircle />
                        </div>
                        <div>
                            <h5 className='mt-1 mb-2 text-xl'> {item.title} </h5>
                            <p className='text-md text-neutral-500'> {item.description} </p>
                        </div>
                    </div>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow
