import { cn } from '@/app/utils/utils'
import React from 'react'


export const Button = ({ className, children , ...props}:
    React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <>
        <button className={cn(' px-1 text-sm rounded-full cursor-pointer', className)} {...props}>{children}</button>
       
        </>
    )
}
