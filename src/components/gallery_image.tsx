'use client'

import Image from 'next/image'

import { cn } from '../utils/tailwind'

import type { Furniture } from '@prisma/client'

type GalleryImageProps = {
  furniture: Furniture
  priority: boolean
}

export const GalleryImage = ({ furniture, priority }: GalleryImageProps) => (
  <div className='relative group w-full overflow-hidden animate-appear'>
    <Image
      src={furniture.image_url}
      alt={furniture.name}
      priority={priority}
      width={1600}
      height={1600}
      className='w-full h-auto hover:scale-103 transition-all duration-300'
    />
    <div
      className={cn(
        'opacity-0 group-hover:opacity-100 transition-all duration-300 ',
        'pointer-events-none absolute inset-x-0 bottom-0 h-1/2',
        'bg-gradient-to-t from-black to-transparent',
      )}
    />
    <p
      className={cn(
        'scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300',
        'absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1',
        'whitespace-nowrap font-semibold text-white text-xl text-center',
      )}
    >
      {furniture.name}
    </p>
  </div>
)
