'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { socials } from '../../constants';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { TypingText } from '../TextStyles/CustomText';

const SendEmail = () => {
    const [email, setEmail] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/email";
        const options = {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if (response.status === 200) {
            console.log('Message send.');
            setEmail(true);
        }
    }

    return (
        <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10' id='contact'>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='w-full 2xl:max-w-[1280px] mx-auto flex lg:flex-row flex-col gap-8'>
                <motion.div>
                    <TypingText title="| Let's Connect" />

                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 1)}
                        className='flex-[0.75] flex justify-center flex-col'>
                        <p className='text-[#adb7be] mb-4 max-w-md'>
                            I'm currently looking for new opportunities, my inbox is always open.
                            Whether you have a question or just want to say hi, I'll try my best
                            to get back to you!
                        </p>

                        <div className='socials flex flex-row gap-2 items-center'>
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
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className='flex-1 flex justify-center flex-col'>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <div className='mb-6'>
                            <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>
                                Your Email
                            </label>

                            <input
                                name='email'
                                type='email'
                                id='email'
                                required
                                placeholder='jacob@gmail.com'
                                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            />
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='subject' className='text-white mb-2 block text-sm font-medium'>
                                Subject
                            </label>

                            <input
                                name='subject'
                                type='text'
                                id='subject'
                                required
                                placeholder='Just saying hi'
                                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            />
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='message' className='text-white mb-2 block text-sm font-medium'>
                                Message
                            </label>

                            <textarea
                                name='message'
                                id='message'
                                required
                                placeholder="Let's talk about ..."
                                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            />
                        </div>

                        <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                            Send Message
                        </button>

                        {email && (
                            <p className='text-green-500 text-sm mt-2'>
                                Email send successfully!
                            </p>
                        )}
                    </form>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default SendEmail