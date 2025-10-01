import { InstagramLogo } from './instagram'
import { LinkedinLogo } from './linkedin'

export const Footer = () => (
  <footer className='h-[200px] w-1/2 mx-auto'>
    <div className='h-full flex justify-evenly items-center'>
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
  </footer>
)
