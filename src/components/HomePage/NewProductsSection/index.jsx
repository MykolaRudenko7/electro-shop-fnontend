'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel'
import { newProductsSliderOptions, responsive } from 'constants/newProductsSliderOptions'
import ProductCardGridItem from 'components/shared/ProductCardGridItem'
import 'react-alice-carousel/lib/alice-carousel.css'
import styles from 'components/HomePage/NewProductsSection/NewProductsSection.module.scss'

export default function NewProductsSection({ newProducts }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const carouselItems = newProducts?.map((slide) => (
    <div className={styles.slideContainer} key={slide.id}>
      <ProductCardGridItem {...slide} />
    </div>
  ))

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
            <AliceCarousel
              items={carouselItems}
              {...newProductsSliderOptions}
              responsive={responsive}
            />
          </div>
        </div>
      )}
    </>
  )
}
