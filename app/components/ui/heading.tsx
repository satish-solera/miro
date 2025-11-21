import React from 'react'
import { cn } from '../../utils/utils'

export const Heading = ({ className, children, as = 'h2' }: {
    className?: string,
    children: React.ReactNode,
    as?: 'h1' | 'h2' | 'h3'
}) => {
    const Tag = as
    return (

        <Tag className={cn('text-xl md:text-2xl lg:text-5xl font-bold font-sans', className)}>{children}</Tag>
    )
}
