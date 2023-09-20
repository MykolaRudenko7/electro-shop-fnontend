'use client'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import 'swiper/css'
import 'swiper/css/pagination'
import { slidesProductChoice } from 'data/about-product/productChoiceData'
import ProductSlideItem from '@/ProductChoiceSection/ProductChoiceSlider/ProductChoiceSliderItem'
import styles from '@/ProductChoiceSection/ProductChoiceSlider/ProductChoiceSlider.module.scss'

export default function ProductChoiceSlider() {
  return (
    <div className={styles.wrapper}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
      >
        {slidesProductChoice.map(({ imageSrc, text, linkText, href }) => (
          <SwiperSlide key={uuidv4()}>
            <ProductSlideItem href={href} imageSrc={imageSrc} linkText={linkText} text={text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
