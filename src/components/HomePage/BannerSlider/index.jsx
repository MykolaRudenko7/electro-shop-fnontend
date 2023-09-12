'use client'

import AliceCarousel from 'react-alice-carousel'
import { slides } from 'constants/bannerSliderSlides'
import { bannerSliderOptions } from 'constants/bannerSliderOptions'
import 'react-alice-carousel/lib/alice-carousel.css'
import styles from 'components/HomePage/BannerSlider/BannerSlider.module.scss'

export default function BannerSlider() {
  return (
    <div className={styles.sliderContainer}>
      <AliceCarousel items={slides} {...bannerSliderOptions} />
    </div>
  )
}
