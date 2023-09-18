'use client'

import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel'
import { slides } from 'constants/newProductsSliderSlides'
import { newProductsSliderOptions, responsive } from 'constants/newProductsSliderOptions'
import 'react-alice-carousel/lib/alice-carousel.css'
import styles from 'components/HomePage/NewProductsSection/NewProductsSection.module.scss'

export default function NewProductsSection() {
  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>New Products</h2>
        <Link className={styles.newProductsLink} href="#">
          See All New Products
        </Link>
      </div>
      <div className={styles.sliderContainer}>
        <AliceCarousel items={slides} {...newProductsSliderOptions} responsive={responsive} />
      </div>
    </>
  )
}
