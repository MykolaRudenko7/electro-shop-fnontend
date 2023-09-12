import Image from 'next/image'
import db from 'data/shared/db.json'
import styles from 'components/HomePage/BannerSlider/BannerSlider.module.scss'

export const slides = db.main.banners.map((slide) => (
  <div className={styles.slideContainer}>
    <Image alt="banner" src={slide} fill />
  </div>
))
