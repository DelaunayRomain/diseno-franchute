import { InstagramLogo } from './instagram'
import { LinkedinLogo } from './linkedin'
import { Logo } from './logo'

export const FixedAside = () => (
  <aside className='fixed top-0 right-0 h-screen w-15 lg:w-20 pl-2.5 lg:pl-5 bg-black'>
    <div className='absolute top-28 -right-6 lg:-right-3.5 rotate-90'>
      <p className='text-lg font-bold text-white whitespace-nowrap inline-block'>2019 - 2023</p>
    </div>
    <div className='absolute top-1/2 -right-15 lg:-right-12.5'>
      <Logo className='w-full fill-white rotate-90 -translate-x-7 lg:-translate-x-6' />
    </div>
    <div className='absolute bottom-5 flex flex-col items-center gap-3'>
      <LinkedinLogo />
      <InstagramLogo />
    </div>
  </aside>
)
