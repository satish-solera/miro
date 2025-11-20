import React from 'react'
import { Container } from '../container'
import { Heading } from '../ui/heading'
import { SubHeading } from '../ui/subHeading'
import { Button } from '../ui/button'
import { cn } from '../../utils/utils'

export const ConnectSection = () => {
    return (



        <Container className='flex justify-center items-center gap-x-24 -mt-3'>
            {/* <div className=" flex-1 rounded-t-3xl gap-2 flex items-center justify-center absolute left-36 ">
                <Circle className='size-60 bg-red-500 z-8'>

                </Circle>
                <Circle className='bg-amber-400 size-50 z-9'></Circle>
            </div> */}
            <div className="">
                <Heading>
                    Connect <br />
                    your tools, <br />
                    close your tabs
                </Heading>
                <SubHeading>
                    Whether you want to edit your Google Docs, Resolve <br />
                    Jira issuses, or colloborate over Zoom, Miro has 100+ <br />
                    integration with tools you already use and love.
                </SubHeading>
                <Button className='underline text-blue-500'>
                    Learn more
                </Button>
            </div>

        </Container>


    )
}



export const Circle = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("size-40 rounded-full absolute inset-0 mx-auto  bg-gray-400 z-10", className)}>
            {
                children
            }
        </div>
    )
}