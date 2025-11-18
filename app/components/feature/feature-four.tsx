
'use client'
import React, { useState } from 'react'
import { Container } from '../container'
import { Heading } from '../ui/heading'
import { SubHeading } from '../ui/subHeading'
import { Button } from '../ui/button'

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

    ]

    const [topic, setTopic] = useState(list[0])
    return (

        <Container className='md:pl-14' >
            <div className="mx-auto">
                <div className="">
                    <Heading className=''>
                        Built for all kinds of teams
                    </Heading>
                </div>

                <div className="">
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


                    <div className="flex flex-col md:flex-row md:gap-10 md:py-7 ">
                        <div className="overflow-hidden md:max-w-[165px]">
                            <SubHeading>
                                {
                                    topic.title
                                }
                            </SubHeading>
                            <ul className=' text-balance'>
                                {
                                    topic.ul?.li1
                                }
                            </ul>
                            <Button className='text-blue-800 pl-0'>
                                Learn More
                            </Button>
                        </div>

                        <div className="md:w-lg  w-[250px] h-44 md:h-60 bg-red-500 flex-none ml-5">
                            hi
                        </div>
                    </div>

                </div>
            </div>
        </Container>

    )
}
