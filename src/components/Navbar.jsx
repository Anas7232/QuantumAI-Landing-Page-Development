import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion"

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center flex-shrink-0'>
                        <img className='w-10 h-10 mr-2' src={logo} alt="logo" />
                        <span className='text-xl tracking-light'>QuantumAI</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    onHoverStart={e => {}}
                                    onHoverEnd={e => {}}
                                className='hover:text-purple-700 transition ease-in-out duration-700' href={item.href}>{item.label}</motion.a>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden lg:flex justify-center items-center space-x-12'>
                        <a href="#" className='py-2 px-3 border rounded-md tracking-tight hover:bg-purple-900 border-purple-900 transition duration-200'>
                            Sing In
                        </a>
                        <a href="#" className='bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md'>
                            Create Account
                        </a>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {mobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileOpen && (
                    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-3'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6 py-3'>
                            <a href="#" className='py-2 px-3 tracking-tight hover:bg-purple-900 border border-purple-900 rounded-md transition duration-200'>
                                Sing In
                            </a>
                            <a href="#" className='bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md'>
                                Create Account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
