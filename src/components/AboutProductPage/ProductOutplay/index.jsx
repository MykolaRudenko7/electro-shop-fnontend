'use client'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import 'swiper/css'
import 'swiper/css/pagination'
import { slidesOutplayData } from 'data/slidesOutplayData'
import OutplaySlide from 'components/AboutProductPage/ProductOutplay/OutplaySlide'
import styles from 'components/AboutProductPage/ProductOutplay/ProductOutplay.module.scss'

export default function ProductOutplay() {
  return (
    <section className={styles.outplay}>
      <div className={styles.outplay__container}>
        <Swiper className={styles.swiper} pagination={{ clickable: true }} modules={[Pagination]}>
          {slidesOutplayData.map(({ title, subtitle }) => (
            <SwiperSlide key={uuidv4()}>
              <OutplaySlide title={title} subtitle={subtitle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
