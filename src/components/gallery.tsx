'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { useInfiniteScroll } from '../hooks/infinite_scroll'
import { galleryImages } from '../utils/gallery_images'

export const Gallery = () => {
  const [images, setImages] = useState<typeof galleryImages>([])

  const fetchMoreImages = () => {
    const sortedImages = [...galleryImages].sort(() => Math.random() - 0.5)

    setImages((prev) => [...prev, ...sortedImages])
  }

  useEffect(() => {
    fetchMoreImages()
  }, [])

  const { loadMoreRef } = useInfiniteScroll(fetchMoreImages)

  return images.length > 0 && (
    <div className='ml-8 mr-15 lg:mr-20 py-8 max-w-[1400px] 2xl:mx-auto'>
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
          {images.map((image, index) => (
            <div
              key={index}
              className=''
            >
              <div className='flex items-center justify-center overflow-hidden animate-appear'>
                <Image
                  src={image}
                  alt={`Furniture ${index}`}
                  priority={index < 10}
                  unoptimized={true}
                  className='block w-full hover:scale-105 transition-all duration-300'
                />
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div ref={loadMoreRef} />
    </div>
  )
}
