'use client'
import React, { useState } from 'react'
import { Container } from './container'
import Link from 'next/link'
import { Button } from './ui/button'
import { h1 } from 'framer-motion/client'
import { cn } from '../utils/utils'


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
        <h1 className=' text-2xl font-medium itmes-center'>Miro</h1>
        {
          navlinks.map((nav, id) => {
            return (
              <Link key={id} href={nav.href} className='text-sm'>
                {
                  nav.title
                }
              </Link>
            )
          })
        }
      </div>

      <div className="flex gap-4 px-3">
        <p className='text-sm text-black itmes-center py-2 pl-2 -mr-2 px-2 '>Contact Sales</p>
        <Button>Login</Button>
        <Button className='shadow-brand bg-blue-600 text-white -ml-2 p-2 px-4 ' >Sign up free </Button>

      </div>

    </div>
  )
}