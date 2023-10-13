import { useEffect, useState } from 'react'
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import ProductCardGridItem from 'components/shared/ProductCardGridItem'
import ProductCardListItem from 'components/CatalogProductsPage/ProductsCatalog/ProductCardListItem'
import styles from 'components/CatalogProductsPage/ProductsCatalog/ProductsCatalog.module.scss'

const ProductsCatalog = observer(() => {
  const { productsToShowOnPage, currentProductsViewType } = productsStore
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    productsStore.loadData()
    setIsLoading(false)
    productsStore.filterProductsByPrice()
    productsStore.sortProductsBySelectedOption()
    productsStore.setNumbersOfProductsInPriceCategories()
  }, [])

  return (
    <div
      className={cn({
        [styles.cardsBlockGrid]: currentProductsViewType === 'grid',
        [styles.cardsBlockList]: currentProductsViewType === 'list',
      })}
    >
      {isLoading && <p className={styles.loadingMessage}>Loading...</p>}
      {!isLoading &&
        productsToShowOnPage.length > 0 &&
        productsToShowOnPage.map((product) =>
          currentProductsViewType === 'grid' ? (
            <ProductCardGridItem key={uuidv4()} {...product} />
          ) : (
            <ProductCardListItem key={uuidv4()} {...product} />
          ),
        )}
      {!isLoading && (!productsToShowOnPage || productsToShowOnPage.length === 0) && (
        <p className={styles.loadingMessage}>Sorry, there are no products available 😕</p>
      )}
    </div>
  )
})

export default ProductsCatalog
