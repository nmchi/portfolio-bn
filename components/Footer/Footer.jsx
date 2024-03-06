'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from '../../utils/motion'
import { socials } from '../../constants/index'

const Footer = () => {
    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className='relative sm:p-16 xs:p-8 px-6 py-8'>
            <div className="footer-gradient" />

            <div className='w-full 2xl:max-2-[1280px] mx-auto flex flex-col gap-8'>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
                        Enter Baron Nguyen
                    </h4>
                </div>

                <div className='flex flex-col'>
                    <div className='mb-[50px] h-[2px] bg-white opacity-10' />

                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <Link href={"/"} className='text-lg md:text-5xl text-white font-semibold'>
                            <Image src='/images/logo-bn.png' alt='logo' width={50} height={50} />
                        </Link>

                        <p className='font-normal text-[14px] text-white opacity-50'>Copyright © 2024 - Baron Nguyen. All rights reserved.</p>

                        <div className='flex gap-4'>
                            {socials.map((social, i) => (
                                <Link href={social.link} key={i}>
                                    <img
                                        key={social.name}
                                        src={social.url}
                                        alt={social.name}
                                        className='w-[24px] h-[24px] object-contain cursor-pointer'
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer