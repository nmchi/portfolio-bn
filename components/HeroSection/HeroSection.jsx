'use client'

import Image from 'next/image'
import React from 'react'
import TextAnimation from './TextAnimation'
import { motion } from 'framer-motion'
import { fadeIn, planetVariants, slideIn, staggerContainer, textVariant } from '../../utils/motion'
import { saveAs } from 'file-saver'

const HeroSection = () => {
    function downloadCV () {
        saveAs('/Nguyen-Minh-Chi_FE2.pdf', 'NguyenMinhChi-CV.pdf');
    }

    return (
        <section className='sm:pl-16 pl-6 sm:py-16 xs:py-8 px-6 py-12'>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='w-full 2xl:max-w-[1280px] mx-auto flex lg:flex-row flex-col gap-8'>

                <motion.div
                    className='col-span-7 place-self-center text-center sm:text-left'>
                    <motion.h1
                        variants={textVariant(1.1)}
                        className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm{" "}</span>
                        <br/>
                        <TextAnimation />
                    </motion.h1>

                    <motion.p
                        variants={textVariant(1.2)}
                        className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
                        I am a front end developer, passionate about creativity and always looking for new ideas. 
                        I have experience working on many different projects, from user interface design for mobile 
                        applications to complex website development.
                    </motion.p>

                    <motion.div
                        variants={textVariant(1.2)}>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                        <button onClick={downloadCV} className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border border-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download CV
                            </span>
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className='flex flex-1 justify-center flex-col items-center'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/hero.png"
                            alt='hero'
                            width={500}
                            height={500}
                            className='w-full h-full object-contain'
                        />
                    </div>
                </motion.div>
            </motion.div>
            
            <motion.div
                variants={slideIn('right', 'tween', 0.25, 1)}
                className='mx-auto text-center my-10'>
                <motion.p
                    variants={textVariant(1.4)}
                    className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
                    Scroll down to see my portfolio
                </motion.p>
                <motion.img
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    src='/images/icons/arrow-down.svg'
                    alt='arrow down'
                    className='mx-auto w-[18px] h-[28px] object-contain mt-[28px]'
                />
            </motion.div>
        </section>
    )
}

export default HeroSection