'use client'
import React, { useState } from 'react'

import Link from 'next/link'
import { Button } from './button'


import { motion } from 'motion/react'
import { cn } from '@/app/utils/utils'
motion

const navlinks = [
  {
    title: "Products",
    href: "/"
  },
  {
    title: "Solutions",
    href: "/"
  },
  {
    title: "Resources",
    href: "/"
  },
  {
    title: "Enterprice",
    href: "/"
  },
  {
    title: "Pricing",
    href: "/"
  }
]
export const Navbar = () => {

  const [open, setOpen] = useState(false)



  return (
    <div className="">

      <DesktopNav className='hidden md:flex' />
      <div className="flex shadow-md justify-around md:hidden px-4 py-4">
        <div className="">
          <h1 className=' text-2xl font-medium itmes-center'>Miro</h1>

        </div>
        <div className="">
          <button onClick={() => setOpen((prev) => !prev)}>click</button>
          {

            open && <div className="flex flex-col">

              {
                navlinks.map((nav, id) => {
                  return (
                    <Link key={id} href={nav.href} className='text-sm '>
                      {
                        nav.title
                      }
                    </Link>
                  )
                })
              }
            </div>
          }
        </div>


      </div>



    </div>
  )
}



export const DesktopNav = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex flex-col md:flex-row itmes-center  py-4 px-4 justify-between", className)}>


      <div className="flex md:flex-row justify-between items-center gap-4 px-8">
        <h1 className=' text-2xl font-medium '>Miro</h1>
        {
          navlinks.map((nav, id) => {
            return (
              <div className="relative group">
                <div className=" ">
                  <Link key={id} href={nav.href} className='text-sm  '>
                    {
                      nav.title
                    }
                  </Link>
                </div>
                <motion.div




                  className={cn("w-0 h-0 px-2 mt-2 absolute inset-0 mx-auto   border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-neutral-400    hidden group-hover:block ",

                    "rotate-90"
                  )}>

                </motion.div>
              </div>
            )
          })
        }
      </div>

      <div className="flex gap-5 items-center">
        <Button>Contact Sales</Button>
        <Button className='mr-2 -ml-3'>Login</Button>
        <Button className='shadow-brand bg-blue-600 text-white -ml-2 p-2 px-4 ' >Sign up free </Button>

      </div>

    </div>
  )
}