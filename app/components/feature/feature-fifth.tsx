import React from 'react'
import { Heading } from '../ui/heading'
import { Button } from '../ui/button'
import { Container } from '../container'
import { SubHeading } from '../ui/subHeading'

export const FifthFeature = () => {
    return (
        <div className='w-full min-h-80 bg-amber-400  mx-auto flex flex-col justify-center py-8'>
            <div className="text-center">
                <Heading>
                    Why companies large <br />
                    and small trust Miro
                </Heading>
                <Button className="underline">
                    Contact sales to request a demo
                </Button>
            </div>
            <Container className='pt-16'>
                <div className="grid grid-cols-3 gap-10">
                    <Grid heading='ISO' subHeading='ISO-27001 enterprise-grade security compliment' />
                    <Grid heading='#1' subHeading='Visual Colloboration Platform on G2' />
                    <Grid heading='99%' subHeading='of the Fortune 100 are customers' />
                    <Grid heading='1,000+' subHeading='community and expert built templates' />
                    <Grid heading='45M+' subHeading='users around the world' />
                    <Grid heading='100+' subHeading='integration with technology partners' />
                </div>
            </Container>
        </div>
    )
}


export const Grid = ({ heading, subHeading }: { heading: string, subHeading: string }) => {
    return (
        <div className="text-center">
            <Heading>
                {
                    heading
                }
            </Heading>
            <SubHeading className='text-balance'>
                {
                    subHeading
                }
            </SubHeading>
        </div>
    )
}