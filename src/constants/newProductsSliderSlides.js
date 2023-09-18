import db from 'data/shared/db.json'
import ProductCardGridItem from 'components/shared/ProductCardGridItem'
import styles from 'components/HomePage/NewProductsSection/NewProductsSection.module.scss'

export const slides = db.main.newProducts.list.map((slide) => (
  <div className={styles.slideContainer}>
    <ProductCardGridItem
      inStock={slide.inStock}
      name={slide.name}
      previousPrice={slide.previousPrice}
      price={slide.price}
      rating={slide.rating}
      reviewsCount={slide.reviewsCount}
      slug={slide.slug}
      url={slide.url}
    />
  </div>
))
