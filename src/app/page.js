import Wrapper from 'components/shared/Wrapper/Wrapper'
import BannerSlider from 'components/HomePage/BannerSlider'
import NewProductsSection from 'components/HomePage/NewProductsSection'
import Slider from 'components/shared/FeedbackSlider'

export default function Home() {
  return (
    <Wrapper>
      <BannerSlider />
      <NewProductsSection />
      <Slider />
    </Wrapper>
  )
}
