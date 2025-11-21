
'use client'

import React from 'react'
import { Container } from '../container'
import { Heading } from '../ui/heading'
import { cn } from '../../utils/utils'
import { SubHeading } from '../ui/subHeading'
import { Button } from '../ui/button'
import Image from 'next/image'


import hybridwork from '../../../public/hybridwork.png'
import { motion } from 'framer-motion'


export const WorkSection = () => {
    return (
        <Container className='flex md:flex-row flex-col h-[350px] justify-center gap-x-5 py-5 md:pt-10'>
            <div className="">
                <Heading as='h3'>
                    Work Together, <br />
                    Wherever you work
                </Heading>

                <motion.div className=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5 }}
                >

                    <SubHeading>
                        In the office,remote, or a mix of the two, with Miro, <br />
                        your team can connect, colloborate, and co-create in <br />
                        one space no matter where you are.

                    </SubHeading>
                </motion.div>
                <Button className='underline text-blue-500'>
                    Learn more
                </Button>
            </div>
            <div className=" md:-translate-y-20 mx-3 gap-2 ">
                {/* <Card /> */}

                {/* <div className="flex flex-col md:gap-y-12 relative"> */}
                {/* <Card className='my-8 md:-my-8' />
                    <div className="flex justify-center items-center relative mx-4">
                        <Circle className=' border-2 border-blue-800 z-0'></Circle>
                        <Circle className='-translate-x-4 z-1 border-2 border-white bg-amber-200'></Circle>
                        <Circle className='-translate-x-7 border-2 border-gray-500 z-2 itmes-center bg-white text-black' >
                            +98
                        </Circle>
                    </div>
                </div>

                <Card  className='-mt-16 md:mt-0'/> */}

                <Image src={hybridwork} alt='hybrid work' height={400} width={400} />
            </div>
        </Container>
    )
}


export const Card = ({ children, className }: {
    children?: React.ReactNode,
    className?: string,

}) => {
    return (
        <div className={cn("w-28 h-54 bg-amber-400 rounded-md", className)}>
            first
        </div>
    )
}

export const Circle = ({ children, className, text }: { children?: React.ReactNode, className?: string, text?: string }) => {
    return (
        <div className={cn("flex justify-center size-9 rounded-full text-xs items-center", className)}>
            {
                children
            }
        </div>
    )
}
