import Image from 'next/image'
import db from 'data/shared/db.json'
import styles from 'components/HomePage/BannerSlider/BannerSlider.module.scss'

export const slides = db.main.banners.map((slide) => (
  <div className={styles.slideContainer}>
    <Image alt="banner" height={330} src={slide} width={1400} />
  </div>
))
