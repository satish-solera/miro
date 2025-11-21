
'use client'
import React from 'react'
import { Container } from './container'
import { Heading } from './ui/heading'
import { SubHeading } from './ui/subHeading'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

import brainstorm from '../../public/brainstorm.png'
export const Hero = () => {
    return (
        <div className='flex  items-center'>
            <Container className='py-8 flex flex-col md:flex-row gap-6 itmes-center justify-between' >
                <div className="md:gap-y-10">
                    <Heading as='h2' >
                        Take ideas from <br /> better to best
                    </Heading>
                    <SubHeading as='h3' className='py-4'>
                        Miro is your teams's visual platform to connect, <br />
                        colloborate, and create - together.
                    </SubHeading>

                    <Button className='bg-blue-600 md:text-xl text-white md:px-[107px] md:py-1  p-2 '>
                        Sign up free
                    </Button>

                 
                    <div className="flex gap-6 items-center bg-gray-200/80  max-w-[300px] rounded-sm mt-10 px-2">
                        <div className="flex flex-col "


                        >
                            <span>start</span>
                            <span className='text-xs '>Based on 5149+ reviews</span>
                        </div>

                        <SubHeading as='h4' className='font-bold'>
                            GetApp
                        </SubHeading>

                        <SubHeading as='h4' className='font-bold'>
                            Capterra
                        </SubHeading>
                    </div>
                </div>

                <div className=" flex flex-col ">
                    <div className="md:w-lg md:h-60 w-[250px] h-44 mx-auto md:mx-0 mt-0 ">
                     <Image src={brainstorm} alt='brain storm hero image' />
                    </div>
                    {/* <div className="md:w-lg md:h-16  py-2 grid grid-cols-1 md:grid-cols-3 gap-1 items-center "

                    >
                        <BottomImg>
                            1
                        </BottomImg>
                        <BottomImg>
                            2

                        </BottomImg>
                        <BottomImg>
                            3
                        </BottomImg>

                    </div> */}
                </div>

            </Container>
        </div>
    )
}


export const BottomImg = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div className="border h-full w-full rounded-md"
        >
            {
                children
            }
        </motion.div>
    )
}
