import React from 'react'
import { SubHeading } from './subHeading'

export const Footer = () => {
    return (
        <div className='flex flex-col  justify-between w-full  mpx-4 py-10 bg-blue-950 text-white h-80'>
            <div className="flex md:gap-12 gap-4 px-10  md:mx-0 flex-wrap   text-xs md:text-md">
              <List heading='Product'/>

               <List heading='Solutions' />
                <List heading='Product'/>

               <List heading='Solutions' />  
               <List heading='Product'/>

               <List heading='Solutions' />
                <List heading='Product'/>

               <List heading='Solutions' />
            </div>

            <div className="flex gap-2 px-4">
                <span>Logo</span>

                <div className="flex md:gap-3 text-xs md:text-lg">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Manage Cookies</p>
                </div>
            </div>



        </div>
    )
}


export const List = ({ heading, list }: { heading: string, list?: [] }) => {
    return (
        <div className="">
            <SubHeading>
               {
                heading
               }
            </SubHeading>
            <ul>
                <li className='text-neutral-100'>
                    Online Whiteboard
                </li>
            </ul>
        </div>
    )
}