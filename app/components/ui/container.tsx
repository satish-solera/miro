import { cn } from '@/app/utils/utils'
import React from 'react'

export const Container = ({ className, children }:
  {
    className?: string,
    children: React.ReactNode
  }
) => {
  return (
    <div className={cn(' max-w-[400px] md:max-w-5xl px-4 mx-auto py-4 ', className)}>
      {
        children
      }
    </div>
  )
}
