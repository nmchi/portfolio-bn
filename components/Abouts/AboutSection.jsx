'use client'

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import { motion } from 'framer-motion';
import Tab from './Tab';
import { fadeIn, planetVariants, staggerContainer } from '../../utils/motion';
import { TitleText, TypingText } from '../TextStyles/CustomText';

const tabData = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='flex flex-col gap-2'>
                <li className='flex'>
                    <Image width={20} height={20} alt='js' src='/images/icons/js.svg' className='mr-3' />
                    JavaScript, Java Spring Boot
                </li>
                <li className='flex'>
                    <Image width={20} height={20} alt='react' src='/images/icons/react.svg' className='mr-3' />
                    ReactJs, Redux
                </li>
                <li className='flex'>
                    <Image width={20} height={20} alt='next' src='/images/icons/next.svg' className='mr-3' />
                    NextJs
                </li>
                <li className='flex'>
                    <Image width={20} height={20} alt='db' src='/images/icons/database-solid.svg' className='mr-3' />
                    MySQL, PostgreSQL, MongoDB
                </li>
                <li className='flex'>
                    <Image width={20} height={20} alt='php' src='/images/icons/php.svg' className='mr-3' />
                    PHP
                </li>
                <li className='flex'>
                    <Image width={20} height={20} alt='wp' src='/images/icons/wordpress-simple.svg' className='mr-3' />
                    WordPress
                </li>
                <li className='flex'>
                    <Image width={20} height={20} alt='taild' src='/images/icons/tailwind-css-svgrepo-com.svg' className='mr-3' />
                    TailWind CSS
                </li>
                <li className='flex'>
                    <Image width={20} height={20} alt='infinit' src='/images/icons/infinity-solid.svg' className='mr-3' />
                    HTML, CSS, Bootstrap, SCSS
                </li>
                <li className='flex'>
                    <Image width={20} height={20} alt='git' src='/images/icons/gitlab.svg' className='mr-3' />
                    Github, GitLab, 
                </li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='flex flex-col gap-2'>
                <li className='flex'>
                    <Image width={20} height={20} alt='edu' src='/images/icons/graduation-cap-solid.svg' className='mr-3' />
                    Thai Nguyen University of Information and Communication Technology</li>
                <li className='flex'>
                    <Image width={20} height={20} alt='maj' src='/images/icons/laptop-code-solid.svg' className='mr-3' />
                    Major: Information Technology
                </li>
                <li className='flex'>
                    <Image width={15} height={15} alt='gpa' src='/images/icons/score-total.svg' className='mr-4' />
                    GPA: 2.51
                </li>
            </ul>
        )
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    };

    return (
        <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10' id='about'>
            <div className='gradient-02 z-0' />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='w-full 2xl:max-w-[1280px] mx-auto flex lg:flex-row flex-col gap-8'>
                
                <motion.div
                    variants={planetVariants('left')}
                    className='flex flex-1 justify-center flex-col'>
                    <Image
                        width={0}
                        height={0}
                        sizes='100vw'
                        src='/images/about.png'
                        alt='about me'
                        className='w-full h-full object-contain'
                    />
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className='flex-[0.75] flex justify-center flex-col'>

                    <TypingText title="| About Me" textStyles="text-left" />
                    <div className='mt-[31px] flex flex-col gap-[24px]'>
                        <p className='text-base text-white lg:text-lg'>
                            I am a web developer with a passion for creating interactive and responsive 
                            web applications. I have experience working with JavaScript, ReactJs, Redux, 
                            NextJs, MySQL, PostgreSQL, MongoDB, Sequelize, PHP, WordPress, HTML, CSS, 
                            TailWind CSS, and Git. I am a quick learner and I am always looking to expand
                            my knowledge and skill set. I am a team player and I am excited to work with
                            others to create amazing applications.
                        </p>

                        <div className='flex flex-row justify-start mt-8'>
                            <Tab selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                                {" "}Skills{" "}
                            </Tab>
                            <Tab selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                                {" "}Education{" "}
                            </Tab>
                        </div>

                        <div className='mt-8 text-white'>
                            {tabData.find((t) => t.id === tab).content}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default AboutSection