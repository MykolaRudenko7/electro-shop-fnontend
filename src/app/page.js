import { Suspense } from 'react'
import Loading from 'app/loading'
import BannerSlider from 'components/HomePage/BannerSlider'
import Wrapper from 'components/shared/Wrapper/Wrapper'
import ProductsService from 'services/productFetchingService'
import NewProductsSection from 'components/HomePage/NewProductsSection'
import SliderContainer from 'components/shared/FeedbackSlider'

export default async function Home() {
  const newProducts = await ProductsService.fetchNewProducts()

  return (
    <Wrapper>
      <BannerSlider />
      <Suspense fallback={<Loading />}>
        <NewProductsSection newProducts={newProducts} />
      </Suspense>
      <SliderContainer />
    </Wrapper>
  )
}
