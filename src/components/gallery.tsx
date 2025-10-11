'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { useInfiniteScroll } from '../hooks/infinite_scroll'

import type { Furniture } from '@prisma/client'

export const Gallery = ({ furnitures }: { furnitures: Furniture[] }) => {
  const [allFurnitures, setAllFurnitures] = useState<Furniture[]>([])

  const fetchMoreFurnitures = () => {
    const sortedFurnitures = [...furnitures].sort(() => Math.random() - 0.5)

    setAllFurnitures((prev) => [...prev, ...sortedFurnitures])
  }

  useEffect(() => {
    fetchMoreFurnitures()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { loadMoreRef } = useInfiniteScroll(fetchMoreFurnitures)

  return allFurnitures.length > 0 && (
    <div className='ml-4 md:ml-8 mr-15 lg:mr-20 py-4 md:py-8 max-w-[1400px] 2xl:mx-auto'>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          0: 1,
          700: 2,
          960: 3,
          1440: 4,
        }}
      >
        <Masonry
          style={{ gap: '15px' }}
          itemStyle={{ gap: '15px' }}
        >
          {allFurnitures.map((furniture, index) => (
            <div
              key={index}
              className='overflow-hidden animate-appear'
            >
              <Image
                src={furniture.image_url}
                alt={furniture.name}
                priority={index < 4}
                width={900}
                height={600}
                className='w-full h-auto hover:scale-105 transition-all duration-300'
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div ref={loadMoreRef} />
    </div>
  )
}
