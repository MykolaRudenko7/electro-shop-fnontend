'use client'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import 'swiper/css'
import 'swiper/css/pagination'
import { slidesProductChoice } from 'data/productChoiceData'
import ProductSlideItem from 'components/AboutProductPage/ProductChoice/ProductChoiceSlider/ProductChoiceSliderItem'
import styles from 'components/AboutProductPage/ProductChoice/ProductChoiceSlider/ProductChoiceSlider.module.scss'

export default function ProductChoiceSlider() {
  return (
    <div className={styles.wrapper}>
      <Swiper className={styles.swiper} pagination={{ clickable: true }} modules={[Pagination]}>
        {slidesProductChoice.map(({ imageSrc, text, linkText, href }) => (
          <SwiperSlide key={uuidv4()}>
            <ProductSlideItem imageSrc={imageSrc} text={text} linkText={linkText} href={href} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
