import PayPanelSection from 'components/AboutProductPage/PayPanel'
import ProductChoiceSection from 'components/AboutProductPage/ProductChoiceSection'
import ProductFeaturesSection from 'components/AboutProductPage/ProductFeaturesSection'
import ProductOutplaySection from 'components/AboutProductPage/ProductOutplaySection'
import ProductSupportSection from 'components/AboutProductPage/ProductSupportSection'

export const metadata = {
  title: 'About Proguct',
  description: 'About product page. Tech online store',
}

export default function AboutProduct() {
  return (
    <>
      <PayPanelSection />
      <ProductChoiceSection />
      <ProductOutplaySection />
      <ProductSupportSection />
      <ProductFeaturesSection />
    </>
  )
}
