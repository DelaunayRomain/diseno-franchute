import { Footer } from '../components/footer'
import { Gallery } from '../components/gallery'
import { Header } from '../components/header'

export default function Home() {
  return (
    <div className='mx-2 sm:mx-4 lg:mx-10'>
      <Header />
      <Gallery />
      <Footer />
    </div>
  )
}
