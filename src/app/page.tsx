import { Gallery } from '@/components/gallery'
import { InstagramLogo } from '@/components/instagram'
import { LinkedinLogo } from '@/components/linkedin'

import { Logo } from '../components/logo'

export default function Home() {
  return (
    <div className='bg-primary'>
      <div className='relative'>
        <div className='absolute inset-0'>
          <div className='w-2/3 mx-auto h-screen flex items-center justify-center'>
            <Logo className='fill-black' />
          </div>
        </div>
        <div className='absolute inset-0'>
          <div className='mt-25 flex items-center justify-around'>
            <p className='text-lg font-bold text-white'>SANTIAGO DE CHILE</p>
            <p className='text-lg font-bold text-white'>2019 - 2023</p>
          </div>
        </div>
        <div className='absolute inset-0'>
          <div className='mt-150 flex items-center justify-between'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/romain-delaunay-92438725a/'
            >
              <LinkedinLogo className='w-10 h-10 fill-white' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/diseno.franchute/?hl=es'
            >
              <InstagramLogo className='w-10 h-10 fill-white' />
            </a>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  )
}
