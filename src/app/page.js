import Wrapper from 'components/shared/Wrapper/Wrapper'
import BannerSlider from 'components/HomePage/BannerSlider'
import Slider from 'components/shared/FeedbackSlider'

export default function Home() {
  return (
    <Wrapper>
      <BannerSlider />
      <Slider />
    </Wrapper>
  )
}
