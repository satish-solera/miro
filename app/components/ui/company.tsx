'use client'
import { Container } from './container'

import cisco from '../../../public/cisco.png'
import Walmart from '../../../public/Walmart.png'
import deloitte from '../../../public/deloitte.png'
import volvo from '../../../public/volvo.png'
import Image from 'next/image'
import { motion } from 'motion/react'

export const Company = () => {
    return (
        <div className='md:mt-34'>
            <Container className='flex flex-col items-center justify-center'>
                <span className=' font-medium'>Trusted by 45M+ Users</span>
                <CompanyNames/>
            </Container>
        </div>
    )
}


export const CompanyNames = () => {
    const names = [
        {
            title: 'Walmart' ,
            img : Walmart
        },
        {
            title: 'Cisco',
            img: cisco
        },
        {
            title: 'Deloitte',
            img: deloitte
        },
        {
            title: 'Volvo',
            img: volvo
        }
    ]
    return (
        <div className="flex md:gap-x-20 gap-3 md:py-4 ">
            {
                names.map((ele , id)=>{

                    return (
                       <motion.div 

                       whileHover={{
                        scale: 1.1,
                       
                       }}

                       
                       
                       key={id} className='flex text-xs md:text-normle size-15 md:size-40  justify-center items-center '>
                        <Image src={ele.img} alt={ele.title} />
                       </motion.div>
                    )
                })
            }
        </div>
    )
}
