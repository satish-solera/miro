import React from 'react'
import { cn } from '../../utils/utils'

export const SubHeading = ({ className, children, as = 'h3' }: {
    className?: string,
    children: React.ReactNode,
    as?: 'h2' | 'h3' | 'h4'
}) => {
    const Tag = as
    return (
        <Tag className={cn('text-[10px] md:text-lg lg:text-sm max-w-2xl md:py-4 font-mono', className)}>
            {
                children
            }
        </Tag>
    )
}
