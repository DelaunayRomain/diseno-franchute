'use client'

import * as React from 'react'

import { About } from '../components/about'
import { FixedContentWrapper } from '../components/fixed_content_wrapper'
import { Gallery } from '../components/gallery'
import { SwitchContentButton } from '../components/switch_content_button'
import { cn } from '../utils/tailwind'

type Content = 'gallery' | 'about'

const Home = () => {
  const [initialState, setInitialState] = React.useState(true)
  const [currentContent, setCurrentContent] = React.useState<Content>('gallery')
  const [disabledButton, setDisabledButton] = React.useState(false)

  const disableButton = () => {
    setDisabledButton(true)
    setTimeout(() => setDisabledButton(false), 1000)
  }

  const isGallery = currentContent === 'gallery'
  const isAbout = currentContent === 'about'

  return (
    <main>
      <FixedContentWrapper
        hideContent={!isGallery}
        className={cn(
          !initialState && (isGallery ? 'animate-gallery-move-right' : 'animate-gallery-move-left'),
        )}
      >
        <Gallery />
      </FixedContentWrapper>
      <FixedContentWrapper
        hideContent={!isAbout}
        className={cn(
          initialState
            ? 'translate-x-[100%]'
            : (isAbout ? 'animate-about-move-left' : 'animate-about-move-right'),
        )}
      >
        <About />
      </FixedContentWrapper>
      <SwitchContentButton
        onClick={() => {
          disableButton()
          setInitialState(false)
          setCurrentContent(currentContent === 'gallery' ? 'about' : 'gallery')
        }}
        disabled={disabledButton}
        className={cn(
          !initialState && (isGallery ? 'animate-rotate-180-back' : 'animate-rotate-180'),
        )}
      />
    </main>
  )}

export default Home
