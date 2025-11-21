'use client'
import React from 'react'
import { Container } from '../container'
import { Heading } from '../ui/heading'
import { Button } from '../ui/button'
import { AnimatePresence, motion } from 'framer-motion'


export const Section = () => {
    return (
        <div>
            <Container className='  md:my-6'>

                <Heading as='h2' className='md:max-w-lg text-center mx-auto'>
                    Collaborate without <br />
                    <span className='px-24'>constraints</span>
                </Heading>
                <div


                    className="flex flex-col md:flex-row gap-2 justify-center py-4">
                    <Para head='Free Forever' para='Our free plan gives you unlimited team members.' />
                    <Para head='Easy integration' para='Miro has 100+ powerfull integration with tools you alredy use like G-suit,slack.' />
                    <Para head='Free Forever' para='Our free plan gives you unlimited team' />

                </div>
                <motion.div



                    className="flex justify-center py-4"
                >
                    <Button className='shadow-brand bg-blue-600 text-white -ml-2 p-2 px-4 justify-center'>Sign up free </Button>
                </motion.div>

            </Container>
        </div>
    )
}


export const Para = ({ head, para }: { head: string, para: string }) => {
    return (
     

            <motion.div
         
                className="max-w-[300px] bg-neutral-100 border border-neutral-200 rounded-md p-1">
                <h1 className='font-bold'>{head}</h1>
                <p>{para}</p>
            </motion.div>
        
    )
}