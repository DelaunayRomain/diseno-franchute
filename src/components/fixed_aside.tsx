import { InstagramLogo } from './instagram'
import { LinkedinLogo } from './linkedin'

export const FixedAside = () => (
  <aside className='fixed top-0 right-0 h-screen w-15 md:w-20 pl-2.5 md:pl-5 bg-primary'>
    <div className='absolute top-28 -right-6 md:-right-3.5 -rotate-90'>
      <p className='text-lg font-bold text-white whitespace-nowrap inline-block'>2019 - 2023</p>
    </div>
    <div className='absolute top-1/2 -right-15 md:-right-12.5 -rotate-90'>
      <p className='text-lg font-bold text-white whitespace-nowrap inline-block'>SANTIAGO DE CHILE</p>
    </div>
    <div className='absolute bottom-5 flex flex-col items-center gap-3'>
      <LinkedinLogo />
      <InstagramLogo />
    </div>
  </aside>
)
