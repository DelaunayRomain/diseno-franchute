'use client'

import * as React from 'react'

import { ChevronsLeft } from 'lucide-react'

import { cn } from '../utils/tailwind'

type SwitchContentButtonProps = {
  onClick: () => void
  className?: string
}

export const SwitchContentButton = ({ onClick, className }: SwitchContentButtonProps) => (
  <div className='fixed top-4 right-2.5 lg:right-5 z-20'>
    <button
      type='button'
      onClick={onClick}
    >
      <ChevronsLeft className={cn('w-10 h-10 text-white cursor-pointer', className)} />
    </button>
  </div>
)
