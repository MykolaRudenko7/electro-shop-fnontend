'use client'

import { useId } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { sliderSlideData } from 'data/about-us/sliderSlideData'
import { carouselOptions } from 'constants/feedbackSliderOptions'
import SliderSlide from 'components/shared/FeedbackSlider/FeedbackSlide'
import 'react-alice-carousel/lib/alice-carousel.css'
import styles from 'components/shared/FeedbackSlider/FeedbackSlider.module.scss'

export default function SliderContainer() {
  const slides = sliderSlideData.map((slide) => (
    <SliderSlide author={slide.author} feedback={slide.feedback} key={useId()} />
  ))

  return (
    <section className={styles.sliderContainer}>
      <AliceCarousel items={slides} {...carouselOptions} />
    </section>
  )
}
