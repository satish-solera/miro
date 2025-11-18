import React from 'react'
import { cn } from '../../utils/utils'

export const Button = ({ className, children , ...props}:
    React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={cn(' px-1 text-sm rounded-full', className)} {...props}>{children}</button>
    )
}
