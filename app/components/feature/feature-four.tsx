
'use client'
import React, { useState } from 'react'
import { Container } from '../ui/container'
import { Heading } from '../ui/heading'
import { SubHeading } from '../ui/subHeading'
import { Button } from '../ui/button'
import Image from 'next/image'
import uxdesign from '../../../public/uxdesign.png'
export const FourFeature = () => {
    const list = [
        {
            title: "UX & Design",
            ul: {
                li1: 'Build low-fi wireframes',
                li2: 'Involve stakeholders in the design phase'
            }
        },

        {
            title: "Marketing",
            description: "Diagramming the good."
        },

        {
            title: "Product Managment",
            description: "Meetings are schedule on the workshops."
        },

        {
            title: "Engineering",
            description: "Diagramming the good."
        },

        {
            title: "Consultants",
            description: "Meetings are schedule on the workshops."
        },
        {
            title: "Engineering",
            description: "Diagramming the good."
        },

        {
            title: "Consultants",
            description: "Meetings are schedule on the workshops."
        },
        {
            title: "Engineering",
            description: "Diagramming the good."
        },

      

    ]

    const [topic, setTopic] = useState(list[0])
    return (

        <Container className='flex flex-col justify-center md:py-15' >
            <div className="mx-auto ">
                <div className="itmes-start">
                    <Heading className=''>
                        Built for all kinds of teams
                    </Heading>
                </div>

                <div className="mt-5">
                    {
                        list.map((el, id) => {
                            return (
                                <Button className='border border-neutral-300 rounded-full  md:p-2 m-2' key={id} onClick={() => setTopic(el)}>
                                    {
                                        el.title
                                    }
                                </Button>
                            )
                        })
                    }


                   <div className="flex flex-col md:flex-row justify-between md:gap-10 md:py-4 ">
                        <div className="overflow-hidden md:max-w-[165px]">
                            <SubHeading >
                                {
                                    topic.title
                                }
                            </SubHeading>
                            <p className='text-balance text-red-500 -mt-2 text-[18px]'>
                                {
                                    topic.description
                                }
                            </p>
                            <Button className='text-blue-800 pl-0 '>
                                Learn More
                            </Button>
                        </div>

                        <div className="md:w-lg w-[250px] h-44 md:h-80 mx-auto md:mr-12">
                            <Image src={uxdesign} alt='brain storm ' />
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}
