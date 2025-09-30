import Hero from '../components/Hero'
import ProductTabs from '../components/ProductTabs'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'

export default function HomePage({ onAdd }) {
  return (
    <>
      <Hero />
      <ProductTabs onAdd={onAdd} />
      <Testimonials />
      <Newsletter />
    </>
  )
}
