import { Logo } from './logo'

export const Background = () => (
  <section className='w-3/4 max-w-[800px] mx-auto h-screen flex items-center justify-center'>
    <div className='relative w-full overflow-hidden -z-10'>
      <Logo className='fill-black animate-logo-move-left' />
      <div className='absolute inset-0 bg-primary animate-logo-move-right' />
    </div>
  </section>
)
