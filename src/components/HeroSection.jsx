import React from 'react'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
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

const HeroSection = () => {
    return (
        <div className='flex flex-col mt-4 items-center lg:mt-19'>
            <motion.h1 
                initial={{ y:-100, opacity: 0 }}
                animate={{ y: 0, opacity:1 }}
                transition={{ duration: 1, delay: 0.5 }}
            className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                QuantumAI Build Tools
                <span className='bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text'>
                    {" "} For Developers
                </span>
            </motion.h1>
            <motion.p
                initial={{ x:100, opacity: 0 }}
                animate={{ x: 0, opacity:1 }}
                transition={{ duration: 1, delay: 0.5 }}
            className='mt-10 text-sm text-center text-neutral-500 max-w-4xl lg:text-lg'>
                Empower your creativity and bring your VR app ideas to life with our intiutive developement tools. Get started today and turn your imagination into immersive reality!
            </motion.p>
            <div className='flex justify-center my-8'>
                <motion.a
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                href="#" className='bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md'>
                    Start For Free
                </motion.a>
                <a
                href="#" className='py-3 px-4 mx-3 hover:bg-purple-900 transition duration-200 border-purple-900 rounded-md border'>
                    Documentation
                </a>
            </div>
            <div className='mt-10 md:flex md:flex-col lg:flex lg:flex-row justify-center'>
                <motion.img
                    variants={imgVarient(2.5)}
                    initial= "initial"
                    animate= "animate"
                src={banner1} alt="banner1" className='rounded-lg lg:w-1/2 md:flex md:w-full lg:flex mx-2 my-4 ' />
                <div className='flex flex-col mt-4'>
                    <motion.h1
                        initial={{ x:100, opacity: 0 }}
                        animate={{ x: 0, opacity:1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    className='text-xl lg:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text sm:text-4xl ml-10 py-10'> IntelliBot </motion.h1>
                    <motion.p
                        initial={{ x:100, opacity: 0 }}
                        animate={{ x: 0, opacity:1 }}
                        transition={{ duration: 1, delay: 1 }}
                    className='text-neutral-500 ml-10 text-sm lg:text-lg' >
                        QuantumAI is at the forefront of artificial intelligence innovation, delivering cutting-edge solutions that transform the way businesses operate and individuals interact with technology. Our AI-driven platforms harness the power of advanced algorithms, machine learning, and deep learning to provide intelligent automation, predictive analytics, and personalized experiences.
                        With a focus on scalability, security, and ethical AI practices, we empower organizations to unlock new levels of efficiency, accuracy, and insight. Whether it's streamlining processes, enhancing decision-making, or driving innovation,
                    </motion.p>
                    <motion.a
                        initial={{ x:100, opacity: 0 }}
                        animate={{ x: 0, opacity:1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    href="#" className='py-3 px-4 mt-10 w-52 text-center ml-10 mx-3 hover:bg-purple-900 transition duration-200 border-purple-900 rounded-md border'>
                        Read More....
                    </motion.a>
                </div>
            </div>

            <div className='mt-10 md:flex md:flex-col lg:flex lg:flex-row justify-center'>
                <div className='flex flex-col mt-4'>
                    <motion.h1
                        initial={{ x:-100, opacity: 0 }}
                        animate={{ x: 0, opacity:1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    className='text-xl lg:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text sm:text-4xl ml-10 py-10'> SynthAI </motion.h1>
                    <motion.p
                        initial={{ x:-100, opacity: 0 }}
                        animate={{ x: 0, opacity:1 }}
                        transition={{ duration: 1, delay: 1 }}
                    className='text-neutral-500 ml-10 text-sm lg:text-lg' >
                        QuantumAI is at the forefront of artificial intelligence innovation, delivering cutting-edge solutions that transform the way businesses operate and individuals interact with technology. Our AI-driven platforms harness the power of advanced algorithms, machine learning, and deep learning to provide intelligent automation, predictive analytics, and personalized experiences.
                        With a focus on scalability, security, and ethical AI practices, we empower organizations to unlock new levels of efficiency, accuracy, and insight. Whether it's streamlining processes, enhancing decision-making, or driving innovation, 
                    </motion.p>
                    <motion.a
                        initial={{ x:-100, opacity: 0 }}
                        animate={{ x: 0, opacity:1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    href="#" className='py-3 px-4 mt-10 w-52 text-center ml-10 mx-3 hover:bg-purple-900 transition duration-200 border-purple-900 rounded-md border'>
                        Read More....
                    </motion.a>
                </div>
                <motion.img
                    variants={imgVarient(2.5)}
                    initial= "initial"
                    animate= "animate"
                src={banner2} alt="banner2" className='rounded-lg lg:w-1/2 md:flex md:w-full lg:flex mx-2 my-4 ' />
            </div>
        </div>
    )
}

export default HeroSection
