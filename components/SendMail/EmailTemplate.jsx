'use client'

import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { socials } from '../../constants';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { TypingText } from '../TextStyles/CustomText';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

const EmailTemplate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const route = useRouter();

    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, message
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.ok) {
                toast.success('Sendding successfully !');
            } else {
                toast.error('Something went wrong!');
            }
        } catch (error) {
            toast.error('An error occurred!');
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

                        {/* <div className='socials flex flex-row gap-2 items-center'>
                            {socials.map((social, i) => (
                                <Link href={social.link} key={i}>
                                    <Image
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        key={social.name}
                                        src={social.url}
                                        alt={social.name}
                                        className='w-[24px] h-[24px] object-contain cursor-pointer'
                                    />
                                </Link>
                            ))}
                        </div> */}
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className='flex-1 flex justify-center flex-col'>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <div className='mb-6'>
                            <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>
                                Your name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={name}
                                placeholder='Enter your name.'
                                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='subject' className='text-white mb-2 block text-sm font-medium'>
                                Your email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                placeholder='email@example.com'
                                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='message' className='text-white mb-2 block text-sm font-medium'>
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                value={message}
                                placeholder="Enter your messages for me..."
                                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default EmailTemplate