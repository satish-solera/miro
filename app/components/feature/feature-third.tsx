
'use client'
import React, { useState } from 'react'
import { Container } from '../container'
import { Heading } from '../ui/heading'
import { Button } from '../ui/button'
import { SubHeading } from '../ui/subHeading'
import Image from 'next/image'
import brainstorm from '../../../public/brainstorm.png'
import { motion } from 'motion/react'
motion
export const ThirdFeature = () => {
    const list = [
        {
            title: "Brainstorming",
            description: "Unleash creative ideas and build on."
        },

        {
            title: "Diagramming",
            description: "Diagramming the good."
        },

        {
            title: "Metting & Workshops",
            description: "Meetings are schedule on the workshops."
        },

        {
            title: "Scrum Events",
            description: "Diagramming the good."
        },

        {
            title: "Mapping",
            description: "Meetings are schedule on the workshops."
        },
        {
            title: "Research & Design",
            description: "Diagramming the good."
        },

        {
            title: "Strategic Planning",
            description: "Meetings are schedule on the workshops."
        },




    ]

    const [topic, setTopic] = useState(list[0])

    return (

        <Container className='flex flex-col justify-center  ' >
            <div className="mx-auto">
                <div className="">
                    <Heading className=''>
                        Built for the way you work
                    </Heading>
                </div>

                <div className="mt-5">
                    {
                        list.map((el, id) => {
                            return (
                                <Button className='border border-neutral-300 rounded-full md:p-2 m-2 ' key={id} onClick={() => setTopic(el)}>

                                    {
                                        el.title
                                    }

                                </Button>
                            )
                        })
                    }


                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-10 md:py-4 ">
                        <div className="overflow-hidden md:max-w-[165px]">
                            <SubHeading>
                                {
                                    topic.title
                                }
                            </SubHeading>
                            <p className=' text-balance'>
                                {
                                    topic.description
                                }
                            </p>
                            <Button className='text-blue-800 pl-0'>
                                Learn More
                            </Button>
                        </div>

                        <div className="md:w-lg w-[250px] h-44 md:h-80 mx-auto md:mr-12">
                            <Image src={brainstorm} alt='brain storm ' />
                        </div>
                    </div>

                </div>
            </div>
        </Container>

    )
}



