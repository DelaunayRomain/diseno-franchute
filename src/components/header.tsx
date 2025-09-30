import { Logo } from './logo'

export const Header = () => (
  <div className='w-full flex items-center'>
    <p className='w-1/4 text-center text-lg font-bold'>SANTIAGO DE CHILE</p>
    <div className='w-1/2 bg-primary'>
      <Logo className='fill-black' />
    </div>
    <p className='w-1/4 text-center text-lg font-bold'>2019 - 2023</p>
  </div>
)
