'use client'

import * as React from 'react'

import { ChevronsLeft } from 'lucide-react'

import { About } from '@/components/about'
import { cn } from '@/utils/tailwind'

import { Gallery } from '../components/gallery'

const Home = () => {
  const [initialState, setInitialState] = React.useState(true)
  const [showGallery, setShowGallery] = React.useState(true)
  const [showAboutText, setShowAboutText] = React.useState(false)

  return (
    <React.Fragment>
      <About
        initialState={initialState}
        showAboutText={showAboutText}
        showGallery={showGallery}
      />
      <Gallery
        initialState={initialState}
        showAboutText={showAboutText}
        showGallery={showGallery}
      />
      <div className='fixed top-5 right-2 md:right-5'>
        <button
          type='button'
          onClick={() => {
            setInitialState(false)
            setShowAboutText(!showAboutText)
            setShowGallery(!showGallery)
          }}
        >
          <ChevronsLeft
            className={cn(
              'w-10 h-10 text-white cursor-pointer',
              !initialState && showAboutText && 'animate-rotate-180',
              !initialState && showGallery && 'animate-rotate-180-back',
            )}
          />
        </button>
      </div>
    </React.Fragment>
  )}

export default Home
