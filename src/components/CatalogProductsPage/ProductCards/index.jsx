import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import data from 'data/shared/db.json'
import styles from 'components/CatalogProductsPage/ProductCards/ProductCards.module.scss'

export default function ProductCards({ currentViewType }) {
  const {
    laptops: { list },
  } = data

  return (
    <div
      className={cn(
        ({ [styles.cardsBlockGrid]: currentViewType === 'grid' },
        { [styles.cardsBlockList]: currentViewType === 'list' }),
      )}
    >
      {list.map((item) =>
        currentViewType === 'grid' ? (
          <ProductCardGrigItem key={uuidv4()} {...item} />
        ) : (
          <ProductCardListItem key={uuidv4()} {...item} />
        ),
      )}
    </div>
  )
}