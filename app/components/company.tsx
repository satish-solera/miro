import React from 'react'
import { Container } from './container'
import { spawn } from 'child_process'

export const Company = () => {
    return (
        <div className='md:py-4'>
            <Container className='flex flex-col items-center justify-center'>
                <span className='py-2 font-medium'>Trusted by 45M+ Users</span>
                <CompanyNames/>
            </Container>
        </div>
    )
}


export const CompanyNames = () => {
    const names = [
        {
            title: 'Walmart'
        },
        {
            title: 'Cisco'
        },
        {
            title: 'Deloitte'
        },
        {
            title: 'okta'
        }
    ]
    return (
        <div className="flex md:gap-20 gap-3 md:py-4 ">
            {
                names.map((names , id)=>{
                    return (
                       <span key={id} className='flex text-xs md:text-normle size-15 md:size-20 bg-red-50 justify-center items-center '>
                        {
                            names.title
                        }
                       </span>
                    )
                })
            }
        </div>
    )
}
