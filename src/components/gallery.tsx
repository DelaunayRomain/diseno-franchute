'use client'

import * as React from 'react'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { GalleryImage } from './gallery_image'
import { useInfiniteScroll } from '../hooks/infinite_scroll'

import type { FurnitureWithBlur } from '../utils/blur_image'

export const Gallery = ({ furnitures }: { furnitures: FurnitureWithBlur[] }) => {
  const [allFurnitures, setAllFurnitures] = React.useState<FurnitureWithBlur[]>([])

  const fetchMoreFurnitures = () => {
    const sortedFurnitures = [...furnitures].sort(() => Math.random() - 0.5)

    setAllFurnitures((prev) => [...prev, ...sortedFurnitures])
  }

  React.useEffect(() => {
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
            <React.Fragment key={index}>
              <GalleryImage
                furniture={furniture}
                priority={index < 4}
              />
              {index === allFurnitures.length - 1 && <div ref={loadMoreRef} />}
            </React.Fragment>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}
