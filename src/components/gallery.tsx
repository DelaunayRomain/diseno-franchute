'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import { useInfiniteScroll } from '../hooks/infinite_scroll'
import { galleryImages } from '../utils/gallery_images'

export const Gallery = () => {
  const [fetchCount, setFetchCount] = useState(0)
  const [images, setImages] = useState<typeof galleryImages>([])

  const fetchMoreImages = () => {
    const sortedImages = [...galleryImages].sort(() => Math.random() - 0.5)

    setImages((prev) => [...prev, ...sortedImages])
    setFetchCount((prev) => prev + 1)
  }

  useEffect(() => {
    setTimeout(() => fetchMoreImages(), 1200)
  }, [])

  const { loadMoreRef } = useInfiniteScroll(fetchMoreImages, fetchCount < 5)

  return images.length > 0 && (
    <div className='ml-10 sm:ml-15 mr-15 md:mx-20 py-8'>
      <div
        className='grid gap-30 sm:gap-20 lg:gap-25'
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className='animate-image-move-up'
          >
            <div className='overflow-hidden animate-image-expand-down'>
              <Image
                src={image}
                alt={`Gallery ${index}`}
                unoptimized={true}
                className='block w-full'
              />
            </div>
          </div>
        ))}
      </div>
      <div ref={loadMoreRef} />
    </div>
  )
}
