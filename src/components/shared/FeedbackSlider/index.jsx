'use client'

import { useId } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { sliderSlideData } from 'data/sliderSlideData'
import { carouselOptions } from 'constants/feedbackSliderOptions'
import SliderSlide from 'components/shared/FeedbackSlider/FeedbackSlide'
import 'react-alice-carousel/lib/alice-carousel.css'
import styles from 'components/shared/FeedbackSlider/FeedbackSlider.module.scss'

export default function SliderContainer() {
  const slides = sliderSlideData.map((slide) => (
    <SliderSlide key={useId()} feedback={slide.feedback} author={slide.author} />
  ))

  return (
    <section className={styles.sliderContainer}>
      <AliceCarousel items={slides} {...carouselOptions} />
    </section>
  )
}
