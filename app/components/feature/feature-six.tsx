
'use client'
import React, { useState, useEffect } from 'react'
import { Container } from '../container'
import { Heading } from '../ui/heading'
import { Button } from '../ui/button'
import { SubHeading } from '../ui/subHeading'
import Image from 'next/image'

import profile from '../../../public/profile.png'
import { AnimatePresence, motion } from 'motion/react'
export const SixFeature = () => {

    const [userCount, setUserCount] = useState(45)


    useEffect(() => {
        let count = userCount
        setInterval(() => {
            count++
        }, 1)

        console.log(count)
        setUserCount(count)
    }, [])
    const cardDetails = [
        {
            title: 'vmware',
            description: 'when the pandemic hit, those of us who thrive one-in person',
            name: 'Roxanne Mustafa',
            position: 'Design Team Lead'
        },
        {
            title: 'Docusign',
            description: 'Miro helps solve of the major gaps in product in view',
            name: 'Janey Ashley'
        },
        {
            title: 'frog',
            description: 'As we used Miro we moved from skepticsm to belief to innovation',
            name: 'Roxanne Mustafa'
        },
    ]
    return (
        <Container className='justify-center py-10'>
            <div className="flex flex-col text-center ">
                <Heading>
                    Loved by the world's best teams
                </Heading>
                <Button className='justify-center mx-auto my-4 p-2 border-2 border-blue-500 max-w-60 px-8 text-blue-500'>
                    See all customer stories
                </Button>
            </div>

            <div className="max-w-4xl grid md:grid-cols-3 gap-2 md:gap-32 mx-auto">


                {
                    cardDetails.map((el, key) => {
                        return (
                            <Card key={key} title={el.title} description={el.description} name={el.name} position={el.position} />
                        )
                    })
                }



            </div>

            <div className="flex flex-col bg-blue-950 max-w-3xl mx-auto py-10 my-10 text-white text-center rounded-md">
                <Heading>
                    Join {userCount}+ users today
                </Heading>
                <SubHeading className='pt-0 mx-auto'>
                    start for free - upgrade anytime
                </SubHeading>
                <Button className='underline'>
                    Joining as as organization? Contact sales
                </Button>
                <Button className='shadow-brand bg-blue-600 text-white  my-3 px-4 w-fit mx-auto py-2'>Sign up free </Button>
            </div>



        </Container>
    )
}


export const Card = ({ title, description, name, position }:
    {

        title: string,
        description: string;
        name: string;
        position?: string;
    }) => {


    return (

        <motion.div
            initial={{


                border: "none"
            }}

            // borderBottom: 'solid oklch(62.3% 0.214 259.815)',
            //     borderRight: 'solid oklch(62.3% 0.214 259.815)',
            //     borderLeft: 'solid oklch(62.3% 0.214 259.815)',
            whileHover={{

              

                borderTop: '0.2px solid oklch(62.3% 0.214 259.815)',

            }}

        

            transition={{
                duration: 0.3
            }}





            className="w-[200px] px-2  shadow mx-auto rounded-md  ">



            <div className="h-fit py-4">
                <SubHeading className='font-bold  '>
                    {
                        title
                    }
                </SubHeading>
                <p className=''>
                    {
                        description
                    }
                </p>
            </div>

            <div className="flex gap-2 my-4 h-fit items-center">
                <div className="size-10  ">
                    <Image src={profile} alt='profile' className='object-cover rounded-full' />


                </div>
                <span className='text-xs mt-2 '>{name} <br />
                    {position ? position : null}
                </span>
            </div>


        </motion.div>


    )
}