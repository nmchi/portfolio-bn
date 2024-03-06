'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import { motion } from 'framer-motion'
import { navVariants } from '../../utils/motion'

const navLinks = [
    {
        title: 'About',
        path: '#about',
    },
    {
        title: 'Projects',
        path: '#projects',
    },
    {
        title: 'Contact',
        path: '#contact',
    },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className='sm:px-16 px-6 py-4 relative'>
            <div className='absolute w-[50%] inset-0 gradient-01' />

            <div className='lg:w-[80%] w-[100%] mx-auto flex justify-between gap-8 items-center'>
                <Link href={"/"} className='text-lg md:text-5xl text-white font-semibold'>
                    <Image src='/images/logo-bn.png' alt='logo' width={50} height={50} />
                </Link>

                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <NavLinks href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className='mobile-menu md:hidden z-20'>
                    {!isOpen ? (
                        <button onClick={() => setIsOpen(true)} className='flex items-center px-1 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ) : (
                        <button onClick={() => setIsOpen(false)} className='flex items-center px-1 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )}
                </div>
            </div>

            {isOpen ? <MenuOverlay links={navLinks} /> : <></>}
        </motion.nav>
    )
}

export default NavBar