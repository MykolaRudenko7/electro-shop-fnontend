import PayPanel from 'components/AboutProductPage/PayPanel'
import ProductChoice from 'components/AboutProductPage/ProductChoice'
import ProductFeatures from 'components/AboutProductPage/ProductFeatures'
import ProductOutplay from 'components/AboutProductPage/ProductOutplay'
import ProductSupport from 'components/AboutProductPage/ProductSupport'
import ProdutAdvantages from 'components/AboutProductPage/ProdutAdvantages'

export const metadata = {
  title: 'About Proguct',
  description: 'About product page. Tech online store',
}

export default function AboutProduct() {
  return (
    <>
      <PayPanel />
      <ProductChoice />
      <ProductOutplay />
      <ProductSupport />
      <ProductFeatures />
      <ProdutAdvantages />
    </>
  )
}
