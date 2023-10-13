import db from 'data/shared/db.json'
import ProductCardGridItem from 'components/shared/ProductCardGridItem'
import styles from 'components/HomePage/NewProductsSection/NewProductsSection.module.scss'

export const slides = db.main.newProducts.list.map((slide) => (
  <div className={styles.slideContainer}>
    <ProductCardGridItem {...slide} />
  </div>
))
