'use client'

import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel'
import { useEffect, useState } from 'react'
import { slides } from 'constants/newProductsSliderSlides'
import { newProductsSliderOptions, responsive } from 'constants/newProductsSliderOptions'
import 'react-alice-carousel/lib/alice-carousel.css'
import styles from 'components/HomePage/NewProductsSection/NewProductsSection.module.scss'

export default function NewProductsSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <div>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>New Products</h2>
            <Link className={styles.newProductsLink} href="#">
              See All New Products
            </Link>
          </div>
          <div className={styles.sliderContainer}>
            <AliceCarousel items={slides} {...newProductsSliderOptions} responsive={responsive} />
          </div>
        </div>
      )}
    </>
  )
}
