import React from 'react'
import { cn } from '../utils/utils'

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
