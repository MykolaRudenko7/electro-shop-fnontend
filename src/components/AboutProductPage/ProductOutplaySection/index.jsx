'use client'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import 'swiper/css'
import 'swiper/css/pagination'
import { slidesOutplayData } from 'data/about-product/slidesOutplayData'
import OutplaySlide from 'components/AboutProductPage/ProductOutplaySection/OutplaySlide'
import styles from 'components/AboutProductPage/ProductOutplaySection/ProductOutplaySection.module.scss'

export default function ProductOutplay() {
  return (
    <section className={styles.outplay}>
      <div className={styles.outplay__container}>
        <Swiper className={styles.swiper} modules={[Pagination]} pagination={{ clickable: true }}>
          {slidesOutplayData.map(({ title, subtitle }) => (
            <SwiperSlide key={uuidv4()}>
              <OutplaySlide subtitle={subtitle} title={title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
