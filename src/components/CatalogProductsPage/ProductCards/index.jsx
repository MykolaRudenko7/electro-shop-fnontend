import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import ProductCardGridItem from 'components/shared/ProductCardGridItem'
import ProductCardListItem from 'components/CatalogProductsPage/ProductCards/ProductCardListItem'
import styles from 'components/CatalogProductsPage/ProductCards/ProductCards.module.scss'

export default function ProductCards({ currentViewType, products }) {
  return (
    <div
      className={cn({
        [styles.cardsBlockGrid]: currentViewType === 'grid',
        [styles.cardsBlockList]: currentViewType === 'list',
      })}
    >
      {products.map((item) =>
        currentViewType === 'grid' ? (
          <ProductCardGridItem key={uuidv4()} {...item} />
        ) : (
          <ProductCardListItem key={uuidv4()} {...item} />
        ),
      )}
    </div>
  )
}
